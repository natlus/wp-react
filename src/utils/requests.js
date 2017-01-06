import axios from 'axios';

const baseUrl = 'http://localhost:8080/wp-api/wp-json/wp/v2';

/**
 * All axios requests used to fetch WordPress data.
 *
 * @param obj {object} can contain the following properties:
 * @param perPage {number} Amount of post objects to fetch
 * @param metaId {number} ID property of metadata (category or tag)
 * @param slug {string} slug property of metadata or post object
 * @returns axios.get {Promise}
 */

const request = {
  allPosts(obj) {
   return axios.get(`${baseUrl}/posts?per_page=${obj.perPage}`);
  },

  postsByCategory(obj) {
   return axios.get(`${baseUrl}/posts?per_page=${obj.perPage}&categories=${obj.metaId}`)
  },

  postsByTag(obj) {
   return axios.get(`${baseUrl}/posts?per_page=${obj.perPage}&tags=${obj.metaId}`)
  },

  singlePost(obj) {
   return axios.get(`${baseUrl}/posts?slug=${obj.slug}`);
  },

  allCategories() {
   return axios.get(`${baseUrl}/categories`);
  },

  allTags() {
   return axios.get(`${baseUrl}/tags`);
  },

  singleTag(obj) {
   return axios.get(`${baseUrl}/tags?slug=${obj.slug}`);
  },

  singleCategory(obj) {
   return axios.get(`${baseUrl}/categories?slug=${obj.slug}`);
  },
}

export default request;
