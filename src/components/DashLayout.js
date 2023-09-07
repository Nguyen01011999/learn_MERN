// import { Outlet } from "react-router-dom"
// import DashFooter from "./DashFooter"
// import DashHeader from "./DashHeader"
// const DashLayout = () => {
//   return (
//     <>
//       <DashHeader />
//       <div className="dash-container">
//         <Outlet />
//       </div>
//       <DashFooter />
//     </>
//   )
// }

// export default DashLayout
import { Outlet } from 'react-router-dom'
import 'classlist.js';
import DashHeader from './DashHeader'
import DashFooter from './DashFooter'

const DashLayout = () => {
    return (
        <>
            <DashHeader />
            <div className="dash-container">
                <Outlet />
            </div>
            <DashFooter />
        </>
    )
}
export default DashLayout