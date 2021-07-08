import Left from './itemLeft.js';
import Right from './ItemRight.js';

import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function itemPage() {
  return (
    <div className="App">
      <header className="App-header">
        <Left/>
        <Right/>
      </header>
    </div>
  );
}

export default itemPage;