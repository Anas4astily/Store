import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/Dashboard/Sidebar.js'
import Topbar from '../../Components/Dashboard/Topbar.js'
import './dashboard.css'
export default function Dashboard()
{
    return (
        <div className="position-relative dashboard ">
           <Topbar/>
           <div className='d-flex  gap-3' style={{marginTop:'70px'}}>
           <Sidebar />
           <Outlet />
           </div>
        </div>
    )
}