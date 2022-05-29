import React, {useContext,useState } from 'react';
import {Form, Checkbox, Button} from 'semantic-ui-react'
import useForm from '../util/hooks'
import {AuthContext} from '../util/auth'
import {useNavigate} from 'react-router'
import {gql, useMutation} from '@apollo/client'

function Login() {
    const {onChange,onSubmit,values} = useForm(loginUserCallback,{
        username: '',
        password: ''
    })
    const [errors,setErrors] = useState({})
    const context = useContext(AuthContext);
    const Navigate = useNavigate();

    const [loginUser,{loading}] = useMutation(LOGIN_USER,{
        update(_,{data:{login: userData}}){
            
            context.login(userData)
            Navigate('/Products')
        },
        onError(err){
            console.log(err.graphQLErrors[0].extensions.errors)
            setErrors(err.graphQLErrors[0].extensions.errors)
        },
        variables: values
    })

    function loginUserCallback(){
        loginUser()
    }
    return(
        <div className="login-container">
        <div className="form-container">
           <Form onSubmit={onSubmit} className={loading?'loading':''}>
             <Form.Field>
      <label>Username</label>
      <input 
      placeholder='Username'
      name='username'
      type='text'
      value={values.username}
      onChange={onChange} />
      
            </Form.Field>
            <Form.Field>
      <label>Password</label>
      <input
       placeholder='Password'
      name='password'
      type='password' 
      value={values.password} 
      onChange={onChange}/>
           </Form.Field>
           <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit' >Login</Button>
  
           </Form>
           {Object.keys(errors).length > 0 && 
        <div className='ui error message'>
            <ul className='list'>
                {Object.values(errors).map((value)=>(
                <li key={value}>{value}</li>
                ))}
            </ul>
        </div>
        }
        </div>
        </div>
    )
}
const LOGIN_USER = gql`
   mutation login(
       $username: String!
       $password: String!
   ){
       login(username:$username,password:$password){
           id
           username
           email
           token
           createdAt
       }
   }
`
export default Login;