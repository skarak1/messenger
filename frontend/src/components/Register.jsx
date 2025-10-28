//rfce
import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className='register'>
        <div className='card'>
            <div className='card-header'>
                <h3>Register</h3>
            </div>

            <div className='card-body'>
                <form>
                    <div className='form-group mb-3'>
                        <label htmlFor='username'>Username</label>
                        <input type="text" className='form-control' 
                        placeholder='username' id='username' />
                    </div>

                    <div className='form-group mb-3'>
                        <label htmlFor='email'>Email</label>
                        <input type="email" className='form-control' 
                        placeholder='Enter email' id='email' />
                    </div>

                    <div className='form-group mb-3'>
                        <label htmlFor='password'>Password</label>
                        <input type="password" className='form-control' 
                        placeholder='password' id='password' />
                    </div>

                    <div className='form-group mb-3'>
                        <label htmlFor='confirmpassword'>Confirm password</label>
                        <input type="confirmpassword" className='form-control' 
                        placeholder='confirmpassword' id='confirmpassword' />
                    </div>

                    <div className='form-group mb-3'>
                        <div className='file-image'>
                            <div className='image'>

                            </div>
                            <div className='file'>
                                <label htmlFor='image'>select image</label>
                                <input type="file" className='form-control' 
                                id='image' />

                            </div>

                        </div>
                    </div>
                    <div>
                        <input type="submit" value="register" className='btn'/>
                    </div>
                    <div>
                        <span><Link to="/messenger/login" >Login your account</Link></span>
                    </div>
                </form>
            </div>        
        </div>
    </div>
  )
};

export default Register;
