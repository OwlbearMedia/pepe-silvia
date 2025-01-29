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
