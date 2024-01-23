import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar2';
import './index.scss';

const Layout2 = () => {
    return (
        <div className='App'>
            <Sidebar />
            <div className='page'>
                <h1>calling for the layout2</h1>
                <Outlet />
            </div>
        </div>
    );
}

export default Layout2;
