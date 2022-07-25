import React from 'react';
import styled from 'styled-components';
import {gql,useMutation} from '@apollo/client'
import {incrementProduct} from '../redux/cartRedux'
import {useDispatch} from 'react-redux'
import {mobile} from '../util/responsive'

const Button = styled.button`
padding: 15px;
border: 1px solid #ff2523;
background-color: white;
cursor: pointer;
text-decoration: none;
color: inherit;
 &:hover{
   background-color: #b4b4b4;
 }
 ${mobile({width:'100px'})}
`
const CartButton = ({id,count,price}) => {
    
    const dispatch = useDispatch();
    const Prices = price * count
    const [incProduct,] = useMutation(ADD_TO_CART,{
        update(_,{data}){
            
            dispatch(incrementProduct({Prices}))
        },
        variables: {productId: id,quantity:count}
    })
    function addProductToCart(){
        
        incProduct();
    }
    return ( 
        <>
            <Button onClick={addProductToCart}>ADD TO CART</Button>
        </>
     );
}

const ADD_TO_CART = gql`
    mutation addProduct($productId: ID!, $quantity:Int!){
        addProduct(productId: $productId, quantity: $quantity){
            id 
            products{
                id ,productId ,quantity
            }
        }
    }
`
 
export default CartButton;