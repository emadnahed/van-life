import React from "react"

// Pending UI

export default function Income() {
    
    React.useEffect(() => {
        document.title = "My Income"
      }, [])

    return (
        <h1>Income goes here</h1>
    )
}