import "./App.css";
import Login from "./screens/Login";
import Admin from "./screens/Admin";
import Customer from "./screens/Customer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/customer" component={Customer}></Route>
          <Route path="/admin" component={Admin}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
