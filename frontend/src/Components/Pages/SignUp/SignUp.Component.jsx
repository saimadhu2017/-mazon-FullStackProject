import './SignUp.css';

function SignUp() {
    return (
        <div className='signUp'>
            <p className='textHeading display-6'>Sign Up</p>
            <form>
                <label className="form-label">First Name</label>
                <input className="form-control inForm" type="text" name="firstName" id="inFirstName" placeholder='Enter First Name' />
                <label className="form-label">Last Name</label>
                <input className="form-control inForm" type="text" name="lastName" id="inLastName" placeholder='Enter Last Name' />
                <label className="form-label">Email</label>
                <input className="form-control inForm" type="email" name="email" id="inEmail" placeholder='Enter Email Id' />
                <label className="form-label">Password</label>
                <input className="form-control inForm" type="password" name="password" id="inPassword" placeholder='Enter Password' />
                <label className="form-label">Confirm Password</label>
                <input className="form-control inForm" type="password" name="confirmPassword" id="inConfirmPassword" placeholder='Repeat Password' />
                <button type="submit" className="btnSubmit btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default SignUp;
