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
                    <div>{family.name}</div>
                    <p>{family.bio}</p>
                </section>

                <section className="familyBook">
                    <div>Recipes</div>
                    <button onClick={evt => {
                        evt.preventDefault()
                        .then(() => history.push(`/${family.id}/recipes`))
                    }}
                    className="formButtons" >
                        Click To View
                    </button>
                </section>
            </article>
        </>
    )
}