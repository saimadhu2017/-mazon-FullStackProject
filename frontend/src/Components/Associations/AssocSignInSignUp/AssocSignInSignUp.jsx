import './AssocSignInSignUp.css';
import Describe from '../../Common/Describe/Describe.Component';
import SignUp from '../../Pages/SignUp/SignUp.Component';
import SignIn from '../../Pages/SignIn/SignIn.Component';

function AssocSignInSignUp() {
    const pageType = "SignUp";

    return (
        <div className={findClassName(pageType)}>
            <Describe pageType={pageType}/>
            {whichComponent(pageType)}
        </div>
    );
}

function whichComponent(pageType) {
    return (
        (pageType === "SignIn" ? <SignIn /> : <SignUp />)
    );
}

function findClassName(pageType) {
    return (
        (pageType === "SignIn" ? "pageContainerSingIn" : "pageContainerSingUp")
    );
}


export default AssocSignInSignUp;
