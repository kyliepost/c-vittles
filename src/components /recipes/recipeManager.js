export const getRecipes = (familyId) => {
    return fetch(`http://localhost:8000/recipes/${familyId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        }
    })
        .then(response => response.json())
}

export const getRecipe = (recipeId) => {
    return fetch(`http://localhost:8000/recipes/${recipeId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        }
    })
        .then(res => res.json())
}

export const createRecipe = (recipe) => {
    return fetch("http://localhost:8000/recipes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        },
        body: JSON.stringify(recipe)
    })
        .then(res => res.json())
}

export const deleteRecipe = (recipeId) => {
    return fetch(`http://localhost:8000/recipes/${recipeId}`,
            {   
                method: "DELETE",
                headers: {
                    "Authorization": `Token ${localStorage.getItem("v_token")}`,
                    "Content-Type": "application/json"
                }
            }
        )
}
export const updateRecipe = (recipe, recipeId) => {
    return fetch(`http://localhost:8000/recipes/${recipeId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("v_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recipe)
    })
}

export const getRecipeTags = () => {
    return fetch("http://localhost:8000/recipeTags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        }
    })
        .then(response => response.json())
}

export const getTags = () => {
    return fetch("http://localhost:8000/tags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        }
    })
        .then(response => response.json())
}

