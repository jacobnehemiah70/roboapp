import React from 'react';
import Card from '../Card/Card'
//  import { robots } from '../robots';


const CardList = ({ robots }) => {
        console.log(robots);
        return (
                <>
                        {
                                robots.map((item) => {
                                        return (
                                                <Card
                                                        key={item.id}
                                                        name={item.name}
                                                        username={item.username}
                                                        email={item.email}
                                                />
                                        );
                                })
                        }

                </>
        )
}

export default CardList;