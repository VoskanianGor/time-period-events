import type ICords from "~interfaces/i-cords";

const placePointsOnCircle = (count: number, circleWidth: number): ICords[] => {
  const radius = circleWidth / 2;

  const angleInterval = (2 * Math.PI) / count;

  const points = [];

  for (let i = 0; i < count; i++) {
    const angle = i * angleInterval;

    const x = Math.round(radius * Math.cos(angle));
    const y = Math.round(radius * Math.sin(angle));

    points.push({ x, y, r: (360 / count) * i });
  }

  return points;
}

export default placePointsOnCircle;