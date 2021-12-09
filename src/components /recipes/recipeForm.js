import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { createRecipe } from "./recipeManager"



export const RecipeForm = () => {

    const history = useHistory()
    const [recipe, setRecipe] = useState({
        name: "",
        bio: ""
    })


    const handleControlledInputChange = (event) => {

        const newRecipe = Object.assign({}, recipe)    
        newRecipe[event.target.name] = event.target.value        
        setRecipe(newRecipe)                                
    }


    return (
        <>
            <section className="CREATERECIPE">
                <h2>CREATE NEW RECIPE</h2>

            
            <form>
                <fieldset>
                    <label htmlFor="inputName"> Name: </label>
                    <input
                        required autoFocus
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="name text"
                        onChange={handleControlledInputChange}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputBio"> Ingredients: </label>
                    <input
                        required autoFocus
                        name="ingredients"
                        type="text"
                        className="form-control"
                        placeholder="ingredients text"
                        onChange={handleControlledInputChange}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputBio"> Description: </label>
                    <input
                        required autoFocus
                        name="description"
                        type="text"
                        className="form-control"
                        placeholder="recipe text"
                        onChange={handleControlledInputChange}
                    />
                </fieldset>



                    <button onClick={evt => {
                        evt.preventDefault()
                        createRecipe(recipe)
                        .then(() => history.push(`/recipes`))
                    }}
                    className="formButtons" >
                        Create Recipe
                    </button>
                    
            </form>
            </section>
        </>
    )
}
