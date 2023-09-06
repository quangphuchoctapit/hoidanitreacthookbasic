import React from 'react'
import { useState, useEffect } from 'react'

class CountdownClass extends React.Component {
    state = {
        count: 10
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer)
                this.props.onTimesUp()
            }
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 500)
    }
    render() {
        return (
            <>
                <p>Countdown class</p>
                <h1>{this.state.count}</h1>
            </>
        )
    }
}

const CountdownHook = (props) => {
    const [count, setCount] = useState(10)
    useEffect(() => {
        if (count === 0) {
            props.onTimesUp()
            return
        }
        let timer = setInterval(() => {
            setCount(count - 1)
        }, 500)
        return () => {
            clearInterval(timer)
        }
    }, [count])
    return (
        <>
            <p>Countdown hook</p>
            <h1>{count}</h1>
        </>
    )
}

export { CountdownClass, CountdownHook };

// import { useState, useEffect } from 'react';
// import React from 'react';


// class CountdownClass extends React.Component {
//     state = {
//         count: 10
//     }

//     componentWillUnmount() {
//         if (this.timer) {
//             clearInterval(this.timer)
//         }
//     }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevState.count !== this.state.count && this.state.count === 0) {
//             if (this.timer) {
//                 clearInterval(this.timer)
//                 this.props.onTimesUp()
//                 return
//             }
//         }
//     }

//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState({
//                 count: this.state.count - 1
//             })
//         }, 500)
//     }

//     render() {
//         return (
//             <>
//                 <p>Countdown class</p>
//                 <h2>{this.state.count}</h2>
//             </>
//         )
//     }
// }

// const CountdownHook = (props) => {
//     const [count, setCount] = useState(10)

//     useEffect(() => {
//         if (count === 0) {
//             props.onTimesUp()
//             return
//         }

//         let timer = setInterval(() => {
//             setCount(count - 1)
//         }, 500)

//         return () => clearInterval(timer)
//     }, [count])

//     return (
//         <>
//             <p>Countdown hook</p>
//             <h2>{count}</h2>
//         </>
//     )
// }

// export { CountdownClass, CountdownHook }