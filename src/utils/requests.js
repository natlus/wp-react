import axios from 'axios';

const baseUrl = 'http://localhost:8080/wp-api/wp-json/wp/v2';

/**
 * All axios requests used to fetch WordPress data.
 *
 * @param conf {object} request config containing the following properties:
 * @param perPage {number} Amount of post objects to fetch
 * @param metaId {number} ID property of metadata (category or tag)
 * @param slug {string} slug property of metadata or post object
 * @returns axios.get {Promise}
 */

const requests = {
  allPosts(conf) {
    return axios.get(`${baseUrl}/posts?per_page=${conf.perPage}`);
  },

  postsByCategory(conf) {
    return axios.get(`${baseUrl}/posts?per_page=${conf.perPage}&categories=${conf.metaId}`)
  },

  postsByTag(conf) {
    return axios.get(`${baseUrl}/posts?per_page=${conf.perPage}&tags=${conf.metaId}`)
  },

  singlePost(conf) {
    return axios.get(`${baseUrl}/posts?slug=${conf.slug}`);
  },

  allCategories() {
    return axios.get(`${baseUrl}/categories`);
  },

  allTags() {
    return axios.get(`${baseUrl}/tags`);
  },

  singleTag(conf) {
    return axios.get(`${baseUrl}/tags?slug=${conf.slug}`);
  },

  singleCategory(conf) {
    return axios.get(`${baseUrl}/categories?slug=${conf.slug}`);
  },
}

export default requests;
