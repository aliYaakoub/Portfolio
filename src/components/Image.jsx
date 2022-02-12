import React, { useState } from 'react'
import Animation from './generalComponents/Animation';

const Image = ({url}) => {

    const [loading, setLoading] = useState(true);

    return (
        <div className={`opacity-100 z-10 transition-opacity h-full`}>
            {loading &&
                <div className='w-full h-full flex justify-center items-center'>
                    <Animation />
                </div>
            }
            <img 
                alt=''
                src={url}
                onLoad={()=>setLoading(false)}
                className={`${loading && 'hidden'} h-full rounded-lg object-contain`}
            />
        </div>
    )
}

export default Image