import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createFamily, getFamily, updateFamily } from './familyManager.js'


export const FamilyForm = () => {
    const [family, updateFamily] = useState({
        description: ""
    })
    const history = useHistory()



    const saveFamily = (evt) => {
        evt.preventDefault()

        const newFamily = {
            name: family.name,
            bio: family.bio

        }


        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newFamily)
        }

        // return fetch(`http://localhost:8088/`, fetchOption)
        //     .then(() => {
        //         history.push(`/${riverId}`)
                
        //     })
        return useEffect(() => {
                getFamilies().then(data => setFamilies(data))
                .then(() =>{
                    history.push('/')
                })
            }, [])
    }

    return (
        <>
            <form>
                <h2>Create Family</h2>
                <fieldset>
                    <label htmlFor="inputName"> Name: </label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...family }
                                copy.description = evt.target.value
                                updateFamily(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="name"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputName"> Bio: </label>
                    <input
                        onChange={
                            (evt) => {
                                const copy = { ...family }
                                copy.description = evt.target.value
                                updateFamily(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="bio"
                    />
                </fieldset>
                <fieldset>
                    <button onClick={saveFamily} className="btn btn-primary">
                        Create
                    </button>
                </fieldset>
            </form>
        </>
    )
}