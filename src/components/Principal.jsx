import React from 'react'
import AllPeople from './AllPeople'
import Description from './Description'
import { useQuery, gql } from '@apollo/client';

/* Query thar searches for the total amount of characters */
const totalCountQuery = gql`
    query{
        allPeople(first:5) {
        totalCount
        }
    }
`;

const Principal = () => {

    const { loading, error, data } = useQuery(totalCountQuery);

    if(loading) return <p>Loading</p>;
    if (error) return <p>Error :(</p>;
    let numbers = []
    let number =1
    for(number;number<=Math.ceil(data.allPeople.totalCount/5);number++){
        numbers.push(number)
    }
    
    return (
        <>  
            <div className="all-people">
                {numbers.map(item => 
                    <AllPeople key={item} number={item*5} totalNumber={data.allPeople.totalCount}/>
                )}
            </div>
            <Description/>
        </>
    )
}

export default Principal
