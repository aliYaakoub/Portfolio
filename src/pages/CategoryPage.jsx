import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ProjectCard, CategoryFlag } from '../components';
import Animation from '../components/generalComponents/Animation';
import { getProjectsByCategory, getCategoryName } from '../services'
import { useAppContext } from './../components/Context';

const CategoryPage = () => {

    const { slug } = useParams();
    const { colors } = useAppContext();

    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('');

    useEffect(()=>{
        const getData = async () => {
            try{
                const Projects = await getProjectsByCategory(slug);
                const Category = await getCategoryName(slug);
                setCategory(Category);
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
            {
                projects && 
                projects.length > 0 && 
                category && 
                <p style={{color: colors.text.primary}} className='my-5'>
                    Showing {projects.length} <CategoryFlag data={category}/> Related Projects
                </p>
            }
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
                    projects.map(project => (
                        <ProjectCard project={project} key={project.id} />
                    ))
            }
        </div>
    )
}

export default CategoryPage