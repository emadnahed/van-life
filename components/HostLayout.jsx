import React from "react"
import { Link, Outlet } from "react-router-dom"

// Outlet component is used to render the layout inclusive of the shared UI and the other pages we prefer to.

export default function HostLayout(){
    return (
        <>
            <nav className="host-nav">
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}