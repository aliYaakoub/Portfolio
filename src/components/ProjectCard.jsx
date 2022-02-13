import React from 'react';
import { motion } from 'framer-motion';

import { useAppContext } from './Context';
import { BiArrowFromLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const ProjectCard = ({project, index}) => {

    const { colors } = useAppContext();

    return (
        <motion.div 
            initial={{opacity: 0, scale: 0.1}} 
            animate={{opacity: 1, scale: 1, transition: {delay: index * 0.1 }}}
            style={{backgroundColor: colors.secondary}} 
            className='w-full rounded flex-grow mb-2' 
        >
            <div className='p-5 transition-colors overflow-hidden w-full flex items-center shadow-md  justify-between'>
                <div className='pr-3'>
                    <Link to={`/project/${project.slug}`}>
                        <div style={{color: colors.text.primary}} className="flex items-center mb-5 group cursor-pointer">
                            <h1 className='text-xl sm:text-2xl md:text-3xl'>{project.title}</h1>
                            <BiArrowFromLeft size={30} className='transform group-hover:translate-x-3 mx-2 transition' />
                        </div>
                    </Link>
                    <p style={{color: colors.text.primary}} className='medium-font text-sm sm:text-base' >{project.excerpt}</p>
                </div>
                <img src={project.picture.url} alt='' className='w-20 h-20 md:w-32 md:h-32 rounded-3xl card-img' />
            </div>
        </motion.div>
    );
};

export default ProjectCard;
