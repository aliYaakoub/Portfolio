import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from './Context';

const CategoryFlag = ({data}) => {

    const { colors } = useAppContext();

    return (
        <span style={{backgroundColor: colors.accent, color: colors.text.secondary}} className='py-2 px-3 rounded-lg m-2 cursor-pointer'>
            <Link to={`/category/${data.slug}`}>
                {data.name}
            </Link>
        </span>
    );
};

export default CategoryFlag;