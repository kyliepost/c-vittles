import React from "react";
import { Route } from "react-router-dom"; 
import { FamilyList } from "./family/familyList";

export const ApplicationViews = () => {
    return (
    <>
        <Route exact path="/">
                <FamilyList />
        </Route>
    </>

    )
}