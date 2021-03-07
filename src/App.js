import logo from './logo.svg';
import './App.css';
import { Route  } from 'react-router-dom';
import Header from './components/Header/Header';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProductContainer from './components/Products/ProductsContainer';
import ItemContainer from './components/Item/ItemContainer';
import Signup from './components/Signup/Signup';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='touch'>
      <Route path='/'  component={Header} />
      <Route path='/'  component={NavContainer} />
      <Route path='/profile'  component={UsersContainer} />
      <Route path='/products'  component={ProductContainer} />
      <Route path='/item/:id'  component={ItemContainer} />
      <Route path='/signup' component={Signup} />
      <Route path='/admin' component={Admin} />
      <Route path='/home' component={Home} />
    </div>
  );
}

export default App;
