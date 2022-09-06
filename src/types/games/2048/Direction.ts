enum Direction {
  UP,
  RIGHT,
  LEFT,
  DOWN,
}

export function resolveKeyPressToDirection(
  event: KeyboardEvent
): Direction | undefined {
  switch (event.key) {
    case 'ArrowUp':
      return Direction.UP;
    case 'ArrowRight':
      return Direction.RIGHT;
    case 'ArrowDown':
      return Direction.DOWN;
    case 'ArrowLeft':
      return Direction.LEFT;
    default:
      return undefined;
  }
}

export default Direction;
