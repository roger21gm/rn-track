import axios from 'axios';
import { AsyncStorage } from 'react-native';


const instance = axios.create({
    baseURL: 'https://frozen-headland-04359.herokuapp.com',
});

instance.interceptors.request.use(
    async (config) => {
        const auxConfig = config;
        const token = await AsyncStorage.getItem('token');
        if (token) {
            auxConfig.headers.Authorization = `Bearer ${token}`;
        }
        return auxConfig;
    },
    (err) => Promise.reject(err),
);

export default instance;
