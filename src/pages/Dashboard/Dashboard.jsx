import Sidebar from "../../components/Sidebar/Sidebar"
import Users from "../../components/Dashboard/Users"
const Dashboard = () => {
  return (
    <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
      <h1>Dashboard</h1>
      <div className=" ">
        <Sidebar />
        <Users />
      </div>

    </div>
  )
}

export default Dashboard
