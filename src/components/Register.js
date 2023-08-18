import React from "react";
import '../Register.css'
import { Link } from "react-router-dom";
 function Register(){
   return (
   <div class="contact-form">
   <span class="heading">Registration </span>
   <form>
    
     <label for="name">Name:</label>
     <input type="text" required=""/>
     <label for="password">Password:</label>
     <input type="password" id="email" name="password" required=""/>
     <label for="password">Email:</label>
     <input type="email" id="email" name="email" required=""/>
     <label for="password">Phone Number</label>
     <input type="phone" id="phone" name="phone" required=""/>
     <label for="password">Address</label>
     <input type="address" id="address" name="address" required=""/>
   <button type="submit"> <Link  to="/Login" className="sub">Submit</Link></button>
   </form>
 </div>
   )

 }
export default Register
