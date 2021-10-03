import React from 'react'
import ItemCount from '../itemCount/itemCount';

const ItemListContainer = (props) => {
    return (
        <>
        <h1>item: {props.item} </h1>
        <ItemCount initial = {props.initial} stock = {props.stock}/>
        </>
    );
};

export default ItemListContainer;