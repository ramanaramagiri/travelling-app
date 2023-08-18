import React from "react";
import './../login.css'
 function Login(){
    return(
    <> 	

       <div class="main">
          <form class="form">
             <label for="chk" aria-hidden="true">Log in</label>
             <input class="input" type="email" name="email" placeholder="Email" required=""/>
             <input class="input" type="password" name="pswd" placeholder="Password" required=""/>
             <button>Log in</button>
          </form>
       </div>
</>

    )
 }
export default Login;