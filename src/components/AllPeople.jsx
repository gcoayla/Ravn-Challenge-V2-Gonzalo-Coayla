import React from 'react'
import Person from './Person'
import { useQuery, gql } from '@apollo/client';
import Loading from './Loading';
import Error from './Error'

const AllPeople = ({number, totalNumber, totalIter}) => {
    
    let allPeopleQuery = gql`
        query{
            allPeople(first:${number}) {
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
    
    totalNumber=data.allPeople.totalCount
    totalIter=Math.ceil(data.allPeople.totalCount/5)

    let filteredData = []
    if(number<=totalNumber){
        filteredData = data.allPeople.people.slice(-5)
    }else if(number>totalNumber){
        filteredData = data.allPeople.people.slice(-(5-(number-totalNumber)))
    }
    return (
        <>
            {filteredData.map(item =>
                <Person key={item.id} name={item.name} specie={item.species? item.species.name : "Human"} homeWorld={item.homeworld.name} idPerson={item.id}/>  
            )}
            {number<totalIter*5 ? 
            <AllPeople key={number} number={number+5} totalNumber={totalNumber} totalIter={totalIter}/> : ''}
            
        </>
    )
}

export default AllPeople
