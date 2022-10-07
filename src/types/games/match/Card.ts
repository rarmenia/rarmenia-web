export interface ICard {
  // The card's unique identifier.
  id: string;

  // The card's value
  value: number;
  suit: 'hearts' | 'diamonds' | 'clubs' | 'spades';
}

export const createDeck = (): ICard[] => {
  const deck: ICard[] = [];
  const suitNames: ('hearts' | 'diamonds' | 'clubs' | 'spades')[] = [
    'hearts',
    'diamonds',
    'clubs',
    'spades',
  ];

  // for each suit create 13 cards with values 1-13
  for (let suit = 0; suit < 4; suit++) {
    for (let value = 1; value <= 13; value++) {
      deck.push({
        id: `${suit}-${value}`,
        value,
        suit: suitNames[suit],
      });
    }
  }

  return deck;
};

export const shuffleDeck = (deck: ICard[]): ICard[] => {
  // take a copy of the deck and shuffle it by swapping random cards
  const shuffledDeck = [...deck];
  for (let i = 0; i < shuffledDeck.length; i++) {
    const swapIndex = Math.floor(Math.random() * shuffledDeck.length);
    const temp = shuffledDeck[i];
    shuffledDeck[i] = shuffledDeck[swapIndex];
    shuffledDeck[swapIndex] = temp;
  }
  return shuffledDeck;
};
