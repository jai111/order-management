
import './NavBar.css'
import axios from 'axios'
import { Link, useNavigate} from 'react-router-dom'

axios.defaults.baseURL = 'https://backend-tcek.onrender.com'

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
                localStorage.getItem('user') 
                ?
                <>
                    <li><a href="#">Options</a>
                    <ul>
                        <li><Link to = "/addcompany"><div >Add company</div></Link> </li>
                        <li><Link to = "/additem"><div >Add Item</div></Link></li>
                        <li><Link to = "/download-order"><div >Download Order</div></Link></li>
                        <li><Link to = "/delete-order"><div >Delete Order</div></Link></li>
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
