export interface ConspiracyBoard {
  boardId: string;
  name: string;
  user: string;
  nodes: ConspiracyNode[];
}

export interface ConspiracyNode {
  id: string;
  top: string;
  left: string;
  title: string;
  tilt: string;
  image?: string;
}

export interface ConspiracyLinkSkeleton {
  id: string;
  nodeA: ConspiracyNode['id'];
  nodeB: ConspiracyNode['id'];
}

export interface ConspiracyLink {
  id: string;
  nodeA: ConspiracyNode;
  nodeB: ConspiracyNode;
}
