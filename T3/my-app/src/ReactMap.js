function map(props) {
    return (
        props.arr1.map((value) => {
            return <p>array values = {value}</p>
        })
    )
}

export default map