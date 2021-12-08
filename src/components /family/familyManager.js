export const getFamilies = () => {
    return fetch("http://localhost:8000/families", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        }
    })
        .then(response => response.json())
}

export const getFamily = (familyId) => {
    return fetch(`http://localhost:8000/families/${familyId}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("v_token")}`
        }
    })
        .then(res => res.json())
}

export const createFamily = (family) => {
    return fetch("http://localhost:8000/families", {
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
    return fetch(`http://localhost:8000/families/${familyId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${localStorage.getItem("v_token")}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(family)
    })
}

// export const joinFamily = familyId => {
//     return fetch(`http://localhost:8000/families/${ familyId }/join`, {
//         method: "POST",
//         headers:{
//             "Authorization": `Token ${localStorage.getItem("v_token")}`
//         }
//     })
//         .then(response => response.json())
// }
