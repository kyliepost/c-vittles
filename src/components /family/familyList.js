import React, { useState, useEffect } from "react"
import { Link, useHistory, useParams } from 'react-router-dom'
import { getFamilies, deleteFamily, getCurrentUser } from "./familyManager.js"
import "./familyList.css"

export const FamilyList = () => {
    const history = useHistory()
    const [families, setFamilies] = useState([])
    const [currentUser, setCurrentUser] = useState()


    useEffect(() => {
        getFamilies().then(data => setFamilies(data))
        getCurrentUser().then(data => setCurrentUser(data))
    }, [])


    return (
        <article className="families">
            <section className="VIEWFAMILY">
            <h2>VIEW FAMILY</h2>
            {
                families.map(family => {
                    return <section key={`family--${family.id}`} className="family">
                        <Link className="family__name" to={`/${family.id}`}>{family.name}</Link>

                        { family.user.id == currentUser?.id
                        ?
                        <button onClick={() => deleteFamily(family.id)}> Delete </button>
                        : null
                    }
                    </section>
                })
            }
            </section>

            

        </article>
    )
}