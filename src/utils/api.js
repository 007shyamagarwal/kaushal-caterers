export const BASE_URL = getBaseURL();
export const ENDPOINTS = {};

function getBaseURL() {
  return window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';
}
