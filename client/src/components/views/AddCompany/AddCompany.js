
import axios from 'axios'
import React, { useEffect, useState, useReducer } from 'react'
import {useParams} from 'react-router-dom'

const initialFormState = {}
axios.defaults.baseURL = 'https://backend-tcek.onrender.com'

let AddCompany = () => {


    const handleTextChange = (e) => {
        dispatch(
            {
                type: 'HANDLE_INPUT_TEXT',
                field: e.target.name,
                payload: e.target.value,
            }
        )
    }
    
    const [message, setMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    

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

    const [formState, dispatch] = useReducer(formReducer, initialFormState)

    let Validate = (form)=>{
        
        if(!form.company){
            setMessage('Enter Company')
        }
        

        return true
    }

    let handleSubmit = () =>{
        setMessage('')
        setSuccessMessage('')

        if(!Validate(formState)){
            return
        }
        axios.post(`/api/company/addcompany`, {company: formState.company, role: JSON.parse(localStorage.getItem('user')).role})
        .then(response =>{
            if(response.data.success){
                setSuccessMessage('Company Created Successfully')
            }
            else{
                setMessage(response.data.message)
            }
        })
        .catch(err => alert(err))
    }

    return(
        <div>
            <div className="form_wrapper">
            <div className="form_container">
            <div className="title_container">
                <h2>Add Company</h2>
            </div>
            <div className="row clearfix">
                <div className="">
                    <div style={{color: 'red', textAlign: 'center', marginBottom: '10px'}}>{message}</div>
                    <div style={{color: 'green', textAlign: 'center', marginBottom: '10px'}}>{successMessage}</div>
                    <form >
                        <div className="input_field">
                            <input type="email" name="company" placeholder="Company" value={formState.email}  onChange={(e)=>handleTextChange(e)} required />
                        </div>
                        <input className="button" type="button" value="Submit" onClick={handleSubmit} />
                    </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default AddCompany
