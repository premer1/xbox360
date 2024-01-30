import React from 'react';
import { Menu } from '@headlessui/react';
import { Link } from 'react-router-dom';

import Xbox from '../images/oldxbox360-removebg.png'
import Xbox360Logo from '../images/Xbox_360_logo.png';
import PhantomLogo from '../images/phantomlogo.png'
import Mic from '../images/360mic-removebg.png'
import TelegramLogo from '../images/telegram.png'
import TwitterLogo from '../images/x-removebg.png'

const About = () => {
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
    <div className="rounded-div">
      <div className="flex flex-col items-center mt-20">        
        <div className="spinning-container">
          <img
            src={Xbox360Logo}
            alt="img"
            id="RobinLogo"
            className="w-56 mt-5 spinning-image"
          />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="mt-10 text-xl w-96 text-center font-bold-sm">
          {renderHighlightedText('XBOX 360')} <br />Community
        </p>
        <img src={Mic} alt="img" className='w-20 mt-10' />
        <Menu>
          <Menu.Button className="inline-flex border justify-center mt-5 rounded border-gray-300 px-2 py-1 shadow-sm transition-all duration-300 hover:bg-white hover:bg-opacity-25">
            <Link to="https://solscan.io/token/Ddo8oHLvYaKot9E15yxyy2wLbUo9ceWLZKqbJX1WMteD#holders">
              {renderHighlightedText('Contract address')}
            </Link>
          </Menu.Button>
        </Menu>

        <div className='rounded-div flex flex-col justify-center items-center mt-10'>          
            <h1 className='text-5xl font-bold'>Tokenomics:</h1>        
          <ul className='mt-5 text-center text-3xl font-thin'>
            <li>Supply: 360,000,000</li>
            <li>Contract Revoked</li>
            <li>LP Burned</li>            
          </ul>
          <p>{renderHighlightedText('Xbox 360 Sent you invite to Xbox Live Party:')}</p>          
          <a href="https://t.me/+bUD7ry6PT8ZmODk0" className='mt-3'><img src={TelegramLogo} alt="img" className='w-10' /></a> 
        </div>

        <div className='flex flex-col justify-around items-center md:flex-row md:items-center w-screen mt-10'>                        
          <div className='md:ml-36 mb-4 md:mb-0'>                          
            <img src={Xbox} alt="img" className='md:w-auto' />
        </div>
          <p className='w-80 md:w-96 text-xl'>
            In 2005, the {renderHighlightedText('XBOX 360')} was released, ushering in a new era of 
            gaming. Gamers were captivated by its powerful hardware and 
            vibrant library of games. Fond memories include late-night 
            Halo sessions, exploring Xbox Live, and the excitement of a
            groundbreaking console that defined a generation.
          </p>  
          
        </div>                 
        <div className='rounded-div mt-10'>
        <h1 className='flex justify-center text-4xl font-thin'>How To Buy:</h1>     
        <div className='flex justify-center items-center'>       
            <ul className='flex flex-col items-center'>
                <li className='flex justify-center items-center'>1. Install the Phantom Wallet <img src={PhantomLogo} alt="img" className='w-7 rounded-xl ml-2' /></li>
                <li>2. Acquire Solana (SOL)</li>
                <li>Go to Raydium or Jupiter and paste in our contract</li>                
                
            </ul>           
            <div className='md:hidden sm:hidden'>
            
            </div>
        </div>

    </div>

      </div>
    </div>
  );
};

export default About;
