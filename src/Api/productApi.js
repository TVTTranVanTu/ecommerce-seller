import axiosClient from "./axiosClient";
export const productAPI = {
  addProduct: (payload, token) => {
    const url = `/home/posts`;
    return axiosClient.post(url, payload, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
  getAll: (id, param) => {
    const url = `/home/posts/products${param}?userId=${id}`;
    return axiosClient.get(url);
  },
  getDetailProduct: (id) => {
    const url = `/home/posts/products/${id}`;
    return axiosClient.get(url);
  },
  update: (id, payload) => {
    const url = `/home/posts/products/${id}`;
    return axiosClient.put(url, payload);
  },
  delete: (id, payload) => {
    const url = `/home/posts/${id}`;
    return axiosClient.delete(url, payload);
  },
};

export default productAPI;
