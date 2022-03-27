import axios, {AxiosRequestConfig} from "axios";


const URL = 'https://ip-geo-location.p.rapidapi.com/ip/check'



const options: AxiosRequestConfig = {
    method: 'GET',
    params: {format: 'json'},
    headers: {
        'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com',
        'X-RapidAPI-Key': '9c423b25b5msh09bc83daaf52a7bp126415jsnb4521b704b92'
    }
};

export const getLocation = async () => {
    try{
        const {data} = await axios.get(URL, options);
        return data;
    }catch (error){
        console.log(error)
    }

}