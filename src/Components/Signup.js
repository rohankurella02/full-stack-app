import React from 'react'
import { useForm } from 'react-hook-form';
import { Form, Button } from "react-bootstrap"
import {MdLogin} from 'react-icons/md';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Signup() {

  const {
    register, handleSubmit,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const onFormSubmit = (userObj) => {
    console.log(userObj);
    axios.post("http://localhost:4000/user/create-user", userObj)
    .then(response => {
      console.log(response)
      alert(response.data.message)
      //navigate to login page
      if(response.data.message == "New User Created Successfully")
        navigate('/login');
    })
    .catch(ree => {
      alert("Something Went Wrong")
    })
  }


  return (
    <div>
      <div className='display-2 text-center text-info'>Sign Up</div>
      <Form className='w-50 mx-auto' onSubmit={handleSubmit(onFormSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='text-start'>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter email" {...register("username", {required: true})} />
          {/* validation error message for username */}
          {errors.username && <p className='text-danger'>Username is Required</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" {...register("password", {required: true})} />
          {/* validation error message for password */}
          {errors.password && <p className='text-danger'>Password is Required</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" {...register("email", {required: true})} />
          {/* validation error message for email */}
          {errors.email && <p className='text-danger'>email is Required</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" {...register("city", {required: true})} />
          {/* validation error message for email */}
          {errors.city && <p className='text-danger'>city is Required</p>}
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign Up <MdLogin />
        </Button>
      </Form>
    </div>
  )
}

export default Signup