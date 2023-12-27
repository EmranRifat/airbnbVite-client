import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='h-screen'>
        <Navbar/>
        <Outlet/>
            
        </div>
    );
};

export default Main;