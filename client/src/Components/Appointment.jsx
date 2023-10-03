import React,{useState} from 'react'

const Appointment = () => {
    // Assuming you have data like doctorId and patientName that you want to send in the request body
const dataToSend = {
  doctorId: 123, // Replace with the actual doctorId
  patientName: 'John Doe', // Replace with the actual patientName
};

fetch('http://localhost:4000/api/appointments', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Specify the content type as JSON
  },
  body: JSON.stringify(dataToSend), // Convert the data to JSON format
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response JSON
  })
  .then((data) => {
    console.log(data.message); // Output the success message from the server
  })
  .catch((error) => {
    console.error('Error:', error); // Handle any errors that occur during the request
  });

  return (
    <div>

      
    </div>
  )
}

export default Appointment
