import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return axiosInstance.get<T[]>(this.endpoint);
  }

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data)
  }
  

  delete(id: number) {
    return axiosInstance.delete(this.endpoint + "/" + id);
  }

  update<T extends { id: number; }>(entity: T) {
    return axiosInstance.patch(this.endpoint + "/" + entity.id, entity)
  }
}

export default APIClient;