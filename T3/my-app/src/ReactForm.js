import { useState } from "react";

function MyForm() {
    const [myCar, setMyCar] = useState('value');

    const handleChange = (e) => {
        setMyCar(e.target.value);
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

export default MyForm;
