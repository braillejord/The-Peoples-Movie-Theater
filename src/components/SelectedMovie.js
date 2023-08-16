import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SelectedMovie({ moviesUrl, ticketOrder, setTicketOrder }) {
    const [selected, setSelected] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(moviesUrl + "/" + id)
            .then(r => r.json())
            .then(movieDetails => setSelected(movieDetails))
    }, [])

    function submitOrderForm(e) {
        e.preventDefault();
        const ticketQuantity = e.target[0].value
        const newTickets = {
            title: parseInt(id),
            quantity: parseInt(ticketQuantity)
        }
        setTicketOrder([...ticketOrder, newTickets])
        e.target.reset()
    }

    return (
        <>
            <div className="ui two column grid container">
                <div className="column">
                    <img className="ui image" src={selected.image} />
                </div>
                <div className="column">
                    <h1>{selected.title}</h1>
                    <p>{selected.description}</p>
                    <p><strong>Rating: </strong>{selected.rating}</p>
                    {selected.genre
                        ? <p><strong>Genre: </strong>{selected.genre}</p>
                        : <p><strong>Genre: </strong></p>
                    }
                    <p><strong>Ticket Price: </strong>${selected.ticketPrice}</p>
                    <label><strong>Ticket Quantity: </strong></label>
                    <form className="ui form" onSubmit={(e) => submitOrderForm(e)}>
                        <div className="ui small input">
                            <input type="number" />
                        </div>
                        <div className="order-button-container">
                            <button className="ui labeled icon button">
                                <i className="plus icon"></i>
                                Add to Order
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}


export default SelectedMovie;