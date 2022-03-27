import axios from "axios";
import {QuoteType} from "../models/quote.interface";


const  URL = 'https://programming-quotes-api.herokuapp.com/Quotes/random';


//This call get get a random quote from the API.
export const getRandomQuote = async () => {
    try{
        const {data} = await axios.get(URL);
        return data;
    }catch (error){
        console.log(error)
    }
}
