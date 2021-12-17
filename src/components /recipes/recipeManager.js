export const getRecipes = (familyId) => {
    return fetch(`https://vittles-s.herokuapp.com/recipes/${familyId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        }
    })
        .then(response => response.json())
}

export const getRecipe = (recipeId) => {
    return fetch(`https://vittles-s.herokuapp.com/recipes/${recipeId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        }
    })
        .then(res => res.json())
}

export const createRecipe = (recipe) => {
    return fetch("https://vittles-s.herokuapp.com/recipes", {
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
    return fetch(`https://vittles-s.herokuapp.com/recipes/${recipeId}`,
            {   
                method: "DELETE",
                headers: {
                    "Authorization": `Token ${localStorage.getItem("v_token")}`,
                    "Content-Type": "application/json"
                }
            }
        )
        .then(() => {
            window.location.reload(false);
        })
}
export const updateRecipe = (recipe, recipeId) => {
    return fetch(`https://vittles-s.herokuapp.com/recipes/${recipeId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("v_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(recipe)
    })
}

export const getRecipeTags = () => {
    return fetch("https://vittles-s.herokuapp.com/recipeTags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        }
    })
        .then(response => response.json())
}

export const getTags = () => {
    return fetch("https://vittles-s.herokuapp.com/tags", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        }
    })
        .then(response => response.json())
}

