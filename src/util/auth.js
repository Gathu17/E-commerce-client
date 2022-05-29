import React, { useReducer, createContext} from 'react';
import jwtDecode from 'jwt-decode'


const initialState = {
    user: null
}

if(localStorage.getItem('jwtToken')){
    const decodedToken = jwtDecode(localStorage.getItem('jwtToken'))
    if(decodedToken.exp * 1000 < Date.now()){
        localStorage.removeItem('jwtToken')
        window.location.replace('/')
        
    }else{
        initialState.user = decodedToken
        
    }
}

const AuthContext = createContext({
    user: null,
    login: (userData) => {},
    logout: () => {}
})

function authReducer(state,action){
    switch(action.type){
        case 'LOGIN':
            return{
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return{
                ...state
            }
        default: 
        return{
            state
        }
    }
}

function AuthProvider(props){
    const[state,dispatch] = useReducer(authReducer,initialState)
    function login(userData){
        localStorage.setItem("jwtToken",userData.token)
       console.log('token set')
        dispatch({
            type: 'LOGIN',
            payload: userData
        })
    }
    function logout(){
        localStorage.removeItem("jwtToken")
        dispatch({
            type: 'LOGOUT'
        })
    }
    return(
        <AuthContext.Provider
        value = {{user: state.user, login, logout}}
        {...props}/>
    )
}
export  {AuthContext, AuthProvider} 