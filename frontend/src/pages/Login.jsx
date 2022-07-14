import {useState, useEffect} from 'react';
import { FaSignInAlt } from 'react-icons/fa';


const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData;
    
   const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
   }

    const onSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <>
        <section className='heading'>
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>Please login and start setting goals</p>
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input 
                        type="email"
                        placeholder='Enter your email'
                        id='email'
                        name='email'
                        className='form-control'
                        value={email}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password"
                        placeholder='Enter your password'
                        id='password'
                        name='password'
                        className='form-control'
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className='btn btn-block'>Submit</button>
            </form>
        </section>
    </>
  )
}

export default Register