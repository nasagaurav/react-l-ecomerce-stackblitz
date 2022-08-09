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
    .then((d) => (d.status ? d.data : []));
  return result;
}
export async function changePassword(password, token) {
  const url = `${base}/profile`;
  const headers = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const result = await axios
    .patch(url, headers, { field: 'password', value: password })
    .then((res) => res.data)
    .then((d) => (d.status ? d.data : []));
  return result;
}

export async function addToCart(pid, token) {
  const url = `${base}/addToCart/${pid}`;
  const headers = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const result = await axios
    .get(url, headers)
    .then((res) => res.data)
    .then((d) => (d.status ? d.data : []));
  return result;
}
export async function removeFromCart(cid, token) {
  const url = `${base}/removeFromCart/${cid}`;
  const headers = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const result = await axios
    .get(url, headers)
    .then((res) => res.data)
    .then((d) => (d.status ? d.data : []));
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
    .then((d) => (d.status ? d.data : []));
  return result;
}

export async function getLogin(payload) {
  const url = `${base}/login`;
  const result = await axios
    .post(url, payload)
    .then((res) => res.data)
    .then((d) => {
      if (d.status) {
        localStorage.setItem('token', d.token);
        localStorage.setItem('user', d.data.name);
        return { token: d.token, user: d.data.name, status: true };
      } else {
        return { token: '', user: null, status: false };
      }
    });

  return result;
}
