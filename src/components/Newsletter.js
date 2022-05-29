import React from 'react';
import styled from 'styled-components'
import {Icon} from 'semantic-ui-react'

const Container = styled.div`


height: 30vh;
bottom:5;
margin-top:100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color:#deeefc;
`
const Title = styled.h1`
font-size: 1.5em;
font-weight: bold;


`
const Desc = styled.p`
font-size: 12px;
font-weight: normal;
font-family: Arial, Helvetica, sans-serif;

`
const InputContainer = styled.div`
display: flex;
width: 50%;
height: 40px;
border: 1px solid black;
justify-content:space-between;
`
const Input = styled.input`
border:none;
flex:8;
padding-left: 20px;

`
const Button = styled.button`
border:none;
flex:2;
color: white;
background-color: rgba(255, 0, 0,0.6);

`

const NewsLetter = () => {
   

    return ( 
        <Container>
            <Title className='page-title'>NEWSLETTER</Title>
            <Desc>Get timely updates for your favourite products</Desc>
            <InputContainer>
               <Input placeholder="Your Email"></Input>
               <Button className='btn-news'><Icon name="send"/></Button>
            </InputContainer>
        </Container>
     );
}
 
export default NewsLetter;