import React from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faTiktok,faInstagram } from '@fortawesome/free-brands-svg-icons'

const SocialContainer = styled.div`
    width: 100vw;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

    `
    const SocialIcon = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props)=> props.color};
    object-fit:cover;
    `

const Footer = () => {

    
 const element1 = <FontAwesomeIcon icon={faFacebook} size='3x' />
 const element2 = <FontAwesomeIcon icon={faTwitter} size='3x'/>
 const element3 = <FontAwesomeIcon icon={faInstagram} size='3x'/>
 const element4 = <FontAwesomeIcon icon={faTiktok} size='3x'/>
 

    return ( 
        <SocialContainer>
            <SocialIcon as='a' href='https://facebook.com' target='_blank' color='blue'>{element1}</SocialIcon>
            <SocialIcon as='a' href='https://twitter.com/?lang=en' target='_blank'color='#00caff'>{element2}</SocialIcon>
            <SocialIcon as='a' href='https://instagram.com' target='_blank'color='#ff008f'>{element3}</SocialIcon>
            <SocialIcon as='a' href='https://tiktok.com' target='_blank'color='black'>{element4}</SocialIcon>
        </SocialContainer>
     );
}
 
export default Footer;