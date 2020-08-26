import React from 'react';



const Card = (props) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow' >
            <div>
                <img src={`https://robohash.org/set_set5/${props.name}?20x20`} alt='robots' />

            </div>
            <div>
                <p>{props.name}</p>
                <p>{props.username}</p>
                <p>{props.email}</p>
            </div>

        </div>
    );
}
export default Card;