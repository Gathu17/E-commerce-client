import React, {useState,useEffect,useContext} from 'react';
import styled from 'styled-components'
import {Grid,Icon,Transition} from 'semantic-ui-react'


import ProductItem from './Product'



const ProductItems = ({products,filters}) => {
   
   const [filteredProducts,setFilteredProducts] = useState()
    console.log(products)
     useEffect(() =>{
         if(filters){
             setFilteredProducts( products.filter( (product)=> Object.values(filters).every((value) => 
             product.categories.includes(value))))
             
         }
         
     },[filters,products])
    console.log(filteredProducts)
    const items = filteredProducts ? filteredProducts : products
    return (
        <>
        {<Transition.Group>
                     { items.map((product) => {
                      return (
                         <ProductItem key={product.id} product={product}/>
                      )
                     })
                 }</Transition.Group>}
        
        </>
    
        
    );
}
 
export default ProductItems;