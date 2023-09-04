const NumberCounter = (props) => {
    const handleDecrease = () => {
        props.decrease()
    }
    const handleIncrease = () => {
        props.increase()
    }
    const handleReset = () => {
        props.reset()
    }
    let { count } = props
    return (
        <>
            <h1>NUMBER COUNTER</h1>
            <button onClick={handleDecrease}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleIncrease}>Increment</button>
            <h3>{count}</h3>
        </>
    )
}

export default NumberCounter