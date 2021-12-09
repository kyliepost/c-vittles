import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { getFamilyBook } from "../family/familyManager"
import { getRecipe } from "./recipeManager"

export const RecipeList = () => {
    const [family, setBook] = useState([])
    const {familyId} = useParams()

    useEffect(() => {
        getFamilyBook(familyId).then(data => setBook(data))
    }, [])


    return (
        <>
        <article>
                <section className="">
                    <h2>{family.name}</h2>
                </section>
            </article>
        </>
    )
}