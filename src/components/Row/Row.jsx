import React from "react"
import "./row.css"

export default function Row ({children}) {
    return (
    <div className="calculator-row">{children}</div>
    )
}