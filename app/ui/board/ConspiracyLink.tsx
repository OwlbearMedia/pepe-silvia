import type { ConspiracyNode } from "@/app/lib/types";
import styles from "@/app/ui/board/link.module.css";

export default async function ConspiracyLink(
  { nodeA, nodeB } : { nodeA: ConspiracyNode, nodeB: ConspiracyNode }
) {
  const offset1 = 90;
  const offset2 = 95;

  function connection() {
    const thickness = 4;
    // bottom right
    const x1 = parseInt(nodeA.left, 10) + offset1;
    const y1 = parseInt(nodeA.top, 10) + 10;
    // top right
    const x2 = parseInt(nodeB.left, 10) + offset2;
    const y2 = parseInt(nodeB.top, 10) + 10;
    // distance
    const length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)) - 20;
    // position
    const left = (x1 + x2) / 2 - length / 2;
    const top = (y1 + y2) / 2 - thickness / 2;
    // angle
    const angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);

    return {
      '--height': `${thickness}px`,
      '--left': `${left}px`,
      '--top': `${top}px`,
      '--width': `${length}px`,
      '--rotation': `rotate(${angle}deg)`,
    };
  }
  return (
    <div
      className={styles.connection}
      // The style interface doesn't have custom properties,
      // they are valid here though
      // @ts-expect-error:next-line
      style={connection()}
    />
  );
};