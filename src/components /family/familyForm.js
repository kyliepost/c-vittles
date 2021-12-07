// import React, { useState, useEffect } from "react"
// import { useHistory, useParams } from "react-router-dom"
// import { createFamily, updateFamily, getFamily } from './FamilyManager.js'
// import { getFamilies } from '../family/FamilyManager.js'


// export const EventForm = () => {
//     const history = useHistory()
//     const [editMode, toggleEditMode] = useState(false)
//     const [currentFamily, setFamily] = useState({})
//     const {familyId} = useParams()
//     const [families, setFamilies] = useState([])

//     const getFamilyToEdit = () => {
//         if (familyId) {
//             toggleEditMode(true)
//             getEvent(familyId)
//                 .then(foundFamily => setFamily({
//                     ...foundFamily,
//                     familyId: foundFamily.family.id,
//                     name: foundFamily.name,
//                     bio: foundFamily.bio}))
//         } else {
//             setFamily({
//                 familyId: 0,
//                 description: "",
//                 name: "",
//                 bio: "",
//             })
//         }
//     }

//     useEffect(() => {
//         getFamilyToEdit()
//     }, {})

//     useEffect(() => {
//         getFamilies().then(data => setFamilies(data))
//     }, [])

//     const handleControlledInputChange = (event) => {
//         const newFamily = Object.assign({}, currentFamily)
//         newFamily[event.target.name] = event.target.value
//         setFamily(newFamily)
//     }

//     return (
//         <form className="familyForm">
//             <h2 className="familyForm__title">
//                 { editMode ? 'Edit Event: ' : 'Schedule New Event: '}</h2>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="familyId">family: </label>
//                     <select name="familyId" className="form-control"
//                         value={ currentFamily?.familyId }
//                         onChange={ handleControlledInputChange }>
//                         <option value="0">Select a family...</option>
//                         {
//                             families.map(family => (
//                                 <option name="familyId" value={family.id}>{family.title}</option>
//                             ))
//                         }
//                     </select>
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="description">Description: </label>
//                     <input type="text" name="description" required autoFocus className="form-control"
//                         value={currentFamily?.description}
//                         onChange={handleControlledInputChange}
//                     />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="date">Event Date: </label>
//                     <input name="date" value={currentFamily?.date} onChange={handleControlledInputChange} type="date" id="date" className="form-control" placeholder="Select a Date" required />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div className="form-group">
//                     <label htmlFor="time">Event Time: </label>
//                     <input name="time" value={currentFamily?.time} onChange={handleControlledInputChange} type="time" id="time" className="form-control" placeholder="Select a Time" required />
//                 </div>
//             </fieldset>

//             <button type="submit"
//                 onClick={evt => {
//                     evt.preventDefault()

//                     const newEvent = {
//                         familyId: parseInt(currentFamily.familyId),
//                         description: currentFamily.description,
//                         date: currentFamily.date,
//                         time: currentFamily.time
//                     }
//                     {
//                         editMode ?
//                             updateEvent(newEvent, familyId)
//                                 .then(() => {history.push('/families')})
//                             : createEvent(newEvent)
//                                 .then(() => history.push("/families"))
//                     }
//                 }}
//                 className="btn btn-primary">Create Family</button>
//         </form>
//     )
// }
