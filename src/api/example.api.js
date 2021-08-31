import axiosClient from './axiosClient';

const exampleAPI = {
  getAll: (params) => {
    const URL = '/products';
    return axiosClient.get(URL, { params });
  },
};

export default exampleAPI;
