
import { useEffect } from 'react';
import { useNavigate} from 'react-router-dom'

let LandingPage = () => {

    let navigate = useNavigate()
    useEffect(()=>{
        if(localStorage.getItem('user') == ''){
            console.log('here')
            navigate("../login", { replace: true });
            return 
         }
         navigate("../additem", {replace: true})
    })
}

export default LandingPage