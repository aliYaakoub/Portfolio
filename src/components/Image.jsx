import React, { useState } from 'react'
import Animation from './generalComponents/Animation';

const Image = ({url}) => {

    const [loading, setLoading] = useState(true);

    return (
        <div className={`opacity-100 z-10 transition-opacity w-full flex justify-center h-full rounded-lg`}>
            {loading &&
                <div className='w-full h-full flex justify-center items-center'>
                    <Animation />
                </div>
            }
            <img 
                alt=''
                src={url}
                onLoad={()=>setLoading(false)}
                className={`${loading && 'hidden'} w-full md:w-auto md:h-full rounded-lg object-contain`}
            />
        </div>
    )
}

export default Image