// import img from './img1.png'
import Car from './car.jsx'
import Ex from './Ex.jsx'
import Prop from './prop1.jsx'
import Ex3 from './PB_301.jsx'
import Ex4 from './PB_358_01.jsx'
import Ex5 from './PB_358_02.jsx'
import Map from './ReactMap.jsx'
import Filter from './ReactFilter.jsx'
import PB360 from './PB_360.jsx'
import PB362 from './PB_362.jsx'
import OnClick from './ReactEvent_onClick.jsx'
import OnDoubleClick from './ReactEvent_onDoubleClick.jsx'
import OnChange from './ReactEvent_onChange.jsx'
import Navbar from './components/Navbar.jsx';
import Counter from './ReactUseState.jsx'
import Change from './useState_01.jsx'
import HideShow1 from './useState_02_01.jsx'
import HideShow2 from './useState_02_02.jsx'
import WriteNDisplay from './useState_03.jsx'
import Reducer from './ReactUseReducer.jsx'
import Context from './ReactUseContext.jsx'
import Form from './ReactForm.js'
import Axios from './ReactAxios.js'

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
      {/* <img src={img} alt='download react'></img> */}

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

      {/* useState */}
      <Counter />

      {/* change color */}
      <Change />

      {/* hide and show */}
      <HideShow1 />

      {/* hide and show */}
      <HideShow2 />

      {/* hide and show */}
      <WriteNDisplay />

      <br />
      {/* useReducer */}
      <Reducer />

      <br />
      <br />
      {/* useContext */}
      <Context />

      <br />
      <br />
      {/* Form */}
      <Form />

      <br />
      <br />
      {/* Axios */}
      <Axios />
    </>
  );
}

export default App;