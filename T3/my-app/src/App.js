import img from './img1.PNG'
import Car from './car.js'
import Ex from './Ex.js'

function App() {
  const mystyle = {
    color: 'green',
    fontFamily: 'Times New Roman'
  }
  var n = 'ABC'
  return (
    <>
      <Car />
      <Ex name={n} roll='101' marks='12' />
      <Ex name='DEF' roll='201' marks='16' />
      <h1>Kasa kaay</h1>
      <p>{5 + 5}</p>
      <p>shortcut: RAFCE</p>
      <p>Component name must start with Caps</p>
      <h3 style={mystyle}>npx create-react-app my-app</h3>
      {/* <img src='img1.PNG' alt='download react'></img> */}
      <img src={img} alt='download react'></img>
    </>
  );
}

export default App;
