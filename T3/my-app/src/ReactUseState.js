import { useState } from 'react'
function CountApp() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Incr</button>
            <button onClick={() => setCount(count - 1)}>Decr</button>
            <br />
        </div>
    )
}

export default CountApp