
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
            {
                localStorage.getItem('user') != ''
                ?
                <>
                    <li><a href="#">Options</a>
                    <ul>
                        <li><a href="/addcompany">Add Company</a></li>
                        <li><a href="/additem">Add Item</a></li>
                        <li><a href="/download-order">Downlaod Order</a></li>
                        <li><a href="/delete-order">Delete Order</a></li>
                    </ul>
                                </li>
                                <a className='btn' onClick={logoutHandler}>LogOut</a>
                </>
                :
                null
            }
            
        </header>
    )
}

export default NavBar;
