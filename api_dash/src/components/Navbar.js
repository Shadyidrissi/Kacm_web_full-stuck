import React from 'react'

function Navbar() {
  return (
    <div id='navbar'>
        <a href='/'>API Manager</a>
        <ul>
            <a href="/club/all_clubs">All Clubs</a>
            <a href="/cup/all_cups">All Cups</a>
            <a href="/club/new_club">New Club</a>   
            <a href="/cup/new_cup">New Cup</a>
        </ul>
    </div>
  )
}

export default Navbar