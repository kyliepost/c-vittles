import React, { useState, useEffect } from "react"
import { Link, useHistory, useParams } from 'react-router-dom'
import { getCurrentUser, getFamilies, getFamily } from "../family/familyManager"
import { deleteRecipe } from "./recipeManager"
import "./recipeList.css"

export const RecipeList = () => {
    const history = useHistory()
    const { familyId } = useParams()
    const [family, setFamily] = useState([])
    const [currentUser, setCurrentUser] = useState()


    useEffect(() => {
        getFamily(familyId).then(data => setFamily(data))
        getCurrentUser().then(data => setCurrentUser(data))
    }, [])


    return (
        <article className="recipes">
            <section className="VIEWRECIPES">
            <h2>{family.name}</h2>
            <h3>Recipes</h3>

            
            {
                family.recipes?.map(family => {
                    return <section key={`family--${family.id}`} className="family">
                        <div className="recipe__card">
                            <p>{family.recipe.name}</p> 
                            <p>{family.recipe.ingredients}</p>
                            <p>{family.recipe.description}</p>
                            <p>{family.recipe.tags}</p>
                            </div>

                        { family.recipe?.user == currentUser?.id
                        ?
                        <button onClick={() => deleteRecipe(family.recipe?.id)}> Delete </button>
                        : null
                    }
                    </section>
                })
            }
            </section>

            

        </article>
    )
}