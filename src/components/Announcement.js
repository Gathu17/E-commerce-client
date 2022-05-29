import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: 20px;
background-color: ${ (props) => props.changeAdvert ? '#ff0000': '#ff8345'};
color:white;
text-align:center;
transition: all 1s ease-out ;
`

const Announcement = () => {
    const [changeAdvert,setChangeAdvert] = useState(false)
    const container = document.getElementsByClassName('cont')

    useEffect(() => {
       const interval = setInterval(() => {
        
            setChangeAdvert(!changeAdvert)
        },3000)
        return () => clearInterval(interval)
    })
    return ( 
        <>
        <Container changeAdvert={changeAdvert} className='cont'>
            { changeAdvert ? 'UPTO 50% OFF': 'FREE DELIVERY IN 24H'}
        </Container>
        </>
        
     );
}
 
export default Announcement;