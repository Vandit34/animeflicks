import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <img
        src='./Logo_Icons/logo3.png'
        style={{ height: '64px', width: '64px' }}
      />
      <h1 className="brand-name">AnimeFlicks</h1>
      <img src='./Icons/menu.png' style={{height:'35px',width:'35px'}} />
    </nav>
  )
}

export default Navbar
