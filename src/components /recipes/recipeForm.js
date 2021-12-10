import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createRecipe } from "./recipeManager"



export const RecipeForm = () => {

    const history = useHistory()
    const {familyId} = useParams()
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
                        placeholder="description text"
                        onChange={handleControlledInputChange}
                    />
                </fieldset>
                <select name="langOpt[]" multiple id="langOpt">
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>



                    <button onClick={evt => {
                        evt.preventDefault()
                        createRecipe(recipe)
                        .then(() => history.push(`/${familyId}/recipes`))
                    }}
                    className="formButtons" >
                        Create Recipe
                    </button>
                    
            </form>
            </section>
        </>
    )
}
