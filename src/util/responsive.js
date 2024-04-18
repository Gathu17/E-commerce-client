import {css} from 'styled-components'

export const mobile = (props) => {
    return css`
    @media only screen and (max-width: 540px){
        ${props}
    }
    `
    
}
export const medium = (props) => {
    return css`
    @media only screen and (max-width: 900px){
        ${props}
    }
    `
    
}
export const large = (props) => {
    return css`
    @media only screen and (max-width: 1400px){
        ${props}
    }
    `
    
}