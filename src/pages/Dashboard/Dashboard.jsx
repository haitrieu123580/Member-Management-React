// import Sidebar from "../../components/Sidebar/Sidebar"
import Users from "../../components/Dashboard/Users"
// import { useState } from "react";
const Dashboard = ({user}) => {
  

  return (
    <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
      <h1>Dashboard</h1>
      <div className=" ">
        {/* <Sidebar user={user}/> */}
        <Users />
      </div>

    </div>
  )
}

export default Dashboard
