// lib/wordpress.js
const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function fetchAPI(endpoint) {
  const res = await fetch(`${API_URL}${endpoint}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch data from WordPress: ${res.statusText}`);
  }

  return res.json();
}

export async function getPosts() {
  const posts = await fetchAPI('/wp/v2/posts?_embed'); // _embed includes featured images, author data etc.
  return posts;
}

export async function getPostBySlug(slug) {
  const posts = await fetchAPI(`/wp/v2/posts?slug=${slug}&_embed`);
  return posts.length > 0 ? posts[0] : null;
}

// You can add more functions for pages, categories, etc.
export async function getPages() {
  const pages = await fetchAPI('/wp/v2/pages?_embed');
  return pages;
}

export async function getPageBySlug(slug) {
  const pages = await fetchAPI(`/wp/v2/pages?slug=${slug}&_embed`);
  return pages.length > 0 ? pages[0] : null;
}

// --- NEW: Functions for your Custom Post Type (e.g., 'project') ---
/**
 * Fetches all entries of a specific custom post type.
 * @param {string} postTypeSlug The API slug of your custom post type (e.g., 'project')
 * @returns {Array} An array of custom post type entries.
 */
export async function getCustomPosts(postTypeSlug) {
  // Use _embed to get featured images, author details, etc.
  const items = await fetchAPI(`/wp/v2/${postTypeSlug}?_embed`);
  return items;
}

/**
 * Fetches a single entry of a specific custom post type by its slug.
 * @param {string} postTypeSlug The API slug of your custom post type (e.g., 'project')
 * @param {string} slug The slug of the individual entry.
 * @returns {Object|null} The custom post type entry object, or null if not found.
 */
export async function getCustomPostBySlug(postTypeSlug, slug) {
  const items = await fetchAPI(`/wp/v2/${postTypeSlug}?slug=${slug}&_embed`);
  return items.length > 0 ? items[0] : null;
}