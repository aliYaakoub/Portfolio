import {Link} from 'react-router-dom';
import React from 'react';
import { BsArrowBarLeft } from 'react-icons/bs'

import { useAppContext } from '../components/Context';

const NotFound = () => {

    const { colors } = useAppContext();

    return (
        <div className='flex-grow flex justify-center items-center flex-col'>
            <h1 style={{color: colors.text.primary}} className='text-2xl mb-2'>Page not found</h1>
            <h1 style={{color: colors.text.primary}} className='text-1xl my-2'>Content Don&apos;t exist or has been moved</h1>
            <Link to={'/'} style={{color: colors.text.primary}}>
                <div className='flex justify-center items-center mt-4 cursor-pointer' style={{color: colors.accent}}>
                    <BsArrowBarLeft size={25} />
                    <p>Go back</p>
                </div>
            </Link>
        </div>
    );
};

export default NotFound;
