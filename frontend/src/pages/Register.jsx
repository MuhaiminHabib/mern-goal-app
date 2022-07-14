import {useState, useEffect} from 'react';
import {FaUser} from 'react-icons/fa';


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const { name, email, password, password2 } = formData;
    
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
                <FaUser /> Register
            </h1>
            <p>Please create an account</p>
        </section>
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input 
                        type="text"
                        placeholder='Enter your username'
                        id='name'
                        name='name'
                        className='form-control'
                        value={name}
                        onChange={onChange}
                    />
                </div>
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
                <div className="form-group">
                    <input 
                        type="password"
                        placeholder='Confirm password'
                        id='password2'
                        name='password2'
                        className='form-control'
                        value={password2}
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