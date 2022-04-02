import axios from "axios";



const  URL = "https://worldtimeapi.org/api/ip";


//This call get get a Time Object from the API.
export const getCurrentTime = async () => {
    try{
        const {data} = await axios.get(URL);
        return data;
    }catch (error){
        console.log(error)
    }

}
