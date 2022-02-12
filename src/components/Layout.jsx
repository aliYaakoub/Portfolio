import React from 'react';
import { SideBar } from '.';
import { useAppContext } from './Context';

const Layout = ({children}) => {
    
    const { colors } = useAppContext();

    return (
        <div style={{backgroundColor: colors.primary}} className='min-h-screen transition-colors'>
            <div className='lg:w-4/5 mx-auto flex flex-col md:flex-row p-5'>
                <SideBar />
                {children}
            </div>
        </div>
    );
};

export default Layout;
