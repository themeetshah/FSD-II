import { useState } from 'react'
function Girgit() {
    const redStyle = {
        font: 'Comic Sans MS',
        color: 'red'
    }
    const greenStyle = {
        font: 'Arial',
        color: 'green'
    }
    const [change, setChange] = useState(greenStyle)
    return (
        <div>
            <br />
            <h1 style={change}>Univeristy</h1>
            <button onClick={() => setChange(() => {
                if (change.color === 'red') {
                    return greenStyle
                } else {
                    return redStyle
                }
            })}>Change</button>
            <br />
        </div>
    )
}

export default Girgit