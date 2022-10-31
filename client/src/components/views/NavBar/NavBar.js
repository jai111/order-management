
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
        <header className='nav'>
            <div className='navbar__title navbar__item'>Order Creator
            
            </div>
            <li><a href="#">Options</a>
                <ul>
                    <li><a href="/addcompany">AddCompany</a></li>
                    <li><a href="/additem">AddItem</a></li>
                    <li><a href="/download-order">DownlaodOrder</a></li>
                </ul>
            </li>
            <a className='btn' onClick={logoutHandler}>LogOut</a>
        </header>
    )
}

export default NavBar;
