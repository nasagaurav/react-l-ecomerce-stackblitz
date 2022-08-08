import axios from 'axios';

const base = 'https://thawing-crag-61733.herokuapp.com';
export async function getProducts() {
  const url = `${base}/products`;
  const result = await axios
    .get(url)
    .then((res) => res.data)
    .then((d) => d.data);
  return result;
}
export async function getTags() {
  const url = `${base}/tags`;
  const result = await axios
    .get(url)
    .then((res) => res.data)
    .then((d) => d.data);
  return result;
}
export async function getCart(token) {
  const url = `${base}/cart`;
  const headers = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const result = await axios
    .get(url, headers)
    .then((res) => res.data)
    .then((d) => d.data);
  return result;
}
export async function getOrders(token) {
  const url = `${base}/orders`;
  const headers = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const result = await axios
    .get(url, headers)
    .then((res) => res.data)
    .then((d) => d.data);
  return result;
}
