import React, { useContext } from 'react';
import styled from 'styled-components';
import {useQuery} from '@apollo/client'
import {AuthContext} from '../util/auth'
import {CartProduct} from '../components/CartProduct'
import SummaryProduct from '../components/OrderSummary'
import {GET_CART} from '../util/graphql'
import {useNavigate} from 'react-router'
import {mobile} from '../util/responsive'


const Container = styled.div`
width: 100vw;
height: 100vh;
padding: 20px;
`
const Title = styled.h1`
font-size: 1.6em;
font-weight: 400;
text-align: center;
`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`
const TopButton = styled.button`
padding: 10px;
cursor:pointer;
border: 1px solid black;
background-color: ${(props)=> props.type==='filled' ? 'black':'transparent'}
color: ${(props)=> props.type==='filled'?'white': 'black'}

&:hover{
    background-color: ${(props)=> props.type==='filled' ? 'transparent':'black'}
}
`
const TopText = styled.p`
   font-size: 12px;
   font-weight: lighter;
   text-decoration: underline;
`
const Bottom = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 10px;
${mobile({flexDirection: 'column'})}

`
const Info = styled.div`
flex: 3;
`
const Summary = styled.div`
flex: 1;
justify-content: center;
padding: 20px;
height: 50vh;
border-radius: 10px;
border: 0.5px solid black;
position:sticky;
${mobile({height: '30vh'})}
`
const Product = styled.div`
display: flex;
jsutify-content: space-between;
padding: 10px;
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
`

const Hr = styled.hr`
opacity: 0.5;
height: 1px;
`

const SummaryTitle  = styled.h1`
font-size: 30px;
font-weight: 600;
text-align: center;
`
const SummaryItem  = styled.div`
display: flex;
justify-content: space-between;
margin: 20px 0px;
font-weight: ${(props)=>props.type ==='total'&& '600'}
font-size: ${(props)=>props.type ==='total'&& '20px'}
`
const SummaryName  = styled.h3``
const SummaryText = styled.p``
const Cart = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate()
    
     
    const { data} =  useQuery(GET_CART) 
     

    let usercart;
   if(data){
      if(!user){
          return navigate('/')
      }
usercart = (
            
         
            (
            <Container>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopText>
                    Shopping Bag(0)
                </TopText>
                <TopButton>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                     {data.getCart.products.map((product)=> { 
                    return (
                          <CartProduct key={product.id} product={product}/> 
                     )}
                     )}
                     <Hr/>
                </Info>
              <Summary>
                  <SummaryProduct/>
              </Summary>
               
            </Bottom>
        </Container>
               
           )
         )
            
    
     
   }
    else {( 
        <Container>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopText>
                    Shopping Bag(0)
                </TopText>
                <TopButton>CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                   <Product>
                   
                    <ProductDetails>
                        
                        <Details>
                       Your cart is empty
                       </Details>
                    </ProductDetails>
                    
                   </Product>
                     <Hr/>
                </Info>
              
                <Summary>
                   <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                   <SummaryItem>
                       <SummaryName>Subtotal</SummaryName>
                       <SummaryText>0</SummaryText>
                   </SummaryItem>
                   <SummaryItem>
                       <SummaryName>Shipping Cost</SummaryName>
                       <SummaryText>0</SummaryText>
                   </SummaryItem>
                   <SummaryItem type='total'>
                       <SummaryName>Total</SummaryName>
                       <SummaryText>0</SummaryText>
                   </SummaryItem>
                </Summary>
            </Bottom>
        </Container>
     );
    }
    
    return  <div>
        {usercart}
    </div>;
        
}

 
export default Cart;