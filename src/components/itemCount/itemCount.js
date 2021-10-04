import React from 'react'

const ItemCount = (props) => {
    const [count, setCount] = React.useState(props.initial)
    
    const handleIncrement = () => {
        if (count < props.stock) {
            setCount(count + 1)
        }
    }

    const handleDecrement = () => {
        if (count > props.initial) {
            setCount(count - 1)
        }
    }

    const showAdd = () => {
        if (count > 0) {
            console.log(count)
        }
    }

    return (
        <div>
           <h1>{count}</h1>
           <button onClick={handleIncrement}>+</button>
           <button onClick={showAdd}>Add To Cart</button>
           <button onClick={handleDecrement}>-</button>
        </div>
    )
}

export default ItemCount
