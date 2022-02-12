import React from 'react';
// import { CategoryFlag } from '.';
import { useAppContext } from './Context';
import { BiArrowFromLeft } from 'react-icons/bi'
import { Link } from 'react-router-dom';

const ProjectCard = ({project}) => {

    const { colors } = useAppContext();

    return (
        <div style={{backgroundColor: colors.secondary}} className='w-full rounded flex-grow mb-2' >
            <div className='p-5 transition-colors overflow-hidden w-full flex items-center shadow-md  justify-between'>
                <div className='pr-3'>
                    <Link to={`/project/${project.slug}`}>
                        <div style={{color: colors.text.primary}} className="flex items-center mb-5 group cursor-pointer">
                            <h1 className='text-2xl md:text-3xl'>{project.title}</h1>
                            <BiArrowFromLeft size={30} className='transform group-hover:translate-x-3 mx-2 transition' />
                        </div>
                    </Link>
                    <p style={{color: colors.text.primary}} className='medium-font' >{project.excerpt}</p>
                    {/* <div className='mt-10 hidden'>
                        {project.categories.map(category => (
                            <CategoryFlag data={category} key={category.id} />
                        ))}
                    </div> */}
                </div>
                <img src={project.picture.url} alt='' className='w-32 h-32 rounded-3xl card-img' />
            </div>
        </div>
    );
};

export default ProjectCard;
