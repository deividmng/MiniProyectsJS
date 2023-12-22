import { Outlet } from 'react-router-dom';
import Sidebar2 from '../Sidebar2';
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar2 />
            <div className='page'>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
