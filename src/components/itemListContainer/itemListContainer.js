import React from 'react'
import ItemList from '../itemList/itemList';

const ItemListContainer = (props) => {
    return (
        <>
        <ItemList initial={props.initial}/>
        </>
    );
};

export default ItemListContainer;