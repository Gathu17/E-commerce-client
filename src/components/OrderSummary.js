import React,{ useState} from 'react';
import {useSelector} from 'react-redux'
import styled from 'styled-components'
import StripeCheckout from 'react-stripe-checkout'
import {mobile} from '../util/responsive'

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
const Button =  styled.button`
padding: 6px;
margin-left: 80px;
background-color: #000000;
color: #ffffff;
text-align: center;
left: 50%;
${mobile({left: '50%'})}
`
 
const Summary = () => {
    const Price  = useSelector(state => state.cart.total)
    const Total = Price + 20
    const KEY = 'pk_test_51KYK0iHhJUYoUkw2Uh0JmIzMbbM36Ombp49F4vyMwQz0PaXqxsvclAwm9GznR0HOMpxzVmx6IBVhGFPsZ5wzlax3002qx0ISJL'

    const [stripeToken, setStripeToken] = useState(null)

    const onToken = (token)=> {
        setStripeToken(token)
    }
    console.log(KEY)
    return ( 
        <>
           
                   <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                   <SummaryItem>
                       <SummaryName>Subtotal</SummaryName>
                       <SummaryText>$ {Price}</SummaryText>
                   </SummaryItem>
                   <SummaryItem>
                       <SummaryName>Shipping Cost</SummaryName>
                       <SummaryText>$ 20</SummaryText>
                   </SummaryItem>
                   <SummaryItem type='total'>
                       <SummaryName>Total</SummaryName>
                       <SummaryText>$ {Total}</SummaryText>
                   </SummaryItem>
                   <StripeCheckout
                   name='E-shop'
                   image='../../images/man-156584.svg'
                   amount={Total*100}
                   token={onToken}
                   stripeKey={KEY}
                   >
                       <Button>CHECKOUT</Button>
                   </StripeCheckout>
                   
                
        </>
     );
}
 
export default Summary;
