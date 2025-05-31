// arr with age and name
// filter people with age less than 40
// display remaining people name using map


const ArrFilter = () => {
    const arr = [{ name: 'A', age: 38 }, { name: 'B', age: 58 }, { name: 'C', age: 28 }, { name: 'D', age: 48 }]
    const arr2 = arr.filter((person) => {
        return person.age > 40
    })
    const names = arr2.map(person => person.name).join(', ');
    return (
        <>
            <ul>
                <li>
                    <h3>
                        array after filter: [{names}]
                    </h3>
                </li>
                <li>
                    <h3>
                        total greater than 40: {names.length}
                    </h3>
                </li>
            </ul>
        </>
    )
}

export default ArrFilter