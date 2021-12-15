import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createRecipe, getTags } from "./recipeManager"



export const RecipeForm = () => {
    
    const history = useHistory()
    const { familyId } = useParams()
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: "",
        description: "",
        tags: 0,
        family: familyId
    })
    const [tags, setTag] = useState([])
    const [checkedState, setCheckedState] = React.useState(
        new Array(tags.length).fill(false)
    );

    useEffect(() => {
        getTags().then(data => setTag(data))
        console.log(tags)
    }, [])

    const handleControlledInputChange = (event) => {

        const newRecipe = Object.assign({}, recipe)
        newRecipe[event.target.name] = event.target.value
        setRecipe(newRecipe)
    }

    const handleOnChange = (position) => {
        const copyOfCheckedState = [
            ...checkedState
        ]
        const valued = parseInt(position.target.value)
        if ( checkedState.includes(valued)) {
            copyOfCheckedState.splice(checkedState.indexOf(valued), 1)
        } else {
            copyOfCheckedState.push(valued)
        }

        setCheckedState(copyOfCheckedState);
    }

        return (
            <>
                <section className="CREATERECIPE">
                    <h3>CREATE NEW RECIPE</h3>


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
                        <h3>Choose your tags:</h3>
                        <ul className="tags-list">
                            {tags.map(({ description, id }, index) => {
                                return (
                                    <li key={index}>
                                        <div className="tags-list-item">
                                            <div className="left-section">
                                                <input
                                                    type="checkbox"
                                                    id={`custom-checkbox-${index}`}
                                                    name={description}
                                                    value={id}
                                                    onChange={(event) => handleOnChange(event)}
                                                />
                                                <label htmlFor={`custom-checkbox-${index}`}>{description}</label>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <button onClick={evt => {
                            evt.preventDefault()
                        const newRecipe = {
                                ...recipe, tags: checkedState
                            }
                            createRecipe(newRecipe)
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
