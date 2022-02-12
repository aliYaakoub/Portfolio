import React, { useState } from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import { AiFillPicture } from 'react-icons/ai';

import { useAppContext } from './Context';
import Image from './Image';

const Slider = ({photos}) => {

    const [index, setIndex] = useState(0);
    const { colors } = useAppContext();

    function handleNext(){
        if(index === photos.length -1){
            return setIndex(0);
        }
        setIndex(index+1)
    }

    function handlePrev(){
        if(index === 0){
            return setIndex(photos.length - 1)
        }
        setIndex(index-1)
    }

    return (
        <div className='my-5 px-10'>
            <h2 className="description-header text-2xl text-black flex items-center">
                <AiFillPicture className='mr-3' />
                <span>Pictures</span>
            </h2>
            <div className='w-full h-96 mt-7 pt-0'>
                <div className="w-full h-full flex justify-center items-center relative">
                    {photos.map((image, ind)=>{
                        if (ind !== index){
                            return null
                        }
                        return <Image url={image.url} key={ind} />
                    })}
                {photos.length > 1 && 
                    <>
                        <span
                            onClick={()=>handlePrev()}
                            className='absolute top-2/4 transform -translate-y-2/4 left-0 z-20 cursor-pointer'
                        >
                            <IoIosArrowDropleft style={{color: colors.text.primary}} size='40' />
                        </span>
                        <span
                            onClick={()=>handleNext()}
                            className='absolute top-2/4 transform -translate-y-2/4 right-0 z-20 cursor-pointer'
                        >
                            <IoIosArrowDropright style={{color: colors.text.primary}} size='40' />
                        </span>
                    </>
                }
                </div>
            </div>
        </div>
    )
}

export default Slider