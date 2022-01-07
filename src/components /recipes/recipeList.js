import React, { useState, useEffect } from "react"
import { Link, useHistory, useParams } from 'react-router-dom'
import { getCurrentUser, getFamilies, getFamily } from "../family/familyManager"
import { deleteRecipe, updateRecipe } from "./recipeManager"
import "./recipeList.css"

export const RecipeList = () => {
    const history = useHistory()
    const { familyId } = useParams()
    const { recipeId } = useParams()

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
                <div className="recipes">

                {
                    family.recipes?.map(family => {
                        return <section key={`family--${family.id}`} className="family">
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <h1>{family.recipe.name}</h1>
                                    </div>
                                    <div class="flip-card-back">
                                        <p>{family.recipe.ingredients}</p>
                                        <p>{family.recipe.description}</p>
                                        <p>{family.recipe.tags}</p>
                                    </div>
                                </div>
                            </div>


                            {family.recipe?.user == currentUser?.id
                                ?
                                <> <button onClick={() => history.push(`/recipes/${family.recipe.id}/edit`)}>Edit</button>
                                    <button onClick={() => deleteRecipe(family.recipe?.id)}> Delete </button>
                                </>
                                : null
                            }

                        </section>
                    })
                }
                </div>
            </section>



        </article>
    )
}

