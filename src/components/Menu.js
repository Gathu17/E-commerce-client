import React, { useContext, useState } from 'react'
import { Menu,Icon,Label} from 'semantic-ui-react'
import {AuthContext} from '../util/auth'
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom'

 export default function Menubar() {
  const [activeItem ,setActiveItem] = useState('')

   const handleItemClick = (e, { name }) => setActiveItem( name )
   const {user, logout} = useContext(AuthContext)
   const quantity = useSelector(state => state.cart.quantity)
  
   const menubar = user ? (
    <div>
    <Menu pointing secondary size="massive" color="#ff1e60">
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as='a'
        href='/'
      />
     
      <Menu.Menu position='right'>
        <Menu.Item
          name='cart'
          active={activeItem === 'cart'}
          onClick={handleItemClick}
          as = {Link}
        to= {'/Checkout'}
        className='cart-icon'
        ><Icon name='cart'/> <Label color='red' floating>
        {quantity}
      </Label></Menu.Item>
        <Menu.Item
        name='logout'
        active={activeItem === 'logout'}
        onClick={logout}
        
        
      />
      </Menu.Menu>
    </Menu>
  </div>
   ):(
    <div>
    <Menu pointing secondary size="massive" color="teal">
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
        as='a'
        href='/'
      />
     
      <Menu.Menu position='right'>
        <Menu.Item
          name='login'
          active={activeItem === 'login'}
          onClick={handleItemClick}
          as = 'a'
        href= '/Login'
        />
        <Menu.Item
        name='Register'
        active={activeItem === 'register'}
        onClick={handleItemClick}
        as = 'a'
        href= '/Register'
      />
      </Menu.Menu>
    </Menu>
  </div>
   )
    return menubar ;
    
  }
