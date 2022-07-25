import React, { useEffect } from 'react';
import styled from 'styled-components'
import {useQuery} from '@apollo/client'
import {FETCH_PRODUCT} from '../util/graphql'
import DeleteButton from './DeleteButton'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {decrementProduct} from '../redux/cartRedux'
import {useNavigate} from 'react-router'
import {mobile} from '../util/responsive'
import {TailSpin} from 'react-loader-spinner'

const Product = styled.div`
display: flex;
jsutify-content: space-between;
padding: 10px;
`
const Image = styled.img`
width: 200px;
height: 200px;

`
const ProductDetails = styled.div`
display: flex;
flex: 2;
`
const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
margin-left: 20px;
${mobile({marginLeft:'10px'})}
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductSize = styled.span``
const ProductColor = styled.span`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props)=> props.color}
`

const PriceDetails = styled.div`
font-size: 1.9em;
font-weight: 200;
`

const Price = styled.div``
let Prices;
const CartProduct = ({product:{productId}}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const count = useSelector(state => state.cart.quantity)
   
    const {data,loading} = useQuery(FETCH_PRODUCT,{
        variables: {productId}
    })
    let products;
   useEffect(() => {
     if(count === 0){
      navigate('/Products')
     }else{

     }
   })
  
   
    const CartCallback = () =>{
          
          dispatch(decrementProduct({Prices}))
        }
    if(data) {
        
        const {title,img ,size, color} = data.getProduct
        
         
         console.log(Prices)
        products = 
              
                   <Product>
                    
                    <ProductDetails>
                        <Image src={img}/> 
                        <Details>
                       <ProductName><b>Product:</b> {title}</ProductName>
                       <ProductId><b>ID</b> {productId}</ProductId>
                       <ProductColor color={color}/>
                       <ProductSize><b>Size:</b> {size}</ProductSize>
                       </Details>
                    </ProductDetails>
                    <PriceDetails>
                      <DeleteButton productId={productId} callback={CartCallback}/>
                      <Price> </Price>

                    </PriceDetails>
                   </Product>
                 
        
          
    } 
    
    
  
    return <div>{products}</div>;
}
  export { CartProduct};
 