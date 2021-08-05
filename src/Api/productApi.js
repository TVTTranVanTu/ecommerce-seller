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
    getAll: (id) => {
        const url = `/home/posts/products?userId=${id}`;
        return axiosClient.get(url);
    },
    update: (payload, token) => {
        const url = "/";
        return axiosClient.update(url, payload, {
            headers: {
                Authorization: "Bearer" + token,
            },
        });
    },
};

export default productAPI;
