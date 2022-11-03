
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom'

let LandingPage = () => {

    let navigate = useNavigate()
    useEffect(()=>{
        if(! localStorage.getItem('user') ){
            console.log('here')
            navigate("../login", { replace: true });
            return 
         } 
        else{
            navigate("../additem", { replace: true });
            return
        } 
    })
}

export default LandingPage