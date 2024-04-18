import React, {useState,useEffect} from 'react';
import {Transition} from 'semantic-ui-react'


import ProductItem from './Product'



const ProductItems = ({products,filters}) => {
   
   const [filteredProducts,setFilteredProducts] = useState()
     useEffect(() =>{
         if(filters){
             setFilteredProducts( products.filter( (product)=> Object.values(filters).every((value) => 
             product.categories.includes(value))))
             
         }
         
     },[filters,products])
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