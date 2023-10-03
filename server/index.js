const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors")

const PORT = process.env.PORT || 4000;
const app = express();
const doctors = require('./data/doctors_list.json')
const appointments = require('./data/Appointments.json')
console.log(doctors)
// body parser
app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>{
    res.send("This is Appointment System API")
})
// Fetch Doctors list
app.get('/api/doctors', (req, res) => {
    res.json(doctors);
  });

// Used to Fetch the Specific doctor details

  app.get('/api/doctors/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const doctor = doctors.find((d) => d.id === id); // checks for a doctor with particular id.
  if (!doctor) {
    res.status(404).json({ error: 'Doctor not found' }); // If not present return 404 Doctor not found ms 
  } else {
    res.json(doctor);
  }
});
app.post('/api/appointments', (req, res) => {
    const { doctorId, patientName } = req.body;
    const doctor = doctors.find((d) => d.id === doctorId);
  
    if (!doctor) {
      res.status(404).json({ error: 'Doctor not found' });
    } else if (doctor.availableSlots.length === 0 || appointments.length >= doctor.maxPatients) {
      res.status(400).json({ error: 'No available slots' });
    } else {
      const appointment = {
        doctorId,
        patientName,
      };
      appointments.push(appointment);
      res.json({ message: 'Appointment booked successfully' });
    }
  });


app.listen(PORT,()=>{
    console.log(`The Server is running on port ${PORT}`)
})

