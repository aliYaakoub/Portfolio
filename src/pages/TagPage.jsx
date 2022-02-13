import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { TagFlag, ProjectCard } from '../components';
import Animation from '../components/generalComponents/Animation';
import { getProjectsByTag, getTagName } from '../services'
import { useAppContext } from './../components/Context';

const TagPage = () => {

    const { slug } = useParams();
    const { colors } = useAppContext();

    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [tag, setTag] = useState(true);

    useEffect(()=>{
        const getData = async () => {
            try{
                const Projects = await getProjectsByTag(slug);
                const Tag = await getTagName(slug);
                setTag(Tag);
                setProjects(Projects);
                setLoading(false);
            }
            catch(err){
                console.error(err.message);
                setLoading(false);
            }
        } 
        getData();
    }, [slug])

    return (
        <div className='flex-grow'>
            {projects && projects.length > 0 && tag && <p style={{color: colors.text.primary}} className='my-5'>Showing {projects.length} <TagFlag data={tag}/> Related Projects</p>}
            {loading ? 
                <div className='flex justify-center items-center w-full h-full'>
                    <Animation />
                </div>
                :
                projects && 
                projects.length === 0 ? 
                    <div className='w-full h-full flex justify-center items-center'>
                        <p style={{color: colors.text.primary}}>No Projects For This Tag</p>
                    </div>
                    :
                    projects.map((project, index) => (
                        <ProjectCard project={project} key={project.id} index={index} />
                    ))
            }
        </div>
    )
}

export default TagPage