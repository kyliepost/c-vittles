import React, { useState, useEffect } from "react"
import { Link, useHistory, useParams } from 'react-router-dom'
import { getFamilies, deleteFamily } from "./familyManager.js"
import "./familyList.css"

export const FamilyList = (props) => {
    const history = useHistory()
    const [families, setFamilies] = useState([])
    const {userId} = useParams()

    useEffect(() => {
        getFamilies().then(data => setFamilies(data))
    }, [])

    return (
        <article className="families">
            <section className="VIEWFAMILY">
            <h2>VIEW FAMILY</h2>
            {
                families.map(family => {
                    return <section key={`family--${family.id}`} className="family">
                        <Link className="family__name" to={`/${family.id}`}>{family.name}</Link>
                        <button onClick={() => deleteFamily(family.id)}> Delete </button>

                    </section>
                })
            }
            </section>

            

        </article>
    )
}