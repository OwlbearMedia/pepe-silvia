import Node from '@/app/ui/board/node';
import styles from '@/app/ui/board.module.css';
import type { ConspiracyBoard } from '@/app/lib/types'
import { fetchConspiracyBoard } from '@/app/lib/api';

export default async function BoardPage() {
  const conspiracyBoard: ConspiracyBoard = await fetchConspiracyBoard(1);
  const nodes = conspiracyBoard.nodes?.map((node) => <Node key={node.id} node={node} />) || [];
  return (
    <div className={styles.board}>
      {nodes}
    </div>
  );
}