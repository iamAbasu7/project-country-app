import React from 'react'

export const Country = (props) => {
    const {country} = props;
    const {name,flags,capital,population,area} = country
    const handelRemoveCountry = (name) => {
        alert(name)
    }
    return (
        <div>
            <div>
            <div class="card" style={{width: "18rem"}}>
            <img src={flags.png} class="card-img-top" alt={name.common}/>
                <div class="card-body">
                    <h5 class="card-title">Name:{name.common}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Population:{population}</li>
                    <li class="list-group-item">Capital:{capital}</li>
                    <li class="list-group-item">Area:{area}</li>
                </ul>
                
            </div>
            </div>
            <button onClick={()=>{
                handelRemoveCountry(name.common)
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
            </button>
            
        </div>
    )
}
