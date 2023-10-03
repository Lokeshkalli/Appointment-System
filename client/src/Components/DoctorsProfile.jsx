import React,{useState,useEffect} from 'react'
import {useParams}  from 'react-router-dom';
import '../App.css'
const DoctorsProfile = () => {
    const { id } = useParams();
    const [data, setData] = useState({ name: "", availableSlots: [] });
    const [success,setSuccess] = useState(false)
    
    useEffect(() => {
      async function fetchdata() {
        try {
          await fetch(`http://localhost:4000/api/doctors/${id}`)
          .then((res) => res.json())
          .then((val) => {
            // console.log(val);
            setData((state) => {
              return {
                ...state,
                id: val.id,
                name:val.name,
                availableSlots: [val.availableSlots],
              };
            });
            // console.log("the dat", data)
          }) .catch((error) => {
            console.error('Fetch error:', error);
          });

        } catch (error) {
          console.error('Error fetching doctors:', error);
        }
      }
  
      fetchdata();
    }, []);
    const fetchappointments = async(name)=>{
      const dataToSend = {
        doctorId: data.id, // Replace with the actual doctorId
        patientName: name, // Use the patient's name obtained from the prompt
      };
      fetch('http://localhost:4000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body: JSON.stringify(dataToSend) // Convert the data to JSON format
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          else{
            setSuccess(true)
          }
          return response.json(); 
        })
        .then((data) => {
          console.log(data.message); 
        })
        .catch((error) => {
          console.error('Error:', error); 
        });
    }
    const handleClick = () => {
      const name = prompt("What is your name");
    
      if (!name) {
        return;
      }
      fetchappointments(name)
    
     
    
    };
    

 
      var slots = ""
      const slots_data ={}
      for(let i =0; i<data.availableSlots.length;i++){
        if(i===data.availableSlots.length -1){
            slots+=data.availableSlots[i]
            

        }
        else{
            slots+=data.availableSlots[i]
            slots+=", "
        }
        slots_data[data.availableSlots[i]]=5

      }

  return (
    <div className='profile mx-10 my-10 '>
        <li>Name : {data.name}</li>
        <li>Days Available : {slots}</li>
        <button type='button' className='bg-[#38bdf8] rounded m-0' onClick={handleClick}> Make an Appointment</button>

        {
          success ? <p className='success-msg'>Appointment booked successfully</p>:<></>
        }
        
      
    </div>
  )
}

export default DoctorsProfile
