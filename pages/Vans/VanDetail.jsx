import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { getVans } from "../../api";

export default function VanDetail() {
    // storing an id where the customer has routed.
    const params = useParams();
    const { id } = useParams()
    const [van, setVan] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const location = useLocation();

    

    // Fetch request to get van details when the component mounts
    React.useEffect(() => {
        async function loadVans() {
            setLoading(true);
            try {
                const data = await getVans(id);
                setVan(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        loadVans();
    }, [id]);

    // Rendering conditionally if the  data is loaded or not. If it's null then render a loading message else display the information

    console.log(van)
    const search = location.state?.search || "";

    const type = location.state?.type || "";

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>There was an error: {error.message}</h1>;
    }

    return (
        <div className="van-detail-container">
            <Link to={`..${search}`} relative="path" className="back-button">
                &larr; <span>Back to {type || "all"} vans</span>
            </Link>

            {van && (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price">
                        <span>${van.price}</span>/day
                    </p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            )}
        </div>
    );
}
