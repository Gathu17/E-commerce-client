import React, { useState,useContext } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import {gql, useMutation} from '@apollo/client'
import useForm from '../util/hooks'
import {AuthContext} from '../util/auth'
import {useNavigate} from 'react-router'
function Register (){
  const context = useContext(AuthContext)
  const Navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const {onChange,onSubmit,values} = useForm(registerUser, {
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  })

  const [addUser,{loading}] = useMutation(REGISTER_USER,{
   update(_,{data:{register:userData}}){
     console.log(userData);
     context.login(userData);
     Navigate('/Products')
   },
   onError(err){
    console.log(err.graphQLErrors[0].extensions.errors)
    setErrors(err.graphQLErrors[0].extensions.errors)
   },
   variables: values
  })

  function registerUser(){
    addUser();
  }
    return (
<div className="register-container">
  <div className='form-container'>
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
      <label>Email</label>
      <input
       placeholder='Email'
      name='email'
      type='text' 
      value={values.email} 
      onChange={onChange}/>
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input 
      placeholder='Password'
      name='password'
      type='text' 
      value={values.password} 
      onChange={onChange}/>
    </Form.Field>
    <Form.Field>
      <label>Confirm Password</label>
      <input 
      placeholder='Confirm Password' 
      name='confirmPassword'
      type='text'
      value={values.confirmPassword}
      onChange={onChange} />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit' >Submit</Button>
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
const REGISTER_USER = gql`
  mutation Register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ){
    register(
      registerInput:{
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ){id email username createdAt token}
  }
`

export default Register