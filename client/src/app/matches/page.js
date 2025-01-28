import React from 'react'
import "../globals.css"
import Link from 'next/link'

function page() {
   // data will be : the select the cup 2 or 3 or more ,date the match and the time as number , image clube will conter kacm as option ,studim , cup type, clube name , result after pass the match
  return (
    <div className='mercato-div' style={{marginTop:"40px"}}>
      <h1 className='title'>KACM Matches </h1>
        <header>
            <Link href=''><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbW6WXTxe_xxB_wzLaucss7qBTNkeY5uHv1X-P15GQjchrl8mTYiM2-DHxbh2jTYJK9U&usqp=CAU" alt="" /></Link>
            <Link href=''><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCAt0j4iCkmacyix4tKLaZcpEPXnnpt2DjcdjX5Q0Q9tnh8F6Gd506BvZXPXscAKdNM0Y&usqp=CAU" alt="" /></Link>
        </header>
        <div className='body-mercato'>
          <div id='match'>
            <p>12/12/2024 ⏰ 12:00</p>
            <div>
              <div id='clubs-match'>
                  <img src="https://upload.wikimedia.org/wikipedia/ar/9/9e/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%86%D8%A7%D8%AF%D9%8A_%D8%A7%D9%84%D9%83%D9%88%D9%83%D8%A8_%D8%A7%D9%84%D9%85%D8%B1%D8%A7%D9%83%D8%B4%D9%8A.png" alt="" />
                  VS
                  <img src="https://fifamoro.com/wp-content/uploads/2019/07/OCK-Olympique-Khouribga.png" alt="" />
              </div>
              <div id='details-match'>
                  <p>📍 staduim : marrakech</p>
                  <p>⚽ competition : Botola 2</p>
                  {/* if the date old add on here result match <p>result : 2-1</p> */}
                  <p> rival :vvvvvv </p>
              </div>
            </div>
            <hr/>
          </div>
        </div>
    </div>
  )
}

export default page