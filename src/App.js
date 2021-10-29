import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/404";
import ProfileDetailsPage from "./pages/ProfileDetailsPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile/:id" exact component={ProfileDetailsPage} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
