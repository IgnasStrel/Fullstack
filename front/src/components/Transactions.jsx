import React, { useState, useEffect } from 'react';
import transactionsService from '../services/transactionsService';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    const getData = ()=>{
        transactionsService.getTansactions().then(res => {
            setTransactions([...res.data])
        })
    }

    useEffect(()=>{
        getData()
    }, []);

    console.log(transactions);

  return (
    <div>
      Transaction
    </div>
  )
}

export default Transactions
