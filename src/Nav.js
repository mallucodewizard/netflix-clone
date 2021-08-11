import React,{useState,useEffect} from 'react'
import './Nav.css'

function Nav() {
    const [show,handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY >100){
                handleShow(true);
            }
            else handleShow(false);

        });
        return () => {
            window.removeEventListener('scroll')
        };
        // remove listnr aftr use
    }, [])
    return (
        <div className={`nav ${show && "nav__black"}`}> 
        {/* if show is true then append class navblack */}
            <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"/>
            <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix Avatar"/>
        </div>
        
    )
}

export default Nav
