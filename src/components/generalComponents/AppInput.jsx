import React from 'react';
import { useAppContext } from '../Context';

const AppInput = ({value, onChange, errMsg, placeholder, styles, type, containerStyle, label, textArea=false}) => {

    const { colors, darkMode } = useAppContext();

    return (
        <div className={containerStyle}>
            <h2 style={{color: colors.text.primary}} className='py-2'>{label}</h2>
            {textArea ? 
                <textarea 
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type}
                    style={{backgroundColor: colors.secondary, color: colors.text.primary}}
                    className={`rounded px-3 py-2 ${styles} w-full outline-none resize-none shadow`}
                />
                :
                <input 
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    type={type}
                    style={{backgroundColor: colors.secondary, color: colors.text.primary}}
                    className={`rounded px-3 py-1 ${styles} w-full outline-none shadow`}
                />
            }
            {errMsg && <p className='text-red-500 medium-font'>{errMsg}</p>}
        </div>
    );
};

export default AppInput;
