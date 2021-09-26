import axiosClient from './axiosClient';

class ImageApi {
  findAllImage(paramString) {
    return axiosClient.get(`/${paramString.toggle}?${paramString.params}`);
  }
}

const imageApi = new ImageApi();
export default imageApi;
