import React from "react";
import { Route } from "react-router-dom"; 
import { FamilyForm } from "./family/familyForm";
import { FamilyList } from "./family/familyList";

export const ApplicationViews = () => {
    return (
    <>
        <Route exact path="/">
                <FamilyList />
        </Route>
        {/* <Route exact path="/">
                <FamilyForm />
            </Route> */}
        {/* <Route exact path="/:riverId(\d+)">
        <RiverChat />
        </Route> */}
    </>

    )
}