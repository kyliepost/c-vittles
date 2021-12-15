import React, { useState, useEffect } from "react"
import { Link, useHistory, useParams } from 'react-router-dom'
import { getCurrentUser, getFamilies, getFamily } from "../family/familyManager"
import { deleteRecipe } from "./recipeManager"

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
            <h2>Recipes</h2>
            <p>{family.recipes}</p>
            {/* {
                family.map(family => {
                    return <section key={`family--${family.id}`} className="family">
                        <p className="family__name">{family.recipes}</p> 

                        { family.recipes?.user == currentUser?.id
                        ?
                        <button onClick={() => deleteRecipe(family.recipes?.id)}> Delete </button>
                        : null
                    }
                    </section>
                })
            } */}
            </section>

            

        </article>
    )
}