import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import SignUpForm from "./components/Form/SignUpForm";
import LogInForm from "./components/Form/LogInForm";
import Header from "./components/Form/Header";

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
        <Route path="/*">Soryyyyyyyyy</Route>
      </Switch>
    </Router>
  );
}

export default App;
