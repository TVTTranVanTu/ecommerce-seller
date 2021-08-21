import axiosClient from "./axiosClient";
import queryString from "query-string";
const orderApi = {
  getAll: (id, params) => {
    const queryParams = queryString.stringify(params);
    const url = `/home/orders/vendor/${id}/pageable-items?${queryParams}`;
    return axiosClient.get(url);
  },
};

export default orderApi;
