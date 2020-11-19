import React from 'react'

function Header() {
    

    return (
        <div className='header-container'>
            <button onClick='filter'>Filter</button> 
            <input type='text' placeholder='Search...'></input>
        </div>
    )
}

export default Header
