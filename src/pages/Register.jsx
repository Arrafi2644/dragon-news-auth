import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const {createNewUser, setUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState({})

      const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        // console.log(form);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        // console.log({name, photo, email, password});


        if(name.length < 4){
            setError({...error, name:"Name must be more than or equal 4 character"})
            return;
        }

        createNewUser(email, password)
       .then(result => {
        const user = result.user;
        setUser(user)
        updateUserProfile({displayName: name, photoURL: photo})
        .then(() => {
            // console.log(result.user);
            navigate('/')
        })
        .catch(error => {
            // console.log(error.message);
        })
        // console.log(user);

       })
       .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
      });

      }

    return (
        <div className='min-h-screen flex justify-center items-center'>
        <div className="card bg-base-100 w-full py-8 max-w-sm shrink-0 shadow-2xl">
            <h2 className='text-2xl font-bold text-center'>Register your account</h2>
            <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name='name' type="name" placeholder="name" className="input input-bordered" required />
                    {
                        error?.name && <p className='text-red-500 text-xs'>{error.name}</p>
                    }
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name='photo' type="name" placeholder="photo url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-[#403F3F] text-white">Register</button>
                </div>
            </form>
            {/* <p className='text-center font-medium'>Already Have An Account ? <Link to='/auth/login' className='text-red-500'>Login</Link></p> */}
        </div>
    </div>
    );
};

export default Register;