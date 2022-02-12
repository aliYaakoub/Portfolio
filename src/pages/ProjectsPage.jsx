import React, { useEffect, useState } from 'react';

import { ProjectCard } from '../components';
import Animation from '../components/generalComponents/Animation';
import { getAllProjects } from '../services';
import { useAppContext } from './../components/Context';

const ProjectsPage = () => {

    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);

    const { colors } = useAppContext();

    useEffect(()=>{
        const getData = async () => {
            const Projects = await getAllProjects();
            setProjects(Projects);
            setLoading(false);
        }
        getData();
    }, []);

    return (
        <div className='flex-grow'>
            {loading ? 
                <div className='flex justify-center items-center w-full h-full'>
                    <Animation />
                </div>
                :
                <>
                    {projects && <p className='py-5' style={{color: colors.text.primary}} >Showing {projects.length} Results.</p>}
                    {projects && projects.map(project => (
                        <ProjectCard project={project.node} key={project.id} />
                    ))}
                </>
            }
        </div>
    );
};

export default ProjectsPage;
