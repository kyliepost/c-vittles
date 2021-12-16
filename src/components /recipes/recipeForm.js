import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { createRecipe, getRecipe, getTags, updateRecipe } from "./recipeManager"



export const RecipeForm = () => {
    const history = useHistory()
    const { familyId } = useParams()
    const { recipeId } = useParams()
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: "",
        description: "",
        tags: 0,
        family: familyId
    })
    const [tags, setTag] = useState([])
    const [family, setState] = useState([])
    const [checkedState, setCheckedState] = React.useState(
        new Array(tags.length).fill(false)
    );
    const editMode = recipeId ? true : false

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

    useEffect(() => {
        if (recipeId) {
            getRecipe(recipeId).then((singleRecipeData) => {
                setRecipe(singleRecipeData)
                const tags = singleRecipeData.tags.map(tag => tag.id)
                setCheckedState(tags)
            })
        }   
    },
        [recipeId])


    const changeRecipeState = (event) => {

        const newRecipe = Object.assign({}, recipe)
        newRecipe[event.target.name] = event.target.value   
        setRecipe(newRecipe)  
    }

    // const constructNewRecipe = () => {
    //     if (editMode) {
    //         updateRecipe(recipe)
    //             .then(() => history.push(`/${family.id}/recipes`))
    //     } else {
    //         createRecipe(recipe)
    //             .then(() => history.push(`/${family.id}/recipes`))
    //     }

    // }

        return (
            <>
                <section className="CREATERECIPE">
                <h2 className="gameForm__title">{editMode ? "Update Recipe" : "Create New Recipe"}</h2>

                    <form>
                        <fieldset>
                            <label htmlFor="inputName"> Name: </label>
                            <input
                                required autoFocus
                                name="name"
                                type="text"
                                className="form-control"
                                placeholder="name text"
                                value={recipe.name}
                                onChange={changeRecipeState}
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
                                value={recipe.ingredients}
                                onChange={changeRecipeState}
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
                                value={recipe.description}
                                onChange={changeRecipeState}
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
                                                    checked={checkedState.includes(id)}
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
                            if (recipeId) {
                                updateRecipe(newRecipe, recipeId)
                                    .then(() => history.goBack())
                            } else {
                        
                            createRecipe(newRecipe)
                                .then(() => history.push(`/${familyId}/recipes`))
                                
                                // evt.preventDefault()
                                // constructNewRecipe()
                            }
                        }}
                            className="formButtons" >
                            Save Recipe
                        </button>

                    </form>
                </section>
            </>
        )
    }
