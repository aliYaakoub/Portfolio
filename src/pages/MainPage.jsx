import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import ContactsPage from './ContactsPage';
import ProjectDetailsPage from './ProjectDetailsPage';
import NotFound from './NotFound';
import TagPage from './TagPage';
import FilterSearchPage from './FilterSearchPage';
import CategoryPage from './CategoryPage';

const MainPage = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/projects' element={<ProjectsPage />} />
            <Route path='/project/:slug' element={<ProjectDetailsPage />} />
            <Route path='/filter' element={<FilterSearchPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
            <Route path='/tag/:slug' element={<TagPage />} />
            <Route path='/category/:slug' element={<CategoryPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

export default MainPage;