import React from 'react'
import Person from './Person'
import { useQuery, gql } from '@apollo/client';
import Loading from './Loading';
import Error from './Error'

const AllPeople = ({number, totalNumber, totalIter, last}) => {

    let allPeopleQuery = gql`
        query{
            allPeople(first:5,after:"${last}") {
                edges {
                cursor
                }
                totalCount
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
    if(loading) return <Loading/>
    if(error) return <Error/>

    const arrayLength = data.allPeople.edges.length
    if(arrayLength>0){
        last = data.allPeople.edges[arrayLength-1].cursor
    }else{
        return ' '
    }

    let filteredData = data.allPeople.people
    return (
        <>
            {filteredData.map(item =>
                <Person key={item.id} name={item.name} specie={item.species? item.species.name : "Human"} homeWorld={item.homeworld.name} idPerson={item.id}/>  
            )}
            <AllPeople key={1} number={number+5} totalNumber={totalNumber} totalIter={totalIter} last={last}/>
            
        </>
    )
}

export default AllPeople
