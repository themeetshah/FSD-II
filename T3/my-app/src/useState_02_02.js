import { useState } from 'react'
function HideNSeek() {
    const show = {
        display: 'block'
    }
    const hide = {
        display: 'none'
    }
    const [change, setChange] = useState(show)
    return (
        <div>
            <br />
            <h1 style={change}>LJ Univeristy</h1>
            <button onClick={() => setChange(() => {
                if (change.display === 'none') {
                    return show
                } else {
                    return hide
                }
            })}>Change</button>
            <br />
        </div>
    )
}

export default HideNSeek