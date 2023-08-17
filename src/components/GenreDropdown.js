import React from "react";

function GenreDropdown({ setGenreChoice }) {


    return (
        <>
            <select className="ui dropdown" onChange={(e) => setGenreChoice(e.target.value)}>
                <option value="All">Sort by Genre</option>
                <option value="Comedy">Comedy</option>
                <option value="Thriller/Horror">Thriller/Horror</option>
                <option value="Action/Adventure">Action/Adventure</option>
                <option value="Family">Family</option>
                <option value="Romance">Romance</option>
            </select>
        </>
    )
}


// const SelectedMovie = ({ name, genre }) => (
//     <div className="item-container">
//         <div>
//             <span className="item-label">Name:</span>
//             {name}
//         </div>
//         <div>
//             <span className="item-label">Genre:</span>
//             {genre}
//         </div>
//     </div>
// );

// const App = () => {
//     const [value, setValue] = useState("Horror");

//     const handleChange = (event) => {
//         setValue(event.target.value);
//     };

//     return (
//         <div>
//             <label>
//                 What Movie Genre do you Want to See?
//                 <select value={value} onChange={handleChange} className="ui dropdown">
//                     <option value="Horror">Horror</option>
//                     <option value="Comedy">Comedy</option>
//                     <option value="Family">Family</option>
//                     <option value="Thriller">Thriller</option>
//                     <option value="Romance">Romance</option>
//                 </select>
//             </label>
//             <p>We choose {value}!</p>
//             <SelectedMovie name="Example Movie" genre={value} />
//         </div>
//     );
// };

export default GenreDropdown;
