import React, {useReducer, useState} from 'react'
import './LoginPage.css'
import { FaEnvelope, FaLock } from "react-icons/fa"
import axios from 'axios'
import { useNavigate, Link} from 'react-router-dom'

const initialFormState = {
    email: "",
    password: ""
    };


let LoginPage = (props) =>{

    let navigate = useNavigate()

    const formReducer = (state, action) => {
        switch(action.type){
            case "HANDLE_INPUT_TEXT":
                return {
                    ...state,
                    [action.field]: action.payload,
                }
            default:
                return state;
        }
    }

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    let Validate = (form)=>{
        if(!validateEmail(form.email)){
            setMessage('Enter valid email')
            return false
        }
        if(!form.password){
            setMessage('Enter Password')
            return false
        }

        return true
    }

    let handleSubmit = () =>{
        setMessage('')
        if(!Validate(formState)){
            return
        }
        setIsSubmiting(true)
        axios.post('/api/users/login', formState)
        .then(response => {
            if(response.data.loginSuccess){
                localStorage.setItem('user',  JSON.stringify(response.data.user))
                navigate("../", { replace: true });
            }
            else{
                setMessage('Check your account or password again')
            }
        })
        .catch(err=> {
            setMessage('Check your account or password again')
            setTimeout(() => {
                setMessage("")
              }, 3000);
        })
        setIsSubmiting(false)
    }

    const [formState, dispatch] = useReducer(formReducer, initialFormState)
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        dispatch(
            {
                type: 'HANDLE_INPUT_TEXT',
                field: e.target.name,
                payload: e.target.value,
            }
        )
    }

    return (
        <div className="form_wrapper">
            <div className="form_container">
            <div className="title_container">
                <h2>Login</h2>
            </div>
            <div className="row clearfix">
                <div className="">
                    <div style={{color: 'red', textAlign: 'center', marginBottom: '10px'}}>{message}</div>
                    <form >
                        <div className="input_field">
                            <span><FaEnvelope style={{marginTop:'8px'}}/></span>
                            <input type="email" name="email" placeholder="Email" value={formState.email}  onChange={(e)=>handleTextChange(e)} required />
                        </div>
                        <div className="input_field">
                            <span><FaLock style={{marginTop:'8px'}}/></span>
                            <input type="password" name="password" placeholder="Password" value={formState.password}  onChange={(e)=>handleTextChange(e)} required />
                        </div>
                        <input className="button" type="button" value="Login" disabled={isSubmiting} onClick={handleSubmit}  />
                        <Link to='/forgotpassword'><div style={{textAlign:'center', color: '#00bfff'}}>change pasword?</div></Link>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LoginPage;