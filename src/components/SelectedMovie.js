import React from "react";
import { useParams } from "react-router-dom";

function SelectedMovie() {


    const { id } = useParams()
    console.log(id)

    return (
        <>
            <h1>Hi</h1>
        </>
    );
}

export default SelectedMovie;