import axiosClient from "./axiosClient";
export const shopApi = {
  getShopInfor: (id) => {
    const url = `/home/shops?userId=${id}`;
    return axiosClient.get(url);
  },
  updateShop: (payload, id) => {
    const url = `/home/shops/users/${id}`;
    return axiosClient.put(url, payload);
  },
};

export default shopApi;
