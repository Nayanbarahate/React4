import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div id='container'>
            <ul type='none'>
               <li> <Link to="/myhome" className='link'>  <b>HOME</b> </Link></li>
               <li style={{margin:'400px', }}><Link to="/students" className='link' > <b>STUDENTS</b></Link> </li>
               <li> <Link to="/contactus" className='link'> <b> CONTACTUS </b></Link></li>
                
            </ul>
        </div>
    )
}

