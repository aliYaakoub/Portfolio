import { useEffect, useState } from 'react';

import { FeaturedProjectCard } from '../components';
import { getFeaturedProjects } from '../services';
import Animation from '../components/generalComponents/Animation';

const HomePage = () => {

    const [featuredProjects, setFeaturedProjects] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getData = async () => {
            const FeaturedProjects = await getFeaturedProjects();
            setFeaturedProjects(FeaturedProjects);
            setLoading(false)
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
                featuredProjects && featuredProjects.map(card => (
                    <FeaturedProjectCard key={card.id} project={card} />
                ))
            }
        </div>
    )
}

export default HomePage;