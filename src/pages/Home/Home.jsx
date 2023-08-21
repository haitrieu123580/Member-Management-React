import React from 'react'
import { useAuth } from '../../context/Auth'
// import Sidebar from '../../components/Sidebar/Sidebar'
const Home = () => {
    const { user } = useAuth()
    return (
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
            <h1>Home</h1>
            {Object.keys(user).length > 0 ?
                (<h1>
                    {`Welcome  ${user.username} ^ ^`}
                </h1>
                ) : (<h1>
                    {`Please Login!`}
                </h1>)}
        </div>
    )
}

export default Home
