import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import Avatar from '../../components/Avatar'
// import Button from '../../components/Button'
import { useSelector, useDispatch } from 'react-redux'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

const Navbar = () => {
    const dispatch = useDispatch()
    const User = useSelector((state)=> state.currentUserReducer)

    useEffect(()=>{
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])

  return (
    <nav className='main-nav'>
        <div className="navbar">
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt="Logo" />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About</Link>
            <Link to='/' className='nav-item nav-btn'>Products</Link>
            <Link to='/' className='nav-item nav-btn'>For Teams</Link>
            <form>
                <input type="text" placeholder='Search..' name="" id="" />
                <img src={search} alt="Search Icon" width="18" className='search-icon' />
            </form>
            {User === null 
            ? 
            <Link to='/Auth' className='nav-item nav-links'>Log In</Link> 
            :
            <>
                
                    <Avatar backgroundColor='#009dff' px="5px" py="7px" borderRadius="50%" color="white">
                    <Link to='/User' className='' style={{color:"white", textDecoration:"none"}}>M</Link>
                    </Avatar>
                {/* <Button>Log out</Button> */}
                <button className='nav-item nav-links'>Log out</button>
            </>
            }
        </div>
    </nav>
  )
}

export default Navbar