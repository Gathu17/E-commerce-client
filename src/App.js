import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './App.css';

import Menu from './components/Menu'
import Home from './Pages/Home'
import Announcement from './components/Announcement'
import Register from './Pages/Register'
import {AuthProvider} from './util/auth'
import Login from './Pages/Login'
import Products from './Pages/Products';
import NewsLetter from './components/Newsletter'
import Footer from './components/Footer'
import SingleProduct from './Pages/SingleProduct'
import Cart from './Pages/Checkout'
import {Provider} from 'react-redux'
import store from './redux/store'

function App() {
  return (
    // TODO: Implement react persisted state
    <Provider store={store}>
       <AuthProvider>
    
    <BrowserRouter>
    <Menu/>
    <Announcement/>
    <Routes>
      
      <Route exact path='/' element= {<Home/>} />
      <Route  exact path='/Register' element = {<Register/>} />
      <Route  exact path='/Login' element = {<Login/>} />
      <Route  exact path='/Products' element = {<Products/>} />
      <Route  exact path='/SingleProduct/:productId' element = {<SingleProduct/>} />
      <Route  exact path='/Checkout' element = {<Cart/>} />
    </Routes>
    </BrowserRouter>
    <NewsLetter/>
    <Footer/>
    </AuthProvider>
    </Provider>
   
    
  )
}

export default App;
