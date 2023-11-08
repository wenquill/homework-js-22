import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import SignUpForm from "./components/Form/SignUpForm";
import LogInForm from "./components/Form/LogInForm";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <LogInForm />
        </Route>
        <Route path="/signup">
          <SignUpForm />
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
