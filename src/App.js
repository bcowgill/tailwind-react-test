import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';

function NewTabLink ({href, children, ...props}) {
    return (
        <a
          className="App-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
         {children}
        </a>
    );
}
NewTabLink.displayName = NewTabLink;
NewTabLink.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node.isRequired
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload!!.
        </p>
        <NewTabLink
          href="https://reactjs.org"
        >
          Learn React
        </NewTabLink>
        <NewTabLink
          href="https://tailwindcss.com/docs/utility-first"
        >
          Learn Tailwind CSS
        </NewTabLink>
      </header>
    </div>
  );
}

export default App;
