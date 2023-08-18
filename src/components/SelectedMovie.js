import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Order from "./Order";
import Modal from 'react-modal';

function SelectedMovie({ moviesUrl }) {
    const [selected, setSelected] = useState({})
    const [editOn, setEditOn] = useState(false)
    const [newPrice, setNewPrice] = useState()
    const [ticketQuantity, setTicketQuantity] = useState(0)
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
        const quantity = e.target[0].value
        setTicketQuantity(quantity)
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


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    // Modal Code
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <>
            <div className="ui two column grid container">
                <div className="column">
                    <img className="ui image selected-img" src={selected.image} />
                </div>
                <div className="column">
                    <h1 className="selected-title">{selected.title}</h1>

                    <div>
                        <button id="trailerButton" className="ui mini button" onClick={openModal}>Play Trailer</button>
                        <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={closeModal}
                            contentLabel="Example Modal"
                            style={customStyles}
                        >
                            <iframe width="800" height="500" src={selected.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </Modal>
                    </div>

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
                    <p className="ticket-quantity"><strong>Ticket Quantity: </strong></p>
                    <form className="ui form" onSubmit={(e) => submitOrderForm(e)}>
                        <div className="ui small input">
                            <input type="number" />
                        </div>
                        <div className="order-button-container">
                            <button className="ui black button">Add to Order</button>
                        </div>
                    </form>
                </div>
            </div>
            <Order
                selected={selected}
                ticketQuantity={ticketQuantity}
            />
        </>
    );
}


export default SelectedMovie;