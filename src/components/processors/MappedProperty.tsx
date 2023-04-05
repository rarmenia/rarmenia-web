interface Props {
  active: [number, number];
  target: [number, number];
  current: number;
  children?: (mapped: number) => JSX.Element;
}

const MappedProperty = (props: Props) => {

  const asNormalized = (range: [number, number]): [number, number] => {
    return [Math.min(...range), Math.max(...range)]
  }

  const mapToTarget = (active: [number, number], target: [number, number], current: number): number => {

    const normActive = asNormalized(active);
    const normTarget = asNormalized(target);

    const targetForward = normTarget[0] === target[0];
    const targetDelta = normTarget[1] - normTarget[0];
    const activeDelta = normActive[1] - normActive[0];
    const calcBase = targetForward ? normTarget[0] : normTarget[1];
    const currentDistance = Math.min(Math.max(current, normActive[0]), normActive[1]) - normActive[0];
    const offset = (currentDistance * targetDelta / activeDelta) * (targetForward ? 1 : -1);
    return calcBase + offset;
  }

  return props.children ? props.children(mapToTarget(props.active, props.target, props.current)) : (<></>)
}


export default MappedProperty;
