import React from 'react';
import './HomePage.css'


const Homepage = (props) =>{
    return(
        <div className='homepage bg-lightest-blue'>
            <button className='pa3 ba b--green
             bg-white pointer dim'
                onClick={props.isSignedIn}> TAKE A PEEP

            </button>
        </div>
    );
}

export default Homepage;