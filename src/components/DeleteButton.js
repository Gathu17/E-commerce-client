import React,{useState} from 'react'
import {gql,useMutation} from '@apollo/client'
import {Icon,Confirm,Button} from 'semantic-ui-react'
import {GET_CART} from '../util/graphql'

function DeleteCart({productId,name,callback}){
    const[confirmOpen,setConfirmOpen] = useState(false)
    const mutation = name ? DELETE_PRODUCT : DELETE_CART;
    const [deleteItem,{data}] = useMutation(mutation,{
        update(cache){
          if(!name){
            callback()
            const dataCart = cache.readQuery({
                query: GET_CART
              })
            let newData = dataCart.getCart
              newData = dataCart.getCart.products.filter(p => p.id !== productId)
              cache.writeQuery({query:GET_CART, 
                data:{getCart:{products:newData}}})
            }
            console.log(data)
          }, 
        variables: {productId}
    })
    return(
        <>
        <Button  color='red' size="small" floated='right' style={{marginRight: 10}} onClick={()=> setConfirmOpen(true)}>
        <Icon name='close' style={{margin:0}}/>
      </Button>
        <Confirm
      open={confirmOpen}
      onCancel={()=>setConfirmOpen(false)}
      onConfirm={deleteItem}
      />
        </>   
    )
}

const DELETE_CART = gql`
   mutation deleteCart($productId:ID! ){
       deleteCart(productId:$productId)
   }
`
const DELETE_PRODUCT = gql`
    mutation deleteProduct($productId:ID! ){
       deleteProduct(productId:$productId)
   }
`

export default DeleteCart;