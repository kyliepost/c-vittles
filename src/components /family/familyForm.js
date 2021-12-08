import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { createFamily, getFamilies } from "./familyManager"


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
                    <label htmlFor="inputBio"> Bio: </label>
                    <input
                        required autoFocus
                        name="bio"
                        type="text"
                        className="form-control"
                        placeholder="bio text"
                        onChange={handleControlledInputChange}
                    />
                </fieldset>



                    <button onClick={evt => {
                        evt.preventDefault()
                        createFamily(family)
                        .then(() => history.push(`/`))
                    }}
                    className="formButtons" >
                        Create
                    </button>
                    
            </form>
            </section>
        </>
    )
}
