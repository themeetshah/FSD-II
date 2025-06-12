import { useState, useEffect } from "react";
import axios from 'axios';

const Randomimgs = () => {
    const [joke, setJoke] = useState('');

    const fetchJoke = () => {

        axios.get('https://official-joke-api.appspot.com/random_joke')
            .then((response) => {
                const { setup, punchline } = response.data;
                setJoke(`${setup} ${punchline}`);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        fetchJoke(); // Fetch a joke when the component first loads
    }, []);

    return (
        <>
            {joke && <p>{joke}</p>}
            <button onClick={fetchJoke}>Fetch</button>
        </>
    );
};

export default Randomimgs;
