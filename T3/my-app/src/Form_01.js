import { useState } from "react";

function MyForm() {
    const [formdata, setFormdata] = useState({})
    const handleEvent = (e) => {
        const name = e.target.name
        const value = e.target.value
        setFormdata({ ...formdata, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Your form data:\nName:' + formdata.fname + '\nAge:' + formdata.age + '\nEmail:' + formdata.email + '\nPassword:' + formdata.pass)
    }

    return (
        <form>
            <input onChange={handleChange} />
            <select onChange={handleChange} value={myCar}>
                <option value='ford'>Ford</option>
                <option value='volvo'>Volvo</option>
                <option value='fiat'>Fiat</option>
            </select>

            <div>
                <h3>Selected Car: {myCar}</h3>
            </div>
        </form>
    );
}