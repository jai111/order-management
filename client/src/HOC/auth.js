
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate} from 'react-router-dom'
import AcessDenied from '../components/views/AcessDenied/AcessDenied'

let Auth = (component, role) => {
    let navigate = useNavigate()
    const [show, setShow] = useState(true)

    useEffect(()=>{
        axios.get("/api/users/auth")
        .then(response => {
            if(!response.data.isAuth){
                navigate("../additem", { replace: true });
            }
            else{
                let user = JSON.parse(localStorage.getItem('user'))
                if( !role.includes(user.role)){
                    setShow(false)
                }
            }
        })
    }, [])

    if(show){
        return component
    }
    return <AcessDenied/>
}

export default Auth