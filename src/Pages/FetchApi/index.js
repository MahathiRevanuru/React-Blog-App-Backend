
import axios from 'axios';

const url = "https://blogger23.herokuapp.com/api/fetchData";

const storeBox = async() => {
    try{
        const res = await axios.get(url);
        return res.data;

    } catch (err) {}
}
export default storeBox;