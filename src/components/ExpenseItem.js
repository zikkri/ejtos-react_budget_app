import React from 'react';
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';


const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };

    const increaesAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            cost: 10
        });        
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td><button onClick={event => increaesAllocation(props.name)}>+</button></td>
            <td><TiDelete size="1.5rem" onClick={handleDeleteExpense}></TiDelete></td>            
        </tr>
    );
}

export default ExpenseItem;