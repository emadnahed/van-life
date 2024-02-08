import React from 'react'
import { Outlet } from "react-router-dom"
import Header from './Header'

// This helps to share the UI as we have nested multiple routes.

export default function Layout(){
    return (
        <>
        <Header/>
        <Outlet/>
        </>
    )
}
