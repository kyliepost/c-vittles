export const getFamilies = () => {
    return fetch("https://vittles-s.herokuapp.com/families", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        }
    })
        .then(response => response.json())
}

export const getFamily = (familyId) => {
    return fetch(`https://vittles-s.herokuapp.com/families/${familyId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        }
    })
        .then(res => res.json())
}

export const createFamily = (family) => {
    return fetch("https://vittles-s.herokuapp.com/families", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        },
        body: JSON.stringify(family)
    })
        .then(res => res.json())
}

export const updateFamily = (family, familyId) => {
    return fetch(`https://vittles-s.herokuapp.com/families/${familyId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("v_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(family)
    })
}

export const getFamilyBook = (familyBookId) => {
    return fetch(`https://vittles.herokuapp.com/familyBook/${familyBookId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        }
    })
        .then(res => res.json())
}

export const deleteFamily = (familyId) => {
    return fetch(`https://vittles-s.herokuapp.com/families/${familyId}`,
            {   
                method: "DELETE",
                headers: {
                    "Authorization": `Token ${localStorage.getItem("v_token")}`,
                    "Content-Type": "application/json"
                }
            }
        )
}

export const getCurrentUser = () => {
    return fetch(`https://vittles-s.herokuapp.com/families/getCurrentUser`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        }
    })
        .then(res => res.json())
}

