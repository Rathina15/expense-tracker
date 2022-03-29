import React, { useContext } from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <div>
            <h3>History</h3>
            <ul id="list" class="list">
                {transactions.map(transactions => (<Transaction key={transactions.id} transactions={transactions} />))}




            </ul>
        </div>
    )
}

export default TransactionList;
