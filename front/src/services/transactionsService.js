import axios from 'axios';

const getTansactions = async ()=>{
    try {
        const response = await axios.get('/api/transactions')
        return response
    } catch (error) {
        console.log(error);
    }
}

const transactionsService = {
    getTansactions,

}
export default transactionsService