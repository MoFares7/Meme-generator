import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import "./ProductDetails.css"

export default function ProductsDetails() {
        const [van, setVans] = useState([])
        const params = useParams()
        useEffect(() => {
                fetch(`/api/vans/${params.id}`)
                        .then(response => response.json())
                        .then(data =>
                                setVans(

                                        data.vans))
        }, [params.id])

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