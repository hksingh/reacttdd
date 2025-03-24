import logo from '../logo.svg';

function Header(){
    return (
        <header className="App-header">
        <h1>React with TDD</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. This runs dynamically
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and this is the new way of doing things
        </a>
      </header>
    )
}
export default Header;