import React, { useContext } from 'react';
import styled from 'styled-components'
import {AuthContext} from '../util/auth'
import {Grid,Icon} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {incrementProduct} from '../redux/cartRedux'
import {useDispatch} from 'react-redux'
import {keyframes} from 'styled-components'

const Info = styled.div`
position: absolute;
z-index: 3;
background-color: rgba(250,250,250,0.5);
width:80%;
height: 60%;
border: none;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
opacity:0;
color: black !important;
padding: 5%;
text-decoration: none !important;
`
const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
// background-color:rgb(255, 0, 0,0.2);
position: relative;
height: 80%;
width: 80%;
margin:auto;

// box-shadow: 5px 5px 10px 2px #808080;
&:hover ${Info}{
  opacity: 1;
}
`

const Circle = styled.div`
position: absolute;
border-radius: 50%;
width: 100%;
height: 100%;
background-color: white;
box-shadow: 5px 5px 20px 10px #808080 inset;
background-image: url(${(props)=> props.bgImg});
background-size: cover;
`
const Desc = styled.p`
margin: 5px;
float: right;
font-weight: bolder;
font-size: 20px;
text-decoration: none;
`
const Title =  styled.h2`
text-align : center;
font-size: 1.2rem;
margin-top: 2%;
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
width: 90%;
height: 80%;
border-radius: 50%;
object-fit: cover;
opacity:0;
`
const loadAnim = keyframes`
0%{
    transform: rotate(0);
    transform-origin: 50% 50%;
}
100%{
    transform: rotate(360deg);
    transform-origin: 50% 50%;
}
`
const TailSpin = styled.span`
width: 20%;
height: 20%;
position: relative;
margin: 0 auto;
border-radius: 50%;
border: 1px solid black;
animation-name: ${loadAnim};
animation-duration: 2s;
animation-iteration-count: infinite;
`


const ProductItem = ({product}) => {
    const dispatch = useDispatch()
    const Prices = product.price
    // function addProduct(){
    //    dispatch(incrementProduct({Prices}))
    // }
    return ( 
        <>
        <Grid.Column className='grid-product'>
            <Container >
              <Circle bgImg={product ? product.img : <TailSpin  />}/>
               <ImgContainer  >
                  <Image src={product ? product.img : <TailSpin  /> }/>
               </ImgContainer>
        <Info  as={Link} to={`/SingleProduct/${product.id}`}>
            <IconField>
               <Icon name='add to cart'/>
            </IconField>
            <Desc>Price {product.price}$</Desc>
            {/* {user && user.isAdmin && <Delete><DeleteButton productId={product.id} name={product.title}/></Delete>} */}
        </Info>
            </Container>
        <Title>{product.title}</Title>
    </Grid.Column>
        </>
     );
}
 
export default ProductItem;