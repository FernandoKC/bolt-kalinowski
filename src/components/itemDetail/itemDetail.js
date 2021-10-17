import React from 'react'
import Card from 'react-bootstrap/Card'
import ItemCount from '../../components/itemCount/itemCount';
import './itemDetail.css'

const Item = ({data}) => {
    return (
        <Card key={data.id}>
            <div className="image-container">
                <Card.Img variant="top" src={data.image} />
            </div>
            <Card.Body >
                <Card.Title className="overflow-hidden"> {data.title}</Card.Title>
                <Card.Text style={{ maxHeight: '100px' }} className="overflow-auto">
                    {data.description}
                </Card.Text>
                <Card.Subtitle  >Price: $ {data.price}</Card.Subtitle >
                <Card.Subtitle >Stock: {data.stock}</Card.Subtitle>
            </Card.Body>
            <ItemCount style={{ bottom: '0' }} initial = {data.initial} stock = {data.stock} id = {data.id} price = {data.price}/>
        </Card>
    )
}

export default Item
