import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { createFamily } from "./familyManager"
import "./familyList.css"


export const FamilyForm = () => {

    const history = useHistory()
    const [family, setState] = useState({
        name: "",
        bio: ""
    })


    const handleControlledInputChange = (event) => {

        const newFamily = Object.assign({}, family)    
        newFamily[event.target.name] = event.target.value        
        setState(newFamily)                                
    }


    return (
        <>
            <section className="CREATEFAMILY">
                <h2>CREATE NEW FAMILY</h2>

            
            <form>
                <fieldset>
                    <label htmlFor="inputName"> </label>
                    <input
                        required autoFocus
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        onChange={handleControlledInputChange}
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputBio"> </label>
                    <input
                        required autoFocus
                        name="bio"
                        type="text"
                        className="form-control"
                        placeholder="Bio"
                        onChange={handleControlledInputChange}
                    />
                </fieldset>



                    <button onClick={evt => {
                        evt.preventDefault()
                        createFamily(family)
                        .then((response) => history.push(`/${response.id}`))
                    }}
                    className="formButtons" >
                        Create
                    </button>
                    
            </form>
            </section>
        </>
    )
}
