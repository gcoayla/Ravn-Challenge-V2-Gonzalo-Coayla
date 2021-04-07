import React from 'react'
import Person from './Person'
import { useQuery, gql } from '@apollo/client';

const AllPeople = ({number, totalNumber}) => {

    let allPeopleQuery = gql`
        query{
            allPeople(first:${number}) {
            people{
                id
                name
                species {
                name
                }
                homeworld{
                name
                }
            }
            }
        }
    `;
    
    const { loading, error, data } = useQuery(allPeopleQuery);
    if(loading) return <p>Loading</p>
    if(error) return <p>Error</p>
    let filteredData = []
    if(number<=totalNumber){
        filteredData = data.allPeople.people.slice(-5)
    }else if(number>totalNumber){
        filteredData = data.allPeople.people.slice(-(5-(number-totalNumber)))
    }

    return (
        <>
            {filteredData.map(item =>
                <Person key={item.id} name={item.name} specie={item.species? item.species.name : "Human"} homeWorld={item.homeworld.name} />
                
            )}
        </>
    )
}

export default AllPeople
