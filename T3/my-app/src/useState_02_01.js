import { useState } from 'react'
function HideNSeek() {
    const [show, setShow] = useState(false)
    const [text, setText] = useState('')
    const [buttonText, setButtonText] = useState('show')
    const buttonTextUpdate = () => {
        setShow(!show)
        if (show === false) {
            setButtonText('show')
            setText('')
        } else {
            setButtonText('hide')
            setText('LJ University')
        }
    }
    return (
        <div>
            <br />
            <h1>{text}</h1>
            <button onClick={buttonTextUpdate}>{buttonText}</button>
            <br />
        </div>
    )
}

export default HideNSeek