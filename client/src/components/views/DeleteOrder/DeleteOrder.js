import React, {useReducer, useState, useEffect} from 'react'
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa"
import axios from 'axios'
import { resolvePath, useNavigate} from 'react-router-dom'

const initialFormState = {
    };

      

let DeleteOrder = (props) =>{

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

    let Validate = (form)=>{
        if(!form.company){
            setMessage('select company')
            return false
        }
        return true
    }

    const [data, setData] = useState([])
    const [companyData, setCompanyData] = useState([])
    useEffect(()=>{
        axios.get('/api/company/getcompanies')
        .then(response =>{
            console.log(response.data)
            setData(response.data.companies)
            console.log(response.data)
        })
    }, [])

    let handleSubmit = () =>{
        setMessage('')
        setSuccessMessage('')
        if(!Validate(formState)){
            return
        }
        let formState = {...formState, role: JSON.parse(localStorage.getItem('user')).role}
        axios.post('/api/item/deleteOrder', formState)
        .then(response => {
            if(response.data.success){
                    setSuccessMessage(response.data.message)
            }
            else{
                setMessage(response.data.message)
                setSuccessMessage('')
            }
        })
        .catch(err=> alert(err))
    }

    const [formState, dispatch] = useReducer(formReducer, initialFormState)
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [message, setMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

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
                <h2>Delete Order</h2>
            </div>
            <div className="row clearfix">
                <div className="">
                    <div style={{color: 'red', textAlign: 'center', marginBottom: '10px'}}>{message}</div>
                    <div style={{color: 'green', textAlign: 'center', marginBottom: '10px'}}>{successMessage}</div>
                    <form >
                    <div className="input_field select_option">
                            {

                                        <React.Fragment>
                                            <select name= 'company' className='clasic'  style={{height:'50px', marginBottom:'10px'}} onChange={(e)=>handleTextChange(e)} required>
                                                <option value="" disabled selected>Company</option>
                                                {
                                                    data.length && data.map((comapny, id) =>{
                                                        return(
                                                            <React.Fragment key={id}>
                                                                <option value={comapny.Name}>{comapny.Name}</option>
                                                            </React.Fragment>
                                                        )
                                                    })
                                                }
                                            </select>
                                            <div className="arrow"></div>
                                            
                                        </React.Fragment>

                            }
                        </div>
                        <input className="button" type="button" value="Delete" disabled={isSubmiting} onClick={handleSubmit}  />
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default DeleteOrder;