import React from 'react'
import {IdContext} from '../context/IdProvider'
import { useQuery, gql } from '@apollo/client';
import Loading from './Loading';
import Error from './Error'

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Description = () => {

    const {idSelected} = React.useContext(IdContext)

    let personQuery = gql`
        query{
            person(id : "${idSelected}") {
            eyeColor
            hairColor
            skinColor
            birthYear
            starshipConnection{
                starships {
                name
                }
            }
            }
        }
    `;

    const { loading, error, data } = useQuery(personQuery);
    
    if(loading) return <Loading/>
    if(error) return <Error/>
    
    return (
        <div className="description">
            <div className="wrap-description">
                <h2 className="box-sub-title">General Information</h2>
                <div className="box-information">
                    <h2 className="h2-low-emphasis box-left">Eye Color</h2>
                    <h2 className="box-right">{capitalizeFirstLetter(data.person.eyeColor)}</h2>
                </div>
                <div className="box-information">
                    <h2 className="h2-low-emphasis box-left">Hair Color</h2>
                    <h2 className="box-right">{capitalizeFirstLetter(data.person.hairColor)}</h2>
                </div>
                <div className="box-information">
                    <h2 className="h2-low-emphasis box-left">Skin Color</h2>
                    <h2 className="box-right">{capitalizeFirstLetter(data.person.skinColor)}</h2>
                </div>
                <div className="box-information">
                    <h2 className="h2-low-emphasis box-left">Birth Year</h2>
                    <h2 className="box-right">{capitalizeFirstLetter(data.person.birthYear)}</h2>
                </div>
                <h2 className="box-sub-title">Vehicles</h2>
                {data.person.starshipConnection.starships.map(item =>
                    <div className="box-information">
                        <h2 className="h2-low-emphasis box-left">{item.name}</h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Description
