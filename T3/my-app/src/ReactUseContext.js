import { createContext } from "react";
import Comp from './Comp'
const Fname = createContext()

const Main = () => {
    return (
        < Fname.Provider value='ABC'>
            < Comp />
        </ Fname.Provider>
    );
}

export { Fname }
export default Main