import axios from "axios";

const instanceAxios = axios.create({
    baseURL: 'http://localhost:3220',
});


const useAxios = () => {
    return instanceAxios;
}
export default useAxios;
