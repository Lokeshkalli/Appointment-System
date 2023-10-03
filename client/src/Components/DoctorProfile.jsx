import React,{useState,useEffect} from 'react'
import bg from '../Images/bg.png'
import { Link,BrowserRouter as Router } from 'react-router-dom';


const DoctorProfile = ({id,name}) => {
  
    console.log(id)
      
  return ( 
    // <div>
    //     {id}
    // </div>
    <li className="flex justify-between gap-x-6 py-5">
    <div class="flex min-w-0 gap-x-4">
      <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src={bg} alt="" />
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">{name}</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">{name.split(" ").slice(1,)}@example.com</p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
<Link to={`/api/doctors/${id}`} >View Details</Link> 
    </div>
  </li>
  )
}

export default DoctorProfile
