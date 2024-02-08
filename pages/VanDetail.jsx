import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
    // storing an id where the customer has routed. 
    const params = useParams()
    const [van, setVan] = React.useState(null)

    // Fetch request to get van details when the component mounts
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])
    
    
    // Rendering conditionally if the  data is loaded or not. If it's null then render a loading message else display the information    
    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}