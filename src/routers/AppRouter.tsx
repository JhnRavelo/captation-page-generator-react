import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Landing from '../pages/Landing/Landing'
import EditProfile from '../pages/EditProfile/EditProfile'

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/marketing/*" element={<Landing />} />
            <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
    )
}

export default AppRouter
