
import { BarChart, SearchRounded, ShoppingCartRounded } from '@mui/icons-material'
import React from 'react'
import "./App.css"

function Header() {
  return (
    <header>
        <img src='https://c4.wallpaperflare.com/wallpaper/494/325/78/mcdonalds-logo-fast-food-chain-wallpaper-preview.jpg' alt=''
        className='logo'/>
       
        <div className="inputbox">
            <SearchRounded className="searchicon"/>
            <input id='input' type="text" placeholder="Search"/>

        </div>
        <div className='shoppingcart'>
            <ShoppingCartRounded className='cart'/>
            <div className='cartcontent'>
            <p id='two'>2</p>
            </div>
            </div>
            <div className="profile">
                <div className="imgbox">
                    <img  id="virat" src="https://wallpapers.com/images/featured/virat-kohli-yc8dfpcjssp3s4se.webp" alt=""/>

                
            </div>

<h2 className="username">shreya</h2>
        </div>
        <div className='togglemenu'>
            <BarChart className="toggleicon"/>
        </div>
    </header>

    
      
    
  )
}


export default Header
