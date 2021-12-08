import React, { useState, useEffect } from "react"
import { getFamily } from "./familyManager.js"

export const FamilyPage = () => {
    const [family, setFamily] = useState([])


    useEffect(() => {
        getFamily().then(data => setFamily(data))
    }, [])

    return (
        <>
            <article>
                <section>
                    <div>THIS IS THE FAMILY PAGE{family?.name}</div>
                    <p>{family?.bio}</p>
                </section>
            </article>
        </>
    )
}