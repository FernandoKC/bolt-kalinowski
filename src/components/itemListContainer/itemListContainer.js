import React from 'react'
import ItemCount from '../itemCount/itemCount';

const ItemListContainer = (props) => {
    return (
        <>
        <h1>item: {props.item} </h1>
        <ItemCount initial = {0} stock = "6"/>
        </>
    );
};

export default ItemListContainer;