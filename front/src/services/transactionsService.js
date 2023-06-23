import axios from 'axios';

const getTansactions = async ()=>{
    try {
        const response = await axios.get('/api/transactions')
        if(response.data !== undefined){
            return response.data
        }
        
    } catch (error) {
        console.log(error);
    }
}

const transactionsService = {
    getTansactions,

}
export default transactionsService