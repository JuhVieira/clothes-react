  
import axios from 'axios';

const URL_BASE = "https://www.mocky.io/v2/59b6a65a0f0000e90471257d"

export async function getProducts() {
    const {data} = await axios.get(`${URL_BASE}`);
    return data
}
