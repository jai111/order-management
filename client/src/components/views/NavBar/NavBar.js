
import './NavBar.css'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'

const NavBar = () => {

    let navigate = useNavigate()

    let logoutHandler = ()=>{
        axios.get('/api/users/logout')
        .then( response =>{
            if(response.status == 200){
                localStorage.setItem('user', '')
                navigate("../login", { replace: true });
            }
            else{
                alert('logout failed')
            }
        })
    }
    let role
    if(localStorage.getItem('user')){
        role = JSON.parse(localStorage.getItem('user')).role
    }
    
    return(
        <header className='navbar'>
            <div className='navbar__title navbar__item'>Order Creator</div>
            <Link to = "/addcompany"><div className='navbar__title navbar__item'>AddCompany</div></Link> 
            <Link to = "/additem"><div className='navbar__title navbar__item'>AddItem</div></Link> 
            <Link to = "/download-order"><div className='navbar__title navbar__item'>DownlaodOrder</div></Link> 
        </header>
    )
}

export default NavBar;
