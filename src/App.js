import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import StartPage from './StartPage.js'
import Nav from './HoagieNav.tsx'

// TODO: Implement next.js
// TODO: Organize components
// TODO: Download stylesheets from mail.hoagie.io, set up ssh for Git


function App() {
  return (
    <div className="App">
          <Nav name="trade" />
      <header className="App-header">
        <StartPage/>
      </header>
    </div>
  );
}

export default App;
