import {React,useState} from 'react'
// import {} from "react-bootstrap";
import logo from '../components/images/logo.svg';
import "../styles/RegisterStyles.css";
function LogIn() {
  const [user,setUser]=useState({
    email:"",
    password:"" })
  return (
    <>
    <section className="vh-100"> {/* style="background-color: #eee;" */}
<div className="container h-100">
<div className="row d-flex justify-content-center align-items-center h-100">
 <div className="col-lg-12 col-xl-11">
   <div className="card text-black" >  {/* style="border-radius: 25px;"" */}
     <div className="card-body p-md-5">
       <div className="row justify-content-center">
       <h1 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">CLUB REGISTRATION</h1>
         <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">



           <form className="mx-1 mx-md-4">

             <div className="d-flex flex-row align-items-center mb-4">
               <i className="fas fa-user fa-lg me-3 fa-fw"></i>
               <div className="form-outline flex-fill mb-0">
               <label className="form-label" for="form3Example1c">Club Name</label>
                 <input type="text" id="form3Example1c" className="form-control" name='name'placeholder='Club Name' value={user.name} onChange={handleInputs} />
                
               </div>
             </div>

             <div className="d-flex flex-row align-items-center mb-4">
               <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
               <div className="form-outline flex-fill mb-0">
                
                 <label className="form-label" for="form3Example3c">Club Id</label>
                  <input type="email" id="form3Example3c" className="form-control" name='email' placeholder='Club Id' value={user.email}  onChange={handleInputs}/>
               </div>
             </div>

             <div className="d-flex flex-row align-items-center mb-4">
               <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
               <div className="form-outline flex-fill mb-0">
                
                 <label className="form-label" for="form3Example4c">Password</label>
                  <input type="password" id="form3Example4c" className="form-control" name='password' placeholder='Password' value={user.password}  onChange={handleInputs}/>
               </div>
             </div>


           

             <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
               <button type="button" className="btn btn-primary btn-lg">Register</button>
             </div>

           </form>

         </div>
         <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

<img src={logo} className="img-fluid" alt="Sample image2" />

         </div>
       </div>
     </div>
   </div>
 </div>
</div>
</div>
</section>
</>
  )
}

export default LogIn;
