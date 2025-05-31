function Event2() {
    function handleChange(event) {
        alert(event.target.value);
    }
    return (
        <input type='text' name="firstName" onChange={handleChange} />
    );
}
export default Event2;