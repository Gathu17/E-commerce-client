import {gql} from '@apollo/client'

export const FETCH_PRODUCTS = gql`
   query GetProducts{
       getProducts{
         id,
         title,
         desc,
         img,
         categories,
         size,
         color,
         price
       }
   }
`
 export const FETCH_PRODUCT = gql`
query GetProduct($productId: ID!){
    getProduct(productId: $productId){
       id title desc img price categories  size color
    }
}
`
export const GET_CART = gql`
query GetCart{
   getCart{
         userId,
         products{
             id
             productId
             quantity
         }
             
         
   }
}
`