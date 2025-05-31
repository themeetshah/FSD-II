// onclick <-> onClick
function football() {
    const shoot = () => {
        alert('Great Shoot')
    }
    return (
        <button onClick={shoot}>Take the shoot</button>
    )
}

export default football