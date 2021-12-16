import React from "react";
import { Route } from "react-router-dom"; 
import { FamilyForm } from "./family/familyForm";
import { FamilyList } from "./family/familyList";
import { FamilyPage } from "./family/familyPage";
import { RecipeForm } from "./recipes/recipeForm";
import { RecipeList } from "./recipes/recipeList";

export const ApplicationViews = () => {
    return (
    <>
        <Route exact path="/">
                <FamilyList />
        </Route>
        <Route exact path="/">
                <FamilyForm />
            </Route>
        <Route exact path="/:familyId(\d+)">
            <FamilyPage />
        </Route>
        <Route exact path="/:familyId(\d+)/recipes">
            <RecipeList />
            <RecipeForm />
        </Route>
        <Route exact path="/recipes/:recipeId/edit">
            <RecipeForm/>
        </Route>
    </>

    )
}