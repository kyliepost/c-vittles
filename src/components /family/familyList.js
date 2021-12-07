import React, { useState, useEffect } from "react"
import { Link, useHistory } from 'react-router-dom'
import { getFamilies } from "./familyManager.js"
import "./familyList.css"

export const FamilyList = (props) => {
    const history = useHistory()
    const [families, setFamilies] = useState([])

    useEffect(() => {
        getFamilies().then(data => setFamilies(data))
    }, [])

    return (
        <article className="families">
            <section className="JOINFAMILY">
            <h2>JOIN FAMILY</h2>
            {
                families.map(family => {
                    return <section key={`family--${family.id}`} className="family">
                        <Link className="family__name">{family.name}</Link>
                    </section>
                })
            }
            </section>
            <section className="CREATEFAMILY">
            <h2>CREATE NEW FAMILY</h2>
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/" })
                }}
            >Create</button>
            </section>
        </article>
    )
}