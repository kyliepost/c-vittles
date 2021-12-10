import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { Link } from "react-router-dom"
import { getFamilyBook } from "../family/familyManager"
import { deleteRecipe, getRecipes } from "./recipeManager"

export const RecipeList = () => {
    const [recipes, setRecipe] = useState([])
    const [family, setFamilyBook] = useState({})
    const {familyId} = useParams()
    const {userId} = useParams()

    useEffect(() => {
        getFamilyBook(familyId).then(data => setFamilyBook(data))
    }, [])

    useEffect(() => {
        getRecipes().then(data => setRecipe(data))
    }, [])


    return (
        <>
        <section className="RECIPES">
            <h2>{family.name}</h2>
            <h3>RECIPES</h3>
            {
                recipes.map(recipe => {
                    return <section key={`recipe--${recipe.id}`} className="recipe">
                        <Link className="recipe__name" to={`/${recipe.id}`}>{recipe.name}</Link>

                        <button onClick={() => deleteRecipe(recipe.id)}> Delete </button>

                    </section>
                })
            }
            </section>
        </>
    )
}