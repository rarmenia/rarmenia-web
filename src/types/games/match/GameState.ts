import { createDeck, ICard, shuffleDeck } from './card';

export interface IGameState {
  playingCards: ICard[];
  score: number;

  matches: ICard[];

  gameStatus: 'playing' | 'won' | 'lost';
  activeCards: ICard[];
}

export const createInitialGameState = (requiredMatches: number): IGameState => {
  // make a deck and shuffle it
  const deck = shuffleDeck(createDeck());

  // pick the first requiredMatches from the deck
  const playCards = deck.slice(0, requiredMatches);

  // create a copy of playcards and add them to playcards with a different id
  const playCardsCopy = playCards.map((card) => ({
    ...card,
    id: `${card.id}-1`,
  }));
  playCards.push(...playCardsCopy);

  // shuffle the playcards
  const shuffledPlayCards = shuffleDeck(playCards);

  return {
    playingCards: shuffledPlayCards,
    score: 0,
    matches: [],
    gameStatus: 'playing',
    activeCards: [],
  };
};
