import axios from 'axios';
import request from './requests';

/**
 * As only IDs of metadata is exposed in the `posts` endpoint
 * we have to filter out the objects from the metadata endpoints
 * by merging the two arrays and filtering out the objects matching
 * each posts meta IDs.
 *
 * @param postMeta {array} data (IDs) from the `posts` endpoint
 * @param meta {array} data from the meta endpoint
 * @returns {array} objects matching the filter
 */
const extractMetadata = (postMeta, meta) => (
  postMeta.concat(meta).filter(value => (
    postMeta.includes(value.id) && value
  ))
);

// Re-map the post objects with wanted properties
const filterPosts = (data) => (
  data.posts.map(post => ({
    id: post.id,
    date: post.date_gmt,
    author: post.author,
    categories: extractMetadata(post.categories, data.categories),
    tags: extractMetadata(post.tags, data.tags),
    excerpt: post.excerpt.rendered,
    title: post.title.rendered,
    content: post.content.rendered,
    slug: post.slug,
    metaTitle: data.metaTitle || '',
  }))
);

/**
 * Get all posts and their metadata limited by `perPage`
 *
 * @param perPage {number} the amount of posts to fetch
 * @returns {Promise.array} filtered posts data
 */
const getPosts = (perPage) => (
  axios.all([ request.allPosts({ perPage }), request.allCategories(), request.allTags() ])
    .then(axios.spread((posts, categories, tags) => (
      filterPosts({
        posts: posts.data,
        categories: categories.data,
        tags: tags.data,
      })
    ))).catch(err => { console.error(err) })
);

/**
 * Get a single post and its metadata
 *
 * @param slug {string} Route param from `/post/:slug`
 * @returns {Promise.object} filtered data for a single post object
 * @returns {Promise.bool} false if `obj.data` is empty (no post was found)
 */
const getSinglePost = (slug) => (
  axios.all([request.singlePost({ slug }), request.allCategories(), request.allTags()])
    .then(axios.spread((post, categories, tags) => post.data.length > 0 && (
      filterPosts({
        posts: post.data,
        categories: categories.data,
        tags: tags.data,
      })
    )
    )).catch(err => { console.error(err) })
);

/**
 * Get all posts from a specific category on the `/category/:slug` route
 *
 * @param perPage {number} the amount of posts to fetch
 * @param slug {string} the slug of the category
 * @returns {Promise.array} filtered posts data
 */
const getPostsByCategory = (perPage, slug) => (
  request.singleCategory({ slug })
    .then(category => (
      axios.all([request.postsByCategory({ perPage, metaId: category.data[0].id }), request.allCategories(), request.allTags()])
        .then(axios.spread((posts, categories, tags) => (
          filterPosts({
            posts: posts.data,
            categories: categories.data,
            tags: tags.data,
            metaTitle: category.data[0].name,
          })
        ))).catch(err => { console.error(err) })
    )).catch(err => { console.error(err) })
);

/**
 * Get all posts from a specific tag on the `/tag/:slug` route
 *
 * @param perPage {number} the amount of posts to fetch
 * @param slug {string} the slug of the tag
 * @returns {Promise.array} filtered posts data
 */
const getPostsByTag = (perPage, slug) => (
  request.singleTag({ slug })
    .then(tag => (
      axios.all([request.postsByTag({ perPage, metaId: tag.data[0].id }), request.allCategories(), request.allTags()])
        .then(axios.spread((posts, categories, tags) => (
          filterPosts({
            posts: posts.data,
            categories: categories.data,
            tags: tags.data,
            metaTitle: tag.data[0].name,
          })
        ))).catch(err => { console.error(err) })
    )).catch(err => { console.error(err) })
);

export {
  getPosts,
  getSinglePost,
  getPostsByCategory,
  getPostsByTag,
};
