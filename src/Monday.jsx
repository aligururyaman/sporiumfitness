import React from 'react'

export const Monday = ({image, title, sets, desc}) => {
  
  return (
    <>
        <div className="card">
          <div className="card-image">
            <figure className="image is-5by4">
              <img src={image} alt="Hareketler"/>
            </figure>
          </div>
        <div className="card-content">
          <div className="media">
            
          <div className="media-content">
            <p className="title is-5">{title}</p>
            <p className="subtitle is-7">{sets}</p>
          </div>
        </div>

        <div className="content title is-6">
          <p>{desc}</p>
          <br/>
          
        </div>
      </div>
    </div>
    </>

)}