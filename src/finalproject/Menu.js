import React from 'react'

function Menu({link,icon,ishome}) {
  return (
    
      
    <li className={ishome ? "active":""}>
        <a href={link}>
            <span className='icon'>{icon}</span>
            </a>
    </li>
  )
}

export default Menu
