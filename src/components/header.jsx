import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

const Header = () => {
  return (
    <>
        <nav className='py-4 flex justify-between items-center '> 
            <Link>
                <img src="/JobPortalLogo.png" alt="Logo" className='h-30' />
            </Link>

            <Button variant="default">Login</Button>
        </nav>
    </>
  )
}

export default Header