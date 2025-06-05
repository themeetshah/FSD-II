import { useState } from 'react'
function Write() {
    const [change, setChange] = useState('')
    return (
        <div>
            <br />
            <h2>{change}</h2>
            <input type='text' onChange={(event) => setChange(() => {
                return event.target.value
            })} />
            <br />
        </div>
    )
}

export default Write