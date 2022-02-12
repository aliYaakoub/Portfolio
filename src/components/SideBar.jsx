import React from 'react';
import { SiGithub } from 'react-icons/si';
import { BsLinkedin, BsGoogle, BsInstagram } from 'react-icons/bs';

import profilePic from '../assets/profile.jpg';
import { useAppContext } from './Context';
import { Nav } from '.'

const SideBar = () => {

    const { colors, darkMode } = useAppContext();

    return (
        <div className='md:w-64 relative'>
            <div className="md:sticky md:top-5 md:sideBar flex flex-col">
                <div className='flex justify-center items-start  flex-col mr-16 '>
                    <img src={profilePic} alt='' className='rounded-full w-40'/>
                    <h2 style={{color: colors.text.primary}} className='w-full pt-2'>Ali Yaakoub</h2>
                    <h2 style={{color: colors.accent}} className='w-full '>Software Developer</h2>
                </div>
                <div className='w-full flex items-center mt-8'>
                    <a target='_blank' rel='noreferrer' href="https://github.com/aliYaakoub" style={darkMode ? {color: colors.accent} : {color: 'black'}} className='icon'>
                        <SiGithub size={20} className='mr-3'  />
                    </a>
                    <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/ali-yaakoub-b59aaa225/" style={darkMode ? {color: colors.accent} : {color: 'black'}} className='icon'>
                        <BsLinkedin size={20} className='mx-3'  />
                    </a>
                    <a href='mailto:ali.yaakoub.2021@gmail.com' style={darkMode ? {color: colors.accent} : {color: 'black'}} className='icon'>
                        <BsGoogle size={20} className='mx-3'  />
                    </a>
                    <a target='_blank' rel='noreferrer' href="https://www.instagram.com/ali_yaakub/" style={darkMode ? {color: colors.accent} : {color: 'black'}} className='icon'>
                        <BsInstagram size={20} className='ml-3'  />
                    </a>
                </div>
                <Nav />
            </div>
        </div>
    );
};

export default SideBar;
