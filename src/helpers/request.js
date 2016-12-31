import axios from 'axios';

const baseUrl = 'http://localhost:8080/wp-api/wp-json/wp/v2';

// axios requests for different endpoints
const getPosts = (perPage) => axios.get(`${baseUrl}/posts?per_page=${perPage}`);
const getPostsByCategory = (perPage, category) => axios.get(`${baseUrl}/posts?per_page=${perPage}&categories=${category}`);
// eslint-disable-next-line
const getPostsByTag = (perPage, tag) => axios.get(`${baseUrl}/posts?per_page=${perPage}&tags=${tag}`);
const getPostBySlug = (slug) => axios.get(`${baseUrl}/posts?slug=${slug}`);
const getCategories = () => axios.get(`${baseUrl}/categories`);
const getTags = () => axios.get(`${baseUrl}/tags`);
const getCategoriesBySlug = (slug) => axios.get(`${baseUrl}/categories?slug=${slug}`);
const getTagsBySlug = (slug) => axios.get(`${baseUrl}/tags?slug=${slug}`);

/**
 * Collect all metadata for each post in the array
 * (only ids for the metadata are exposed in `posts`)
 *
 * @param postMeta {array} data (IDs) from the `posts` endpoint
 * @param rawMeta {array} raw data from the meta endpoint
 * @returns {array} raw data for the meta matching the post
 */
const extractMetadata = (postMeta, rawMeta) => (
  rawMeta.filter((meta) => {
    for (let i = 0; i < postMeta.length; i++) {
      if (postMeta[i] === meta.id) {
        return true;
      }
    }
    return false;
  })
);

// Filters the raw API objects and returns a new array containing
// the objects with only the required data
const filterPosts = (posts, categories, tags) => {
  return posts.map((post) => ({
    id: post.id,
    date: post.date_gmt,
    author: post.author,
    categories: extractMetadata(post.categories, categories),
    tags: extractMetadata(post.tags, tags),
    excerpt: post.excerpt.rendered,
    title: post.title.rendered,
    content: post.content.rendered,
    slug: post.slug,
  }))
}

/**
 * Load all data from `posts` and `categories` endpoints limited by
 * the current per_page parameter.
 *
 * @param perPage {number} the amount of posts to be loaded
 * @returns {Promise.array} filtered posts data
 */
const loadPosts = (perPage) => (
  axios.all([getPosts(perPage), getCategories(), getTags()])
    .then(axios.spread((posts, categories, tags) => filterPosts(posts.data, categories.data, tags.data)))
    .catch((err) => { console.error(err) })
);

/**
 * Called by component `Single` to load a single post
 * matching the route parameter.
 *
 * @param slug {string} Route param `/post/:slug`
 * @returns {Promise.object} filtered data for a single post object
 * @returns {Promise.bool} false if `obj.data` is empty (no post was found)
 */
const loadPostBySlug = (slug) => (
  axios.all([getPostBySlug(slug), getCategories(), getTags()])
    .then(axios.spread((post, categories, tags) => post.data.length > 0
      ? filterPosts(post.data, categories.data, tags.data)
      : false
    ))
    .catch((err) => { console.error(err) })
);

/**
 * Loads all posts from a specific category on the `/category/:slug` route
 *
 * @param perPage {number} the amount of posts to load
 * @param slug {string} the slug of the category
 * @returns {Promise.array} filtered posts data
 */
const loadPostsByCategory = (perPage, slug) => (
  getCategoriesBySlug(slug)
    .then((category) => (
      axios.all([getPostsByCategory(perPage, category.data[0].id), getCategories(), getTags()])
        .then(axios.spread((posts, categories, tags) => filterPosts(posts.data, categories.data, tags.data)))
        .catch((err) => { console.error(err) })
    ))
    .catch((err) => { console.error(err) })
);

// Tags
const loadPostsByTag = (perPage, slug) => (
  getTagsBySlug(slug)
    .then((tag) => (
      axios.all([getPostsByTag(perPage, tag.data[0].id), getCategories(), getTags()])
        .then(axios.spread((posts, categories, tags) => filterPosts(posts.data, categories.data, tags.data)))
        .catch((err) => { console.error(err) })
    ))
    .catch((err) => { console.error(err) })
);

export {
  loadPosts,
  loadPostBySlug,
  loadPostsByCategory,
  loadPostsByTag,
};
