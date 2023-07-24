//import { getApi } from "../helpers";
import axios from "axios";

import { BASE_URL } from "./base";

/**
 * Sends an HTTP request using axios to the specified URL with the provided method and headers (optional).
 *
 * @param {string} config.url - The URL to which the HTTP request will be sent.
 * @param {string} config.method - The HTTP method for the request (e.g., 'GET', 'POST', 'PUT', 'DELETE', etc.).
 * @param {Object} [config.headers] - (Optional) An object containing custom headers to be included in the request.
 * @returns {Promise<any>} - A Promise that resolves to the response data received from the API.
 */

export const getApi = ({
  url,
  method,
  headers = {},
}: {
  url: string;
  method: string;
  headers?: object;
}): Promise<any> => {
  return axios({
    url,
    method,
    headers,
  });
};
/**
 * Fetches a list of Pokémon from the API based on the specified page and limit.
 *
 * @param {number} page - The page number of the Pokémon list to fetch.
 * @param {number} [limit=10] - The number of Pokémon to fetch per page. Defaults to 10 if not provided.
 * @returns {Promise<any>} - A Promise that resolves to the data containing the list of Pokémon.
 */
export const getPokeList = async (page: number, limit: number = 10) => {
  const res = await getApi({
    url: `${BASE_URL}?offset=${page}&limit=${limit}`,
    method: "GET",
  });
  return res.data;
};

/**
 * Fetches detailed information about a specific Pokémon from the API.
 *
 * @param {string} name - The name of the Pokémon to fetch details for.
 * @returns {Promise<any>} - A Promise that resolves to the data containing the Pokémon's details.
 */
export const getPokeDetail = async (name: string) => {
  const res = await getApi({
    url: `${BASE_URL}/${name}`,
    method: "GET",
  });
  return res.data;
};
