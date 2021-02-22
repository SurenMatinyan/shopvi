import logo from './logo.svg';
import './App.css';
import { Route  } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import UsersContainer from './components/Users/UsersContainer';


function App() {
  return (
    <div>
      <Route path='/'  component={Header} />
      <Route path='/'  component={Nav} />
      <Route path='/profile'  component={UsersContainer} />
    </div>
  );
}

export default App;
