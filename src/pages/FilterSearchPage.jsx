import React, { useEffect, useState } from 'react';
import { AiFillTags } from 'react-icons/ai';
import { BiCategory } from 'react-icons/bi';
import { motion } from 'framer-motion';

import Animation from '../components/generalComponents/Animation';
import { getAllTags, getAllCategories } from './../services';
import { useAppContext } from './../components/Context';
import { CategoryFlag, TagFlag } from '../components';

const FilterSearchPage = () => {

    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true);
    const [tags, setTags] = useState(null);

    const { colors } = useAppContext();

    useEffect(()=>{
        const getData = async () => {
          const categories = await getAllCategories();
          const tags = await getAllTags();
          setCategories(categories);
          setTags(tags);
          setLoading(false);
        }
        getData();
      }, []);

    return (
        <div className='flex-grow'>
            {loading ? 
                <div className="flex items-center justify-center w-full h-full">
                    <Animation />
                </div>
                :
                <>
                    {tags && categories && 
                    <motion.div 
                        initial={{opacity: 0, scale: 0.1}} 
                        animate={{opacity: 1, scale: 1}} 
                        style={{backgroundColor: colors.secondary}} 
                        className='w-full rounded-md px-5'
                    >
                        <div className='w-full py-5'>
                            <div className="flex items-center px-2" style={{color: colors.text.primary}} >
                                <AiFillTags size={30} />
                                <p className='px-2 py-5'>Filter By Tags : </p>
                            </div>
                            <div className='flex flex-wrap w-full'>
                                {tags && tags.map(tag => (
                                    <TagFlag data={tag} key={tag.id} />
                                ))}
                            </div>
                        </div>
                        <div className='w-full py-5'>
                            <div className="flex items-center px-2" style={{color: colors.text.primary}} >
                                <BiCategory size={30} />
                                <p className='px-2 py-5'>Filter By Category : </p>
                            </div>
                            <div className='flex flex-wrap w-full'>
                                {categories && categories.map(tag => (
                                    <CategoryFlag data={tag} key={tag.id} />
                                ))}
                            </div>
                        </div>
                    </motion.div>}
                </>
            }
        </div>
    )
}

export default FilterSearchPage