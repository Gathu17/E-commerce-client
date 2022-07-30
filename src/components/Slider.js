import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Icon} from 'semantic-ui-react'
import {mobile} from '../util/responsive'
const Container  = styled.div`
position: relative;
display: flex;
background-image: ${(props)=> props.backgroundColor};
margin-bottom: 20px;
${mobile({height: "60vh"})}
`;


const Image = styled.img`
position:absolute;
width: 100%;
height:100%;
object-fit: contain;
flex:2;

`
const Arrow = styled.div`
display: flex;

align-items: center;
justify-content: center;
position:absolute;

width: 50px;
height: 50px;
border-radius: 50%;
top: 50% ;
bottom:0;
margin: 0 auto;
left: ${(props)=> props.direction ==="left" && "30px"};
right: ${(props)=> props.direction ==="right" && "-5px"};
background-color:red;
transform: translate(-50%, -50%);
z-index: 10;
cursor:pointer;
&:hover{
    background-color:rgba(126, 150,255,0.7)
}
`
const Slide = styled.div`
position:relative;
width:100vw;
height: 100vh;
display: flex;
align-items:center;
justify-content:center;
${mobile({height: "50vh"})}
`
const Desc = styled.p`
margin: 20px 20px;
font-size: 1.5em;
font-weight:light;
letter-spacing:3px;
color:white;
${mobile({display: 'none'})}
`
const Title = styled.h1`
font-weight:900;
font-size: 5em;
color:white;
`
const InfoContainer = styled.div`
position:absolute;
display:flex;
flex-wrap: wrap;
left:400px;
width:20%;
height:20%;
z-index:2;
${mobile({top:'30%', left: '30%'})}
`
const Button = styled.button`
width:100px;
height:50px;
border: 2px solid white;
background-color: transparent;
opacity:0.8;
color:white;
bottom:5;
margin:auto;
z-index:2;
&:hover{
    opacity:1;
    transform: scale(1.2,1.2);
}
${mobile({marginTop:'20px',marginLeft:'20px',padding: "10px"})}
`

const Slider = ({config}) => {
    const[slideIndex, setSlideIndex] = useState(0)
const handleClick = (direction) => {
    if(direction==="left" ){
        setSlideIndex(slideIndex>0?slideIndex-1:2)
        
    }
    if(direction==="right"){
        setSlideIndex(slideIndex>1?0:slideIndex+1)
    }
}
    return (
<>
<Container backgroundColor={config[slideIndex].bg}>
            <Arrow direction="left" onClick={()=> handleClick("left")}><Icon name='angle left'/></Arrow>
        
            <Slide >
                    
                    
                   
                <Image  src={config[slideIndex].image}/> 
                <InfoContainer>
                    <Title>{config[slideIndex].title}</Title>
                <Desc>DON'T BE AFRAID TO STYLE UP! <br/>
                     GET UPTO 30% OFF
                     </Desc>
                     <Button className='btn-slider' as={Link} to={'/Products'}>SHOP NOW</Button>
                </InfoContainer>
                
                   
            </Slide>
            
                
                  <Arrow direction="right" onClick={()=> handleClick("right")}><Icon name='angle right'/></Arrow>
                
    
            
           
</Container>
</>
    )
        
     ;
}
 
export default Slider ;
