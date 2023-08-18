import React, { useState } from "react";

function Order({ selected, ticketOrder, ticketQuantity }) {

const {title, ticketPrice} = selected

const [sodaSelect, setSodaSelect] = useState('')
const [sodaQty, setSodaQty] = useState(0)
const [popcornQty, setPopcornQty] = useState(0)
const [candySelect, setCandySelect] = useState('')
const [candyQty, setCandyQty] = useState(0)

const handleSodaSelect = (e) => setSodaSelect(e.target.value)
const handleSodaQty = (e) => setSodaQty(e.target.value)
const handlePopcornQty = (e) => setPopcornQty(e.target.value)
const handleCandySelect = (e) => setCandySelect(e.target.value)
const handleCandyQty = (e) => setCandyQty(e.target.value)

const total = ((ticketQuantity*ticketPrice)+(sodaQty*2.5) + (popcornQty*3) + (candyQty*2))

const handleOrderSubmit = (e) => {
    return <div>

    </div>
}

    return (
        <form onSubmit={handleOrderSubmit} class="ui form">
            <div className="ui container">
                <h1>My Order</h1>
                        <div>
                            <h2>Tickets</h2>
                    <h3>Movie: {title}</h3>
                    <h3>Price: ${ticketPrice}</h3>
                    <h3>Qty: {ticketQuantity}</h3>
                        </div>

                        <div>
                            <h2>Concessions</h2>
                    <h3>Popcorn</h3>
                    <h4>Price: $3.00</h4>
                    <h4>Qty: </h4>
                    <div className="ui small input">
                            <input 
                                type="number" 
                                onChange={handlePopcornQty}
                                value={popcornQty}
                                />
                        </div>
                        </div>
                <div>
                    <h3>Candy</h3>
                    <h4>Price: $2.00</h4>
                    <div class="field">
                        <select 
                            name="candy-type" 
                            onChange={handleCandySelect}
                            value={candySelect}>
                            <option value="junior-mints">Junior Mints</option>
                            <option value="whoppers">Whoppers</option>
                            <option value="dots">Dots</option>
                            <option value="twizzlers">Twizzlers</option>
                            <option value="m-and-m">M&M</option>
                            <option value="mike-and-ike">Mike & Ike</option>
                          </select>
                    </div>
                    <h4>Qty: </h4>
                    <div className="ui small input">
                            <input 
                                type="number" 
                                onChange={handleCandyQty}
                                value={candyQty}
                                />
                        </div>
                </div>
                <div>
                    <h3>Soda</h3>
                    <h4>Price: $2.50</h4>

                    <div>
                        <select 
                            name="type" 
                            onChange={handleSodaSelect}
                            value={sodaSelect}>
                            <option value="coca-cola">Coca Cola</option>
                            <option value="root-beer">Root Beer</option>
                            <option value="sprite">Sprite</option>
                            <option value="mountain-dew">Mountain Dew</option>
                            <option value="fanta">Fanta</option>
                            <option value="dr-pepper">Dr Pepper</option>
                          </select>
                        </div>
                        </div>

                    <h4>Qty: </h4>
                    <div className="ui small input">
                            <input 
                                type="number" 
                                onChange={handleSodaQty}
                                value={sodaQty}
                                />
                        </div>
                        <h3>Total: ${total}</h3>
                        <button>Place Order</button>
                </div>
               
        </form>
    );
}

export default Order;