import React from 'react'
import { ICard } from '../../../../../types/games/match/card';
import { createInitialGameState, IGameState } from '../../../../../types/games/match/GameState'
import Card from './Card';

type Props = {
  requiredMatches: number;
}

const Game = (props: Props) => {

  const [state, setState] = React.useState<IGameState>(createInitialGameState(props.requiredMatches));

  const handleCardClick = (card: ICard) => {

    let activeCards = state.activeCards;
    const matches = state.matches;
    if (activeCards.length >= 2) {
      activeCards = [];
    }

    if (activeCards.length === 0) {
      activeCards.push(card)
    } else if (activeCards.length === 1) {
      if (activeCards[0].id !== card.id) {
        activeCards.push(card);
      }
    }

    if (activeCards.length === 2) {
      const card1 = activeCards[0];
      const card2 = activeCards[1];
      if (card1.value === card2.value && card1.suit === card2.suit) {
        matches.push(...[card1, card2])
        activeCards = [];
      }
    }

    const isWin = matches.length === props.requiredMatches * 2;

    setState({
      playingCards: state.playingCards,
      activeCards: activeCards,
      matches: matches,
      gameStatus: isWin ? 'won' : 'playing',
      score: state.score
    });

  };

  const getStatus = (card: ICard): 'matched' | 'unmatched' | 'flipped' => {
    // if state.matches includes card return matched
    // if state.activeCards includes card return flipped
    // else return unmatched
    if (state.matches.map(_ => _.id).includes(card.id)) {
      return 'matched';
    }

    if (state.activeCards.map(_ => _.id).includes(card.id)) {
      return 'flipped';
    }

    return 'unmatched';
  };

  const render = () => (
    <>
      <div className="grid grid-cols-4 w-full gap-8">
        {
          state.playingCards.map((card, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <Card card={card} status={getStatus(card)} onClick={handleCardClick} />
            </div>
          ))
        }
      </div>
    </>
  );

  return render();
}

export default Game