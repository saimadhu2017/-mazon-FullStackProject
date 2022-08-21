import './SignIn.css';

function SignIn() {
    return (
        <div className='signIn'>
            <div className="singInBox">
                <p className='textHeading display-6'>Sign In</p>
                <form>
                    <label className="form-label">Email</label>
                    <input className="form-control inForm" type="email" name="email" id="inEmail" placeholder='Enter Email Id' />
                    <label className="form-label">Password</label>
                    <input className="form-control inForm" type="password" name="password" id="inPassword" placeholder='Enter Password' />
                    <button type="submit" className="btnLogin btn btn-success">Login</button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
