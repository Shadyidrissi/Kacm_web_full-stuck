import React from 'react'
import "../globals.css"
import Link from 'next/link'

function page() {
  return (
    <div className='mercato-div'>
        <h1 className='title'>Matches of KACM 
            <Link href="/matches/new_match"><svg width="80" height="80" viewBox="0 0 512 512" style={{color:"#26AF74"}} xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="100" height="100" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 12 12" fill="#26AF74" x="128" y="128" role="img"  xmlns="http://www.w3.org/2000/svg"><g fill="#26AF74"><path fill="currentColor" d="M6 3.5c.23 0 .417.187.417.417v1.666h1.666a.417.417 0 0 1 0 .834H6.417v1.666a.417.417 0 0 1-.834 0V6.417H3.917a.417.417 0 0 1 0-.834h1.666V3.917c0-.23.187-.417.417-.417ZM1 6a5 5 0 1 1 10 0A5 5 0 0 1 1 6Zm5-4.167a4.167 4.167 0 1 0 0 8.334a4.167 4.167 0 0 0 0-8.334Z"/></g></svg></svg></Link>
        </h1>
        <div id='revers-data'>
            <div className='player-details'>
            <ul className='buttons'>
                <button>
                <svg width="50" height="50" viewBox="0 0 512 512" style={{color:"#E8403E"}} xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 1024 1024" fill="#E8403E" x="128" y="128" role="img"  xmlns="http://www.w3.org/2000/svg"><g fill="#E8403E"><path fill="currentColor" d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"/></g></svg></svg>
                </button>
                <button><svg width="50" height="50" viewBox="0 0 512 512" style={{color:"#3A76F5"}} xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 24 24" fill="#3A76F5" x="128" y="128" role="img"  xmlns="http://www.w3.org/2000/svg"><g fill="#3A76F5"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621Z"/><path d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"/></g></g></svg></svg></button>
            </ul>
            <div className='overview-player'>
                {/* <img src="https://www.thesportsdb.com/images/media/player/cutout/113fxp1602974145.png" alt="" /> */}
                <h3>12/12/2024 12:00</h3>
                <h4>studim : marrkech</h4>
                <h5>cup : botola 2</h5>
                <p>club name : itihad medina</p>
                <ul>
                    <img src="https://th.bing.com/th/id/OIP.dkjPXGf_z_bTtlm7sqjC2QHaHa?rs=1&pid=ImgDetMain" alt="" />
                    VS
                    <img src="https://th.bing.com/th/id/OIP.0GDZWJpqQov2PGR6AtBrZwHaHa?rs=1&pid=ImgDetMain" alt="" />
                </ul>
            </div>
            </div>
        </div>
    </div>
  )
}

export default page