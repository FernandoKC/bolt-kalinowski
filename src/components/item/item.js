import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from '../itemCount/itemCount';
import './item.css'

const Item = ({data}) => {
    return (
        <Card style={{ width: '18rem', height: 'auto', position: 'relative' }} key={data.id}>
            <Card.Img variant="top" src={data.image} style={{maxHeight: '300px', width: 'auto'}}/>
            <ItemCount style={{ bottom: '0' }} initial = {data.initial} stock = {data.stock} id = {data.id}/>
            <Card.Body style={{ maxHeight: '200px'  }}>
                <Card.Title style={{ maxHeight: '50px' }} className="overflow-hidden"> {data.title}</Card.Title>
                <Card.Text style={{ maxHeight: '100px' }} className="overflow-auto">
                    {data.description}
                </Card.Text>
            </Card.Body>
            
        </Card>
    )
}

export default Item
