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