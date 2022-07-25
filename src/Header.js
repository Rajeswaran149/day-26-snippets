import React from 'react'

const Header = () => {
  return (
    <div className="header">
        <div className="header__left">
            <img className="header__leftLogo" src="https://startbootstrap.com/assets/img/sb-logo.svg" alt="logo"></img>

            <h2>Start Bootstrap</h2>
            
        </div>
           <div className="header__center">
               <h5>Themes</h5>
               <h5>Templates</h5>
               <h5>Bundles</h5>
               <h5>Forms</h5>
               <h5>Resource</h5>
           </div> 
                 <div className="header__right">
                    <h4>Blog</h4>
                    <button type="button">Login</button>
                
                </div>  
        
    </div>
  )
}

export default Header