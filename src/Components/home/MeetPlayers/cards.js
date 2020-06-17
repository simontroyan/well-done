import React, { Component } from "react";
import { easePolyOut } from "d3-ease";
import Animate from "react-move/Animate";
import Eugen from "../../../Resources/images/players/homepage_cards/eugen.png";
import Vova from "../../../Resources/images/players/homepage_cards/vova.png";
import Raul from "../../../Resources/images/players/homepage_cards/raul.png";
import Nikita from "../../../Resources/images/players/homepage_cards/nikita.png";
import PlayerCard from "../../ui/playercard";

class HomePlayerCards extends Component {
  state = {
    cards: [
      {
        bottom: 90,
        left: 300,
        name: "Baranovsky",
        lastname: "Nikita",
        number: "10",
        photo: Nikita,
      },
      {
        bottom: 60,
        left: 200,
        name: "Raul",
        lastname: "Galinurov",
        number: "78",
        photo: Raul,
      },
      {
        bottom: 30,
        left: 100,
        name: "Timanov",
        lastname: "Vladimir",
        number: "8",
        photo: Vova,
      },
      {
        bottom: 0,
        left: 0,
        name: "Ievgen",
        lastname: "Kliushnik",
        number: "2",
        photo: Eugen,
      },
    ],
  };

  showAnimatedCards = () =>
    this.state.cards.map((card, i) => (
      <Animate
        key={i}
        show={this.props.show}
        name={this.state.cards.name}
        start={{
          left: 0,
          bottom: 0,
        }}
        enter={{
          left: [card.left],
          bottom: [card.bottom],
          timing: { duration: 500, ease: easePolyOut },
        }}
      >
        {({ left, bottom, name }) => {
          return (
            <div
              style={{
                position: "absolute",
                left,
                bottom,
              }}
            >
              <PlayerCard
                number={card.number}
                name={card.name}
                lastname={card.lastname}
                bck={card.photo}
              />
            </div>
          );
        }}
      </Animate>
    ));

  render() {
    return <div>{this.showAnimatedCards()}</div>;
  }
}

export default HomePlayerCards;
