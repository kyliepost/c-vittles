import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { getFamily } from "./familyManager.js"
import "./familyPage.css"

export const FamilyPage = () => {
    const [family, setFamily] = useState([])
    const {familyId} = useParams()
    const history = useHistory()


    useEffect(() => {
        getFamily(familyId).then(data => setFamily(data))
    }, [])

    return (
        <>
            <article>
                <section className="familyInfo">
                    <h2>{family.name}</h2>
                    <h4>{family.bio}</h4>
                </section>

                <section className="familyBook"> 
                <h3>Family Book</h3>
                    <button className="btn-family" onClick={() => history.push(`/${familyId}/recipes`)}>Click To View Your Recipes</button>
                </section>
            </article>
        </>
    )
}