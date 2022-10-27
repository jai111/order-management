
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom'

let LandingPage = () => {

    let navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('user')){
            navigate("../addcompany", { replace: true });
            return 
         }
     
         let user = JSON.parse(localStorage.getItem('user'))
         if(user.role == 'admin')  window.location.replace('/adduser')
         if(user.role == 'non-teacher'|| user.role == 'teacher')  window.location.replace('/studentlist');
         if(user.role == 'student')  window.location.replace('./viewresult');
    })
}

export default LandingPage