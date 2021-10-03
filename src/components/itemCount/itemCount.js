import React from 'react'

const ItemCount = (props) => {
    let initial = parseInt(props.initial)
    const [count, setCount] = React.useState(initial)
    
    const handleIncrement = () => {
        if (count < props.stock) {
            setCount(count + 1)
        }
    }

    const handleDecrement = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }


    return (
        <div>
           <h1>{count}</h1>
           <button onClick={handleIncrement}>+</button>
           <button onClick={handleDecrement}>-</button>
        </div>
    )
}

export default ItemCount
