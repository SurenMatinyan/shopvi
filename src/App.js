import logo from './logo.svg';
import './App.css';
import { Route  } from 'react-router-dom';
import Header from './components/Header/Header';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProductContainer from './components/Products/ProductsContainer';
import ItemContainer from './components/Item/ItemContainer';
import SignupContainer from './components/Signup/SignupContainer';
import Admin from './components/Admin/Admin';
import HomeContainer from './components/Home/HomeContainer';
import UsersPageContainer from './components/UsersPage/UsersPageContainer';

function App() {
  return (
    <div className='touch'>
      <Route path='/'  component={Header} />
      <Route path='/'  component={NavContainer} />
      <Route exact path='/' component={HomeContainer} />
      <Route path='/profile'  component={UsersContainer} />
      <Route path='/products/:type'  component={ProductContainer} />
      <Route path='/item/:id'  component={ItemContainer} />
      <Route path='/signup' component={SignupContainer} />
      <Route path='/page' component={UsersPageContainer} />
      <Route path='/admin' component={Admin} />
      
    </div>
  );
}

export default App;
