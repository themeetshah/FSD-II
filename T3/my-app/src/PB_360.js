// apply filter to skip digits which are <10 from arr and display the rest
// arr = [3,5,11,4,17,8,21,2,26,13,81]

const ArrFilter = () => {
    const arr = [3, 5, 11, 4, 17, 8, 21, 2, 26, 13, 81]
    const arr2 = arr.filter((num) => {
        return num > 10
    })
    return (
        <h1>array after filter: [{arr2.join(',')}]</h1>
    )
}

export default ArrFilter