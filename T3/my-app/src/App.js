import img from './img1.png'
import Car from './car.js'
import Ex from './Ex.js'
import Prop from './prop1.js'
import Ex3 from './PB_301.js'
import Ex4 from './PB_358_01.js'
import Ex5 from './PB_358_02.js'
import Map from './ReactMap.js'
import Filter from './ReactFilter.js'
import PB360 from './PB_360.js'
import PB362 from './PB_362.js'
import OnClick from './ReactEvent_onClick.js'
import OnDoubleClick from './ReactEvent_onDoubleClick.js'
import OnChange from './ReactEvent_onChange.js'
import Navbar from './components/Navbar';

function App() {

  const mystyle = {
    color: 'green',
    fontFamily: 'Times New Roman'
  }

  var n = 'ABC'

  var arr = [1, 2, 3, 4, 5]

  var studs = [{ name: 'P1', roll: '50', t1: '23', t2: '17' }, { name: 'P2', roll: '33', t1: '18', t2: '21' }]

  return (
    <>
      <Navbar />
      <Car />

      <Ex name={n} roll='101' marks='12' />
      <Ex name='DEF' roll='201' marks='16' />

      <h1>Kasa kaay</h1>
      <p>{5 + 5}</p>
      <p>shortcut: RAFCE</p>
      <p>Component name must start with Caps</p>

      {/* applying styling */}
      <h3 style={mystyle}>npx create-react-app my-app</h3>

      {/* img display */}
      {/* <img src='img1.png' alt='download react'></img> */}
      <img src={img} alt='download react'></img>

      <Prop />

      {/* PB301 */}
      <Ex3 style={mystyle} />

      {/* PB358 */}
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
          <Ex4 name='P1' roll='50' t1='23' t2='17' />
          <Ex4 name='P2' roll='33' t1='18' t2='21' />
        </tbody>
      </table >

      {/* array */}
      <Map arr1={arr} />

      <Ex5 studs={studs} />

      {/* array filter */}
      <Filter />

      {/* PB360 */}
      <PB360 />

      {/* PB362 and PB373 */}
      <PB362 />

      {/* event */}
      <OnClick />

      <br />
      <br />

      {/* event */}
      <OnDoubleClick />

      <br />
      <br />

      {/* event */}
      <OnChange />
    </>
  );
}

export default App;