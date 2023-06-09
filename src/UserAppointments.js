import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
const UserAppointments = () => {
  const { logout,isAuthenticated,getAccessTokenSilently  } = useAuth0();
  var a;
  const [appointments, setAppointments] = useState(<div></div>);
  const [cancel, setCancel] = useState("");
  const cancelHandler = (e) =>{
    // console.log(e.target.value);
     
    setCancel( e.target.value )
}
const   submitButton= async ()=>{
  //console.log("Here in Try for User")
  //console.log(user1);
  const token = await getAccessTokenSilently();
  console.log(cancel);
  var hold = "http://localhost:4000/cancelAppointment/" + cancel
  console.log("Hold is " + hold);
  const response = await axios.get(hold, {
    headers: {
      authorization: `Bearer ${token}`,
    }
  });
  var nT = response.data;
  setCancel("");
  callApi().then(()=>{
    //console.log(checker);
  if (a != null) {
            console.log("Here At Appointments")
            console.log("a is " + a);
          setAppointments(
           <div>
           {a.map(app => (
             <div className="appointment" data-id="1">
          <h2>Appointment ID </h2>{app.AppointmentID}
       <p>Appointment at </p>{app.date}
       <p><strong>Tutor:</strong> {app.TeacherID}</p>
       <p><strong>Student:</strong> {app.StudentuserName}</p>
     </div>
           ))}
             </div>
         );
        } else
        {
         console.log("Mistake");
        }

});

  //navigate("/");
}
  useEffect(() => {
    callApi().then(()=>{
     //console.log(checker);
   if (a != null) {
             console.log("Here At Appointments")
             console.log(a);
           setAppointments(
            <div>
            {a.map(app => (
              <div className="appointment" data-id="1">
                <h2>Appointment ID </h2>{app.AppointmentID}
        <p>Appointment at </p>{app.date}
        <p><strong>Tutor:</strong> {app.TeacherID}</p>
        <p><strong>Student:</strong> {app.StudentuserName}</p>
        <p><strong>Date:</strong> {app.date}</p>
        <p><strong>Start:</strong> {app.start}</p>
        <p><strong>End:</strong> {app.end}</p>
      </div>
            ))}
            </div>
          );
         } else
         {
          console.log("Mistake");
         }
 
 });
   }, [isAuthenticated]);
   async function callApi(){
    try {
        
        //console.log("Is Authooo")
const token = await getAccessTokenSilently();
//console.log(token);
const response =  await await axios.get('http://localhost:4000/returnReservations', {
  headers: {
    authorization: `Bearer ${token}`,
  }
});
console.log(response.data);
a = response.data;
//console.log(checker);
    }catch (error) {
        console.log(error.message);
    }

}
        return (
          <div>
        <section id="userappointments">
        <h1><center>Tutoring Appointments</center></h1>
        <br></br>
        {appointments}
      </section>
  </div>
        );
    };
    
    export default UserAppointments;