import { useEffect, useState } from 'react';
import './App.scss';
import { Layout } from './components';
import Animation from './components/generalComponents/Animation';
import MainPage from './pages/MainPage';

function App() {

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        }, 2000)
    }, [])

    return (
        <>
            {loading ?
                <div className='flex justify-center items-center h-screen bg-black'>
                    <Animation />
                </div>
                :
                <Layout>
                    <MainPage />
                </Layout>
            }
        </>
    );
}

export default App;