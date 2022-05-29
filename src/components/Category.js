import React from 'react';
import styled from 'styled-components';
import {Grid,Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import {mobile} from '../util/responsive'


const Image = styled.img`
position: relative;
height: 100vh;
object-fit: cover;

`
const Container = styled.div`
${mobile({paddig:"0px", flexDirecton: "column "})}
`

const Title = styled.h1`
position:absolute;
top:10%;
left: 10%;
width: 80%;
height: 80%;
padding: 50px 10px 0 10px;
border: 2px solid white;
font-weight: 500;
font-size: 5em;
color: white;
text-align: center;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
z-index:2;
opacity:0;
&:hover{
    opacity: 0.7;
}
`


function Category(){
 return(
   <Container>
    <Grid columns={window.innerWidth < 600 ? (1) : (3)} className='category-cont' divided>
    <Grid.Row>
      <Grid.Column className="category">
         <Image src='https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
         <Title>OFFICIAL WEAR
             <Button as={Link} to={'/Products/Official'} className="button">SHOP NOW</Button>
         </Title>
      </Grid.Column>
      <Grid.Column className="category">
        <Image src='https://images.pexels.com/photos/3873498/pexels-photo-3873498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <Title>CASUAL WEAR
        <Button as={Link} to={'/Products/Casual'}  className="button">SHOP NOW</Button>
        </Title>
      </Grid.Column>
      <Grid.Column className="category">
        <Image src='https://images.pexels.com/photos/6827110/pexels-photo-6827110.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
        <Title>SPORTS WEAR
        <Button as={Link} to={'/Products/Sports'} className="button">SHOP NOW</Button>
        </Title>
      </Grid.Column>
    </Grid.Row>
    </Grid>
    </Container>
 )
}
export default Category;