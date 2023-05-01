import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Cliche greeting!</h1>
      </header>
    </div>
  );
}

export default withAuthenticator(App, { includeGreetings: true })
