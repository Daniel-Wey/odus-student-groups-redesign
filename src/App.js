import logo from './logo.svg';
import './App.css';
import AskQuestion from './AskQuestion.js'
import SplashPage from './SplashPage.js'
import NavBar from './NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavLink, BrowserRouter } from "react-router";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Switch>
        <Route exact path="/about">
          <About/>
        </Route>
        </Switch>
        <AskQuestion/>
        <SplashPage/>
      </header>
    </div>`
    </BrowserRouter>
  );
}

export default App;
