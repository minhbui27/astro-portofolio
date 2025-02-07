import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-scroll'
import './Nav.scss'

//The smooth scroll animations are made using the package react-scroll, for additional animation options
//read the documentation on npmjs

function Nav(): JSX.Element {
  const [scroll, setScroll] = useState<number | null>(0)
  //This function helps to change the color of the navbar depending on the current location
  //of window.scrollY
  const handleScroll = (): void => {
    const position: number = window.scrollY
    //console.log(position/window.innerHeight)
    setScroll(position / window.innerHeight)
  }
  useEffect((): void => {
    setScroll(window.scrollY / window.innerHeight)
  })
  //This useEffects outputs the current scroll position of the window
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    //cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const currentScroll: string =
    scroll < 1
      ? 'Welcome'
      : scroll < 2 && scroll >= 1
      ? 'IntroductionDiv'
      : scroll < 3 && scroll >= 2
      ? 'ProjectsDiv'
      : 'HobbiesDiv'

  const [menu, setMenu] = useState<boolean | null>(true)
  return (
    <nav className={currentScroll}>
      <div className='sm:px-6 lg:pr-16 lg:pl-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
            {/* <!-- Mobile menu button--> */}
            <button
              onClick={() => setMenu(!menu)}
              type='button'
              className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded='false'
            >
              <span className='sr-only'>Open main menu</span>
              {/* <!--
                        Icon when menu is closed.

                        Heroicon name: outline/menu

                        Menu open: "hidden", Menu closed: "block"
                    --> */}
              <svg
                className={(menu ? 'block' : 'hidden') + ' h-6 w-6'}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              {/* <!--
                        Icon when menu is open.

                        Heroicon name: outline/x

                        Menu open: "block", Menu closed: "hidden"
                    --> */}
              <svg
                className={(menu ? 'hidden' : 'block') + ' h-6 w-6'}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <div className='flex-1 h-full flex items-center justify-start sm:items-stretch sm:justify-start'>
            <div className='hidden content-center sm:block'>
              <div className='flex flex-wrap h-full content-center'>
                <div className='flex space-x-4'>
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <p className='text-3xl font-normal antialiased font-sans text-white hover:text-blue-500'>
                    {/* {scroll} */}
					Minh Bui
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1 flex h-full items-center justify-end sm:items-stretch sm:justify-end'>
            <div className={`${currentScroll}link navItems hidden sm:block py-4`}>
              <div className= 'flex space-x-4'>
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                <Link
                  spy={true}
                  smooth={true}
                  to='welcome'
                  className={
                    (scroll < 1 ? 'WelcomeText' : 'hover:bg-gray-700') +
                    ' cursor-pointer text-base px-3 py-2 rounded-md font-medium'
                  }
                  aria-current='page'
                >
                  Home
                </Link>

                <Link
                  spy={true}
                  smooth={true}
                  to='introduction'
                  className={
                    (scroll < 2 && scroll >= 1
                      ? 'bg-gray-900'
                      : 'hover:bg-gray-700') +
                    ' cursor-pointer text-base px-3 py-2 rounded-md font-medium'
                  }
                >
                  Introduction
                </Link>

                <Link
                  spy={true}
                  smooth={true}
                  to='projects'
                  className={
                    (scroll < 3 && scroll >= 2
                      ? 'bg-gray-900'
                      : 'hover:bg-gray-700') +
                    ' cursor-pointer text-base px-3 py-2 rounded-md font-medium'
                  }
                >
                  Projects
                </Link>

                <Link
                  spy={true}
                  smooth={true}
                  to='hobbies'
                  className={
                    (scroll < 4 && scroll >= 3
                      ? 'bg-gray-900'
                      : 'hover:bg-gray-700') +
                    ' cursor-pointer text-base px-3 py-2 rounded-md font-medium'
                  }
                >
                  Hobbies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={!menu ? 'sm:hidden' : 'hidden'} id='mobile-menu'>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link
            to='welcome'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Home
          </Link>

          <Link
            to='introduction'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Introduction
          </Link>

          <Link
            to='projects'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Projects
          </Link>

          <Link
            to='hobbies'
            className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
          >
            Hobbies
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
