import './SignUp.css';

function SignUp() {
    return (
        <div className='signUp'>
            <p className='textHeading display-6'>Sign Up</p>
            <form>
                <label class="form-label">First Name</label>
                <input className="form-control" type="text" name="firstName" id="inFirstName" placeholder='Enter First Name' />
                <label class="form-label">Last Name</label>
                <input className="form-control" type="text" name="lastName" id="inLastName" placeholder='Enter Last Name' />
                <label class="form-label">Email</label>
                <input className="form-control" type="email" name="email" id="inEmail" placeholder='Enter Email Id' />
                <label class="form-label">Password</label>
                <input className="form-control" type="password" name="password" id="inPassword" placeholder='Enter Password' />
                <label class="form-label">Confirm Password</label>
                <input className="form-control" type="password" name="confirmPassword" id="inConfirmPassword" placeholder='Repeat Password' />
                <button type="submit" className="btnSubmit btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default SignUp;
