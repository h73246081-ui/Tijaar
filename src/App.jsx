import User,{Header,token} from './User'
import Practice from './Practice'
// import CurlyBraces from './CurlyBraces'
import OnClick from './OnClick'
import State from './State'
function App(){
  // console.log(age())
  return (
    <>
      {/* <h1>Hi how are you?</h1>
      <p>Is every thing ok?</p>
      <Name />
      <Age />
      <User/>
      <Header/>
      <p>Token is {token}</p> */}
      <Practice/>
      {/* <CurlyBraces/> */}
      <OnClick/>
      <State/>
    </>
  )
}
export default App


// function Name(){
//   return (
//     <div>
//       <h1>I am fine</h1>
//     </div>
//   )
// }
 
// function Age(){
//   return (
//     <div>
//       <h1>
//         Whats your age?
//         I am 18.
//       </h1>
//     </div>
//   )
// }
// function age(){
//   return 18
// }
