import Node from '@/app/ui/board/node';
import styles from '@/app/ui/board.module.css';
import type { ConspiracyNode } from '@/app/lib/types'
import { fetchConspiracyNodes } from '@/app/lib/api';

export default async function Page() {
  const conspiracyNodes: ConspiracyNode[] = await fetchConspiracyNodes();
  const nodes = conspiracyNodes.map((node) => <Node key={node.id} node={node} />);
  return (
    <div className={styles.board}>
      {nodes}
    </div>
  );
}