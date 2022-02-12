import React, { useEffect, useState } from 'react';
import {RichText} from '@graphcms/rich-text-react-renderer';
import { useParams } from 'react-router-dom'
import { AiFillTags } from 'react-icons/ai'

import { useAppContext } from '../components/Context';
import { TagFlag } from '../components';
import { getProjectDetail } from '../services';
import Animation from '../components/generalComponents/Animation';
import Slider from '../components/Slider';

const ProjectDetailsPage = () => {

    const params = useParams();
    const { colors } = useAppContext(); 

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      const getData = async () => {
        const Projects = await getProjectDetail(params.slug);
        setProject(Projects);
        setLoading(false);
      }
      getData();
    }, [params.slug]);

    return (
        <div className='flex-grow'>
            {loading ?
                <div className='flex justify-center items-center w-full h-full'>
                    <Animation />
                </div>
                :
                project || project === {} ? 
                    <>
                        <div style={{backgroundColor: colors.secondary}} className='rounded-md transition-colors shadow-md overflow-hidden w-full mb-8'>
                            <img src={project.picture.url} alt='' className='w-full h-96 card-img' />
                            <div style={{color: colors.text.primary}} className="px-10 py-5 font-light">
                                <div className="flex items-center mb-5 w-full">
                                    <h2 className='text-3xl font-medium text-center md:text-left w-full'>{project.title}</h2>
                                </div>
                                <RichText
                                    content={project.description.raw.children}
                                    renderers={{
                                        h2: ({ children }) => <h2 className="description-header text-2xl text-black">{children}</h2>,
                                        ul:({children})=><ul className='list pl-5 my-5'>{children}</ul>,
                                        a: ({ children, href }) => (
                                            <a 
                                                className='project-link text-xl italic' 
                                                target={'_blank'} 
                                                rel={'noreferrer'}
                                                href={href}>{children}
                                            </a>
                                        ),
                                    }}
                                />
                            </div>
                            {project.photos.length > 0 && <Slider photos={project.photos} />}
                            <div className='px-10 py-5'>
                                <h2 className="description-header text-2xl text-black flex items-center">
                                    <AiFillTags className='mr-3' />
                                    <span>Tags</span>
                                </h2>
                                <div className='flex flex-wrap w-full mx-8 my-5'>
                                    {project.tags.map(tag => (
                                        <TagFlag data={tag} key={tag.id} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div className='w-full h-full flex justify-center items-center'>
                        <p style={{color: colors.text.primary}}>Project Not Found</p>
                    </div>
            }
        </div>
    );
};

export default ProjectDetailsPage;
