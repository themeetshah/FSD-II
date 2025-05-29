import Car from './car2'

function prop1() {
    const info = { name: 'Ford', model: 'Mustang' }
    return (
        <>
            <Car brand={info} />
        </>
    )
}

export default prop1