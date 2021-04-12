import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function Table(){

    const baseUrl = "http://localhost:8082/api/"
    const [genders, setGenders] = useState([]);

    useEffect(() => {
        getGeneros();
    }, []);

    const getGeneros = () => {
        axios.get(`${baseUrl}gender`)
        .then(response => {
            setGenders(response.data)
            console.log(response.data)
        })
        .catch(e => {
            console.log("ERROR!!!" + e);
        })
    }

    return(
        <>
            <h1>Generos</h1>
            <table className="table table-dark table-striped">
            <thead>
                <tr>
                <th scope="col">ID Genero</th>
                <th scope="col">Genero</th>
                </tr>
            </thead>
            <tbody>
                {
                    genders.map(item => {
                        <tr key={item.id}>
                            <th scope="row">{item.id}</th>
                            <td>Drama</td>
                        </tr>
                    }
                    )
                }
                
            </tbody>
            </table>
        </>
    );
}