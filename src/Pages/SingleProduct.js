import React,{useState} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {Icon} from 'semantic-ui-react'
import CartButton from '../components/CartButton';
import {FETCH_PRODUCT} from '../util/graphql'
import {mobile} from '../util/responsive'

const Wrapper = styled.div`
width: 80vw;
height:40vw;
margin:auto;
position: relative;
display: flex;
border: 1px solid;
box-shadow: 5px 10px 10px black;
${mobile({height:'80vw'})}
`
const ImageContainer = styled.div`
flex:1;
border: 1px solid grey;
${mobile({flex:'2',height:'50%',width:'3w0%'})}

`
const Image = styled.img`
width:100%;
height:100%;
object-fit: cover;
`
const InfoContainer = styled.div`
flex:1;
margin-left: 20px;
padding: 10px;
${mobile({marginLeft:"10px"})}
`
const Title = styled.h1`
font-weight: bolder;
font-size:40px;
margin-bottom: 20px;
text-align: center;
${mobile({fontSize:'20px'})}

`
const Description = styled.p`
font-size: 20px;
font-family: 'Times New Roman', serif;
${mobile({fontSize:'10px'})}
`
const FilterContainer = styled.div`
margin: 10px;
width: 70%;
padding: 10px;
display: flex;
flex-wrap: wrap;
${mobile({padding:'0',margin:'5',display: 'flex',flexDirecton: 'column'})}
`
const Filter = styled.div`
height: 30px;
display : flex;
align-items:center;
justify-content: space-around;
${mobile({marginBottom: '10'})}
`
const Colour = styled.div`
width: 20px;
height: 20px;
margin: 5px;
border-radius: 50%;
background-color: ${(props)=> props.color==="white" ? "black" : props.color};
cursor:pointer;
${mobile({margin: '2'})}
`
const FilterTitle = styled.h1`
font-size: 14;
font-weight: 200;
${mobile({marginLeft:'10'})}
`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;

`
const Size = styled.option`

`
const Price = styled.p`
font-size: 20px;
font-weight: 400;
`
const AddContainer = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  width: 50%;
  display : flex;
  align-items: center;
  justify-content: space-between;
`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  margin: 5px;
  border: 1px solid #ff2523;
  display: flex;
  align-items: center;
  justify-content: center;
`


const SingleProduct = () => {
  const {productId} = useParams();

  const [count,setCount] = useState(1);
 
  console.log(productId)
  const {data} =  useQuery(FETCH_PRODUCT,{
      variables: {productId}
  })
  
  
  let productData;
  if(!data){
    productData= <h1>Loading Product...</h1>
    
  }else{
    const {id,title,desc,img,color,price} = data.getProduct
    
     productData = (
        <Wrapper>
        <ImageContainer>
            <Image src={img}/>
        </ImageContainer>
        <InfoContainer>
          <Title>{title}</Title>
          <h1> Description</h1>
            <Description>{desc}</Description>
            <Price>Price: {price * count}$</Price>

        <FilterContainer>
          <Filter>
          <FilterTitle>Colour:</FilterTitle>
            <Colour color={`${color}`}/>
            <Colour color="green"/>
            <Colour color="red"/>
          </Filter>
          <Filter style={{ marginTop:10}}>
          <FilterTitle>Size</FilterTitle>
            <FilterSize> 
              <Size>S</Size>
              <Size>M</Size>
              <Size>L</Size>
            </FilterSize>
          </Filter>
        </FilterContainer>
      <AddContainer>
        <AmountContainer>
          <Icon onClick={()=>setCount(count===0? 0: count -1)} name='minus'/>
          <Amount>{count}</Amount>
          <Icon onClick={()=>setCount(count + 1)} name='add'/>
        </AmountContainer>  
        <CartButton id={id} count={count} price={price}/>
      </AddContainer>    
        </InfoContainer>
    </Wrapper>
     )       
  }
    return ( 
        <div>
            {productData}
        </div>
        
     );
}

 
export default SingleProduct;