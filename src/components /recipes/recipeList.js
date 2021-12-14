import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { Link } from "react-router-dom"
import { getCurrentUser, getFamily, getFamilyBook } from "../family/familyManager"
import { deleteRecipe, getRecipes } from "./recipeManager"

export const RecipeList = () => {
    const [recipes, setRecipes] = useState([])
    const [family, setFamilyBook] = useState([])
    const [currentUser, setCurrentUser] = useState()
    const { familyId } = useParams()

    useEffect(() => {
        getFamilyBook(familyId).then(data => setFamilyBook(data))
    }, [])

    useEffect(() => {
        getRecipes().then(data => setRecipes(data))
        getCurrentUser().then(data => setCurrentUser(data))
    }, [])


    return (
        <>
            <section className="RECIPES">
                <h2>{family.family?.name}</h2>
                <h3>RECIPES</h3>
                <div>
                    <h4> {family.recipe?.name}</h4>
                    <p>{family.recipe?.ingredients}</p>
                    <p>{family.recipe?.description}</p>
                    <p>{family.recipe?.tags}</p>

                </div>
                {
                    recipes.map(recipe => {
                        return <section key={`recipe--${recipe.id}`} className="recipe">
                            <Link className="recipe__name" to={`/${recipe.id}`}>{recipe.name}</Link>
                            {recipe.user == currentUser?.id
                                ?
                                <button onClick={() => deleteRecipe(recipe.id)}> Delete </button>
                                : null
                            }

                        </section>
                    })
                }
            </section>
        </>
    )
}