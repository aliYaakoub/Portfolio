import React from 'react';
import { TagFlag } from '.';
import { useAppContext } from './Context';
import { BiArrowFromLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const FeaturedProjectCard = ({project}) => {

    const { colors } = useAppContext();

    return (
        <div style={{backgroundColor: colors.secondary}} className='rounded-md transition-colors overflow-hidden w-full shadow-md mb-8'>
            <img src={project.picture.url} alt='' className='w-full h-60 card-img hover:h-80 transition-all duration-150' />
            <div className="p-5">
                <Link to={`/project/${project.slug}`}>
                    <div style={{color: colors.text.primary}} className="flex items-center mb-5 group cursor-pointer">
                        <h1 className='text-2xl md:text-3xl'>{project.title}</h1>
                        <BiArrowFromLeft size={30} className='transform group-hover:translate-x-3 mx-2 transition' />
                    </div>
                </Link>
                <p style={{color: colors.text.primary}} className='medium-font' >{project.excerpt}</p>
                <div className='flex flex-wrap mt-10'>
                    {project.tags.map(tag => (
                        <TagFlag data={tag} key={tag.id} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturedProjectCard;
