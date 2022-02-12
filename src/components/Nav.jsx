import React, { useState } from 'react';
import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { RiHome2Line, RiHome2Fill } from 'react-icons/ri';
import { FaLaptopCode } from 'react-icons/fa';
import { MdOutlineConnectWithoutContact } from 'react-icons/md';
import { BiMenuAltRight } from 'react-icons/bi';
import { BsFilter } from 'react-icons/bs'
import { Link } from 'react-router-dom';

import { useAppContext } from './Context';

const Nav = () => {

    const { colors, setDarkMode, darkMode } = useAppContext();
    const [animation, setAnimation] = useState('close');

    function handleNavShow(){
        if(animation === 'close'){
            setAnimation('open');
        }
        else setAnimation('close')
    }

    return (
        <>
            <div className='menuBtn md:hidden' style={{color: colors.text.primary}} onClick={handleNavShow}>
                <BiMenuAltRight size={40} />
            </div>
            <div className={`flex flex-col justify-between medium-font mt-12 pr-5 h-auto ${animation} overflow-hidden`}>
                <Link to='/' >
                    <div className={
                        `flex items-center cursor-pointer p-3 rounded
                        ${darkMode ?
                            'transition-colors hover:bg-gray-500'
                            :
                            'transition-colors hover:bg-gray-300 '
                        }`
                    } >
                        {darkMode ?
                            <RiHome2Fill size={20} color={colors.text.primary} />
                            :
                            <RiHome2Line size={20} color={colors.text.primary} />
                        }
                        <h2
                            className='px-10 md:px-2'
                            style={{color: colors.text.primary}}
                        >
                            Home
                        </h2>
                    </div>
                </Link>
                <Link to={'/projects'}>
                    <div className={
                        `flex items-center cursor-pointer p-3 rounded
                        ${darkMode ?
                            'transition-colors hover:bg-gray-500'
                            :
                            'transition-colors hover:bg-gray-300 '
                        }`
                    }>
                        <FaLaptopCode size={20} color={colors.text.primary} />
                        <h2
                            className='px-10 md:px-2'
                            style={{color: colors.text.primary}}
                        >
                            Projects
                        </h2>
                    </div>
                </Link>
                <Link to={'/filter'}>
                    <div className={
                        `flex items-center cursor-pointer p-3 rounded
                        ${darkMode ?
                            'transition-colors hover:bg-gray-500'
                            :
                            'transition-colors hover:bg-gray-300 '
                        }`
                    }>
                        <BsFilter size={20} color={colors.text.primary} />
                        <h2
                            className='px-10 md:px-2'
                            style={{color: colors.text.primary}}
                        >
                            Filter
                        </h2>
                    </div>
                </Link>
                <Link to={'/contacts'}>
                    <div className={
                        `flex items-center cursor-pointer p-3 rounded
                        ${darkMode ?
                            'transition-colors hover:bg-gray-500'
                            :
                            'transition-colors hover:bg-gray-300 '
                        }`
                    }>
                        <MdOutlineConnectWithoutContact size={20} color={colors.text.primary} />
                        <h2
                            className='px-10 md:px-2'
                            style={{color: colors.text.primary}}
                        >
                            Contacts
                        </h2>
                    </div>
                </Link>
                <div className={
                    `flex items-center cursor-pointer mt-5 p-3 rounded
                    ${darkMode ?
                        'transition-colors hover:bg-gray-500'
                        :
                        'transition-colors hover:bg-gray-300 '
                    }`
                } onClick={()=>setDarkMode(old => !old)} >
                    {darkMode ?
                        <BsToggleOn size={20} color={colors.text.primary} />
                        :
                        <BsToggleOff size={20} color={colors.text.primary} />
                    }
                    <h2
                        className='px-10 md:px-2'
                        style={{color: colors.text.primary}}
                    >
                        Dark Mode
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Nav;
