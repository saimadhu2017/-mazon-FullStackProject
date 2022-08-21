import './Describe.css';
import Typewriter from 'typewriter-effect';

function Describe(props) {
    return (
        <div className="describe">
            <div className="rectangle">
                <span className="insideText">
                    <Typewriter options={{
                        strings:`Hi, There Welcome to the ${props.pageType} page`,
                        autoStart:true,
                        loop:true
                    }}/>
                </span>
            </div>
        </div>
    );
}

export default Describe;
