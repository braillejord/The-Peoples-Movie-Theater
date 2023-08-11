import React from "react";
import SingleMovie from "./SingleMovie";
import SelectedMovie from "./SelectedMovie";
import Order from "./Order";

function MainContent() {
    return (
        <>
            <SingleMovie />
            <SelectedMovie />
            <Order />
        </>
    );
}

export default MainContent;