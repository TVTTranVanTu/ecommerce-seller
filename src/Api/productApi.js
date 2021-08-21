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
  getActive: (id) => {
    const url = `/home/posts/products/active?userId=${id}`;
    return axiosClient.get(url);
  },
  getEmpty: (id) => {
    const url = `/home/posts/products/empty?userId=${id}`;
    return axiosClient.get(url);
  },
  getDisnable: (id) => {
    const url = `/home/posts/products/disable?userId=${id}`;
    return axiosClient.get(url);
  },
  getDetailProduct: (id) => {
    const url = `/home/posts/products/${id}`;
    return axiosClient.get(url);
  },
  update: (id) => {
    const url = `/home/posts/products/${id}`;
    return axiosClient.put(url);
  },
  delete: (id) => {
    const url = `/home/posts/${id}`;
    return axiosClient.delete(url);
  },
};

export default productAPI;
