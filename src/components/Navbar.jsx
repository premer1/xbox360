import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import logo from '../images/Xbox_360_logo.png'



const Navbar = () => {
    const [nav, setNav] = useState(false); 

    
    

    const handleNav = () => {
        setNav(!nav);
    }


    const highlightText = (word) => {
      if (word.toLowerCase().includes('xbox')) {
        return <span className="text-lime-300">{word}</span>;
      } else if (word === '360') {
        return <span className="text-gray-400">{word}</span>;
      }
      return word;
    };
  
    const renderHighlightedText = (text) => {
      const words = text.split(' ');
      return words.map((word, index) => (
        <React.Fragment key={index}>
          {index > 0 && ' '}
          {highlightText(word)}
        </React.Fragment>
      ));
    };
  
      
  return (
    <div className='dark:md:border-gray-600 md:border-gray-200'>
           <div className='rounded-div border-none flex items-center justify-between h-20 sans-serif'>

    <Link to='/'>
      <div className='flex items-center'>
      <img src={logo} alt='logo' className='w-26 h-12'/>
      <h1 className='font-bold text-3xl ml-5'>${renderHighlightedText('XBOX')}</h1>
      </div>
      
      
      
    
    </Link>
    <Menu as="div" className="relative hidden lg:block text-left">
      <div>
        <Menu.Button className="inline-flex border-none w-full justify-center rounded-full border-gray-300 px-2 py-1">
          Home         
        </Menu.Button>
      </div>

    </Menu>

    <Menu as="div" className="relative hidden lg:block text-left">
      <div>
        <Menu.Button className="inline-flex border-none w-full justify-center rounded-full border-gray-300 px-2 py-1">
          About
          
        </Menu.Button>
      </div>

    </Menu>

    <Menu as="div" className="relative hidden lg:block text-left">
      <div>
        <Menu.Button className="inline-flex border-none w-full justify-center rounded-full border-gray-300 px-2 py-1">
          How To Buy          
        </Menu.Button>
      </div>
    </Menu>

    <Menu as="div" className="relative hidden lg:block text-left">
      <div>
        <Menu.Button className="inline-flex border-none w-full justify-center rounded-full border-gray-300   px-2 py-1">
          Tokennomics          
        </Menu.Button>
      </div>
    </Menu>

 <Menu as="div" className="relative hidden lg:block text-left">
      <div>
        <Menu.Button className="inline-flex border-none w-full justify-center rounded-full px-2 py-1">
          Social
          <ChevronDownIcon className="h-4 mt-1 w-4" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        
        <Menu.Items className="absolute rounded-lg z-10 h-30 w-40 origin-top-right bg-slate-900 ring-opacity-5 focus:outline-none">
          <div className="flex flex-col m-3">
            <Menu.Item className='dark:hover:bg-gray-900 border-b mb-1'>
              {({ active }) => (
               <Link to='https://t.me/+bUD7ry6PT8ZmODk0'>Telegram</Link>
              )}
            </Menu.Item>
            <Menu.Item className='dark:hover:bg-gray-900 border-b mb-1'>
              {({ active }) => (
              <Link to='https://twitter.com/Xbox360onSol'>Twitter/X</Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>


   
    {/* */}

    <div className='relative hidden lg:block'>            

        </div>

    <div className='hidden lg:block justify-items-end transition-all duration-500 ease-in-out'>
        
    </div>
  


    <div onClick={handleNav} className='block lg:hidden cursor-pointer z-10'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </div>


   
    { /* Mobile Menu */}
    <div className={nav
            ? 'lg:hidden rounded-div border-none mt-5 fixed left-0 top-20 flex flex-col w-full h-[100%] bg-primary ease-in duration-300 z-40'
            : 'fixed left-[-100%] top-20 h-[90%] flex flex-col ease-in duration-300'
        }>
          
        <Menu as="div" className="relative inline-block text-left mt-5">
      <div>
        <Menu.Button className="inline-flex border-none w-44 justify-center rounded-md  border border-gray-300 dark:bg-indigo-900 dark:text-white px-4 py-2 text-sm font-medium shadow-sm dark:hover:bg-indigo-800">
          Home
          
        </Menu.Button>
      </div>
    </Menu>

    <Menu as="div" className="relative inline-block text-left mt-5">
      <div>
        <Menu.Button className="inline-flex border-none w-44 justify-center rounded-md  border border-gray-300 dark:bg-indigo-900 dark:text-white px-4 py-2 text-sm font-medium shadow-sm dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          About
          
        </Menu.Button>
      </div>
    </Menu>


    <Menu as="div" className="relative inline-block text-left mt-5">
      <div>
        <Menu.Button className="inline-flex border-none w-44 justify-center rounded-md  border border-gray-300 dark:bg-indigo-900 dark:text-white px-4 py-2 text-sm font-medium shadow-sm dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          How To Buy          
        </Menu.Button>
      </div>
    </Menu>


    <Menu as="div" className="relative inline-block text-left mt-5">
      <div>
        <Menu.Button className="inline-flex border-none w-44 justify-center rounded-md  border border-gray-300 dark:bg-indigo-900 dark:text-white px-4 py-2 text-sm font-medium shadow-sm dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Tokenomics          
        </Menu.Button>
      </div>
    </Menu>

    <Menu as="div" className="relative inline-block text-left mt-5">
      <div>
        <Menu.Button className="inline-flex border-none w-44 justify-center rounded-md  border border-gray-300 dark:bg-indigo-900 dark:text-white px-4 py-2 text-sm font-medium shadow-sm dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          Social
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="border mt-0.5 h-30 w-36 origin-top-right bg-slate-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex flex-col m-3">
            <Menu.Item className='hover:bg-gray-900 mb-0.5'>
              {({ active }) => (
               <Link to='https://t.me/+bUD7ry6PT8ZmODk0'>Telegram</Link>
              )}
            </Menu.Item>
            <Menu.Item className='hover:bg-gray-900 mb-0.5'>
              {({ active }) => (
              <Link to='https://twitter.com/Xbox360onSol'>Twitter/X</Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>  
    </div>
</div>
    </div>
  )
}

export default Navbar
