import React from 'react'
import {Routes,Route} from 'react-router-dom'
import UserDetails from './Components/UserDetails.jsx'
import DoctorsProfile from './Components/DoctorsProfile.jsx'
import DoctorsList from './Components/DoctorsList.jsx'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<DoctorsList />}/>
      <Route  path='/api/doctors/:id' element={<DoctorsProfile />} />
      


    </Routes>
  )
}

export default AllRoutes
