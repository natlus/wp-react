import axios from 'axios';

const baseUrl = 'http://localhost:8080/wp-api/wp-json/wp/v2';

/**
 * All axios requests used to fetch WordPress data.
 *
 * @param perPage {number} Amount of post objects to fetch
 * @param metaId {number} ID property of metadata (category or tag)
 * @param slug {string} slug property of metadata or post object
 * @returns {Promise} axios.get
 */

const requests = {
  allPosts({ perPage }) {
    return axios.get(`${baseUrl}/posts?per_page=${perPage}`);
  },

  postsByCategory({ perPage, metaId }) {
    return axios.get(
      `${baseUrl}/posts?per_page=${perPage}&categories=${metaId}`
    );
  },

  postsByTag({ perPage, metaId }) {
    return axios.get(`${baseUrl}/posts?per_page=${perPage}&tags=${metaId}`);
  },

  singlePost({ slug }) {
    return axios.get(`${baseUrl}/posts?slug=${slug}`);
  },

  allCategories() {
    return axios.get(`${baseUrl}/categories`);
  },

  allTags() {
    return axios.get(`${baseUrl}/tags`);
  },

  singleTag({ slug }) {
    return axios.get(`${baseUrl}/tags?slug=${slug}`);
  },

  singleCategory({ slug }) {
    return axios.get(`${baseUrl}/categories?slug=${slug}`);
  },
};

export default requests;
