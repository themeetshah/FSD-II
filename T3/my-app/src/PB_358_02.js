function ex4(props) {
    return (
        <>
            <table rules='all' border='1'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>T1</th>
                        <th>T2</th>
                    </tr>
                </thead>
                <tbody>
                    {props.studs.map((element, index) => (
                        <tr>
                            <td>{element.name}</td>
                            <td>{element.roll}</td>
                            <td>{element.t1}</td>
                            <td>{element.t2}</td>
                        </tr>
                    ))}
                </tbody>
            </table >
        </>
    )
}

export default ex4;