import React, { useContext } from 'react';
import styled from 'styled-components'
import DeleteButton from './DeleteButton'
import {AuthContext} from '../util/auth'
import {Grid,Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {incrementProduct} from '../redux/cartRedux'
import {useDispatch} from 'react-redux'


const Info = styled.div`
position: absolute;
z-index: 3;
background-color: rgba(250,250,250,0.5);
width:200px;
height: 200px;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
opacity:0;
color: black !important;
text-decoration: none !important;

`
const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
background-color:rgb(255, 0, 0,0.2);
position: relative;
height: 100%;
width: 80%;
margin:auto;

&:hover ${Info}{
  opacity: 1;
}
`

const Circle = styled.div`
position: absolute;
border-radius: 50%;
width: 250px;
height: 250px;
background-color: white;
`
const Desc = styled.p`
margin: 5px;
float: right;
font-weight: bolder;
font-size: 20px;
text-decoration: none;
`
const IconField = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: white;
margin: 10px;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
text-decoration: none;
color: inherit;

&:hover{
    background-color: #b4b4b4;
    transform: scale(1.1);
}
`
const ImgContainer = styled.div`

height: 75%;
display: flex;
align-items: center;
justify-content: center;
object-fit:cover;
z-index: 1;

`
const Image = styled.img`

width: 200px;
height: 200px;
object-fit: cover;

`
const Delete = styled.div`
padding: 5;
top: 5 !important;
border-radius: 50%;
background-color: #b4b4b4;
`
const ProductItem = ({product}) => {
    const {user} = useContext(AuthContext)
    const dispatch = useDispatch()
    const Prices = product.price
    function addProduct(){
       dispatch(incrementProduct({Prices}))
    }
    return ( 
        <>
        <Grid.Column className='grid-product'>
            <Container >
              <Circle/>
               <ImgContainer  >
                  <Image src={product.img} />
               </ImgContainer>
        <Info  as={Link} to={`/SingleProduct/${product.id}`}>
            <IconField>
               <Icon onClick={addProduct} name='add to cart'/>
            </IconField>
            <Desc>Price {product.price}$</Desc>
            {user && user.isAdmin && <Delete><DeleteButton productId={product.id} name={product.title}/></Delete>}
        </Info>
            </Container>
        
    </Grid.Column>
        </>
     );
}
 
export default ProductItem;