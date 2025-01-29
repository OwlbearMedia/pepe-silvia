import ConspiracyNode from '@/app/ui/board/ConspiracyNode';
import ConspiracyLink from '../ui/board/ConspiracyLink';
import styles from '@/app/ui/board.module.css';
import type { ConspiracyBoard, ConspiracyLinkSkeleton } from '@/app/lib/types'
import { fetchConspiracyBoard } from '@/app/lib/api';

const conspiracyLinks: ConspiracyLinkSkeleton[] = [
  { id: '1', nodeA: '1', nodeB: '3' },
  { id: '2', nodeA: '2', nodeB: '3' },
];

export default async function Page() {
  const conspiracyBoard: ConspiracyBoard[] = await fetchConspiracyBoard(1);
  const conspiracyNodes = conspiracyBoard[0].nodes || [];
  const nodes = conspiracyNodes.map((node) => <ConspiracyNode key={node.id} node={node} />) || [];

  const links = conspiracyLinks.map((link) => {
    const nodeA = conspiracyNodes.find((node) => node.id === link.nodeA);
    const nodeB = conspiracyNodes.find((node) => node.id === link.nodeB);
    if (nodeA && nodeB) return <ConspiracyLink key={link.id} nodeA={nodeA} nodeB={nodeB} />
    return '';
  }) || [];
  return (
    <div className={styles.board}>
      {links}{nodes}
    </div>
  );
}