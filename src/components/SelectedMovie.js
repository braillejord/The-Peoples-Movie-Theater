import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SelectedMovie({ moviesUrl, ticketOrder, setTicketOrder }) {
    const [selected, setSelected] = useState({})
    const [editOn, setEditOn] = useState(false)
    const [newPrice, setNewPrice] = useState()
    const { id } = useParams()

    function fetchMovie() {
        fetch(moviesUrl + "/" + id)
            .then(r => r.json())
            .then(movieDetails => setSelected(movieDetails))
    }

    useEffect(() => {
        fetchMovie()
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

    function handlePriceChange(e) {

        fetch(moviesUrl + '/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }, body: JSON.stringify({
                ticketPrice: parseFloat(newPrice)
            })
        })
            .then(fetchMovie)
            .then(setEditOn(!editOn))
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
                    {editOn
                        ?
                        <p>
                            <label><strong>New Price: </strong></label>
                            <div className="ui labeled input">
                                <label for="amount" className="ui label">$</label>
                                <input type="number" step="0.01" onChange={(e) => setNewPrice(e.target.value)} />
                            </div>
                            <br />
                            <button className="ui mini labeled button" onClick={(e) => handlePriceChange(e)}>Submit Price</button>
                        </p>
                        :
                        <p>
                            <strong>Ticket Price: </strong>${selected.ticketPrice}
                            <br />
                            <button className="ui mini labeled button" onClick={() => setEditOn(!editOn)}>Edit Price</button>
                        </p>
                    }
                    <label><strong>Ticket Quantity: </strong></label>
                    <form className="ui form" onSubmit={(e) => submitOrderForm(e)}>
                        <div className="ui small input">
                            <input type="number" />
                        </div>
                        <div className="order-button-container">
                            <button className="ui button">Add to Order 🎥</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}


export default SelectedMovie;