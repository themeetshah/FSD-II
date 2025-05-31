// filter method works with array and including or excluding elements inside array based on condition

const ArrFilter = () => {
    const arr = [1, 2, 3, 4, 5]
    const arr2 = arr.filter((num) => {
        return num !== 3
    })

    return (
        <h1>array after filter: [{arr2.join(',')}]</h1>
    )
}

export default ArrFilter