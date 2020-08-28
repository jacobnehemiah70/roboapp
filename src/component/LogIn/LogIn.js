import React from 'react';
import './LogIn.css'


const LogIn = (props) => {
    return (
        <div className='loginpage bg-lightest-blue'>
            
          <form>
            <p className='f3'>WELCOME TO MY ROBOFRIENDS APP </p>
            <div className='center pa3'>
              <div className=' form  pa4 br3 shadow-5'>
                <label className='f2'>Name</label>
              <input  className='f4 pa2 ma4 w-40 center' type='text'/>
              <label className='f2'>Email</label>
              <input className='f4 pa2 w-40 center' type='text'/>

              <button className='w-20 grow f4 link dib pv3 ph4 white bg-light-blue'
                onClick={props.isSignedOut}> LogIn

            </button>
              </div>
            </div>
          </form>

        </div>
    );
}

export default LogIn;