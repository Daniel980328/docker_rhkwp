
import './App.css';
import Login from "./Login";

import TestConponent from "./TestComponent";
import {useSelector} from "react-redux";

function App() {

 const loginFlag=useSelector(state=>state.userInfo.loginFlag);
  return (
    <>
      {!loginFlag && <Login></Login>}
      {loginFlag && <TestConponent></TestConponent>}
    </>
  );
}


export default App;
