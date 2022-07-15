import { useState } from 'react';

 const useForm = (callback, initialState= {}) => {
    const [ values,setValues] = useState(initialState);
    function onChange(event){
        setValues({...values,[event.target.name]:event.target.value});
    }
    function onSubmit(event){
        event.preventDefault();
        callback();
    }
    return{
        onChange,
        onSubmit,
        values
    }
}
export default useForm;