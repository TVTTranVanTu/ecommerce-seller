import axiosClient from "./axiosClient";
import queryString from "query-string";
const orderApi = {
  getAll: (id, status, params) => {
    const queryParams = queryString.stringify(params);
    const url = `/home/orders/vendor/${id}/pageable-items${status}?${queryParams}`;
    return axiosClient.get(url);
  },
  editStatus: (id, status) => {
    const url = `/home/orders/item/${id}/status/${status}`;
    return axiosClient.put(url);
  },
};

export default orderApi;
