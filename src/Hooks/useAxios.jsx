import axios from "axios";

const instanceAxios = axios.create({
    baseURL: 'https://study-mate-server-sz.vercel.app',
});


const useAxios = () => {
    return instanceAxios;
}
export default useAxios;
