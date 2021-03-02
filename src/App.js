import logo from './logo.svg';
import './App.css';
import { Route  } from 'react-router-dom';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import UsersContainer from './components/Users/UsersContainer';
import ProductContainer from './components/Products/ProductsContainer';
import ItemContainer from './components/Item/ItemContainer';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div className='touch'>
      <Route path='/'  component={Header} />
      <Route path='/'  component={Nav} />
      <Route path='/profile'  component={UsersContainer} />
      <Route path='/products'  component={ProductContainer} />
      <Route path='/item/:id'  component={ItemContainer} />
      <Route path='/login' component={Login} />
      <Route path='/admin' component={Admin} />
    </div>
  );
}

export default App;
