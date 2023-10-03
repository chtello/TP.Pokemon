import { useState } from 'react'
import Card from "./components/cards"
import './App.css'

function App() {
	const [cards, setCards] = useState([
		{
			id: 1,
      title: "Lucario",
			imag:"/P1.png",
      desc:"Es facherisimo",
		},
    {
			id: 2,
			title: "Greninja",
			imag:"/P2.png",
      desc:"Es facherisimo",
		},
    {
			id: 3,
      title: "Pikachu",
			imag:"/P3.png",
			desc:"Es tierno",
		},
    {
			id: 4,
      title: "charizard",
			imag:"/P4.png",
			desc:"Es poderoso",
		},
    {
			id: 5,
      title: "Blastoise",
			imag:"/P5.png",
			desc:"Es pesado",
		},
    {
			id: 6,
      title: "Lunala",
			imag:"/P6.png",
			desc:"Tiene buenos colores",
		},
    {
			id: 7,
      title: "Dusknoir",
			imag:"/P7.png",
			desc:"Es un fantasma",
		},
    {
			id: 8,
      title: "Garchomp",
			imag:"/P8.png",
			desc:"Es imponente",
		},
    {
			id: 9,
      title: "Rayquaza",
			imag:"/P9.png",
			desc:"Es facherisimo",
		},
    {
			id: 10,
      title: "Guzzlord",
			imag:"/P10.png",
			desc:"Es gigante",
		},
  ])

  const deleteCard = (CardId) => {
    setCards(cards.filter((Card) => Card.id !== CardId));
  };
  const LikesCard = (CardId) => {
    setCards(cards.filter((Card) => Card.id !== CardId));
  };

	return (
		<div className="contCard">
			{cards.map((card) => (
				<Card 
					key={card.id}
					imag={card.imag}
					title={card.title}
          desc={card.desc}
          onDelete={deleteCard} 
          LikesCont={LikesCard}
				/> 
			))}
		</div>
	);

};
export default App
