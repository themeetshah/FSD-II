function football() {
    const shoot = (a) => {
        alert(a)
    }
    return (
        <button onDoubleClick={() => shoot('Goal!')}>Take the shoot</button>
    )
}

export default football