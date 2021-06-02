import axiosClient from "./axiosClient";
export const productAPI = {

    addProduct: (payload, token) => {
        const url = `/home/posts`;
        return axiosClient.post(url, payload,
            {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }
        );
    },


}

export default productAPI;