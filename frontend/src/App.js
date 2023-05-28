import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route} from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import Dashboard from "./Pages/Dasboard"
import Signin from "./components/Authentication/Signin";
import SignupNew from "./components/Authentication/SignupNew";
import Notification from "./Pages/Notification";
import Working from "./Pages/Working";
function App() {
  return (
    <div className="App">
      {/* <Route path="/" component={Homepage} exact /> */}
      <Route path="/chats" component={Chatpage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/notification" component={Notification} />
      <Route path='/underConstruction' component={Working} />
      {/* <Signin /> */}
      {/* <Signup /> */}
      {/* <Homepage /> */}
      {/* <SignupNew /> */}
        <Route path="/" component={Signin }  exact />
        {/* <Chatpage /> */}
        <Route path="/signup" component={SignupNew} />
     
    </div>
  );
}

export default App;
