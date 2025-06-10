import { useContext } from 'react';
import { Fname } from './ReactUseContext';

function Comp() {
    const value = useContext(Fname);
    return <span>{value}</span>;
}

export default Comp