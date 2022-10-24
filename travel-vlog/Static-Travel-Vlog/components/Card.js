import React from "react"

export default function Card(props)
{
      return(
      <div className = "card">
            <img className="card--image" src={props.content.imageUrl}/>
            <div className="card--text">
                <img className="card--pin" src="../images/pin.jpg" />
                <span className="card--country">{props.content.location} </span>
                <a className="card--link" href={props.content.googleMapsUrl}>View on Google Maps</a>
                <div className="card--title">{props.content.title}</div>
                <div className="card--date">{props.content.startDate} - {props.content.endDate}</div>
                <div className="card--desc">{props.content.description}</div>
            </div>
      </div>
    )
}