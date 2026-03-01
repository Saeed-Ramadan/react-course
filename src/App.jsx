
import Home from "./assets/home"


function App() {
const names = ['ali' , 'ahmed' , 'asas']
  return (
    <>
<ul>
 {names.map(name => <li key={name}>{name}</li>)}
</ul>
<Home/>
<button onClick={() => console.log(this)}> click</button>
    </>
  )
}

export default App

