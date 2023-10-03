import React from 'react';

function Card({ imag, title, desc }) {
    return (
        <div className="card">
            <h1>{title}</h1>
            <img src={imag} alt="" />
            <p>{desc}</p>
            <button onClick={() => onDelete(Card.id)}>Eliminar</button>
            <button onClick={() => LikesCont(Card.id)}>Like</button>
        </div>
    );
}

export default Card;