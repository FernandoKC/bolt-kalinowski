import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CartWidget = () => {
    return (
        <>
        <Form className="d-flex">
            <Button variant="dark"><FaShoppingCart/></Button>
        </Form>
        </>
    )
}

export default CartWidget
