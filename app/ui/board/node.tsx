'use client';

import { useRef } from 'react';
import styles from '@/app/ui/board/node.module.css';
import Image from 'next/image';

interface ConspiracyNode {
  top: number;
  left: number;
  title: string;
  image?: string;
}

const conspiracyNode: ConspiracyNode[] = [{
  top: 50,
  left: 60,
  title: 'Pepe',
  // image: String,
}, {
  top: 150,
  left: 160,
  title: 'Silvia',
  // image: String,
}];

export default function Node() {
  const nodeRef = useRef<Map<ConspiracyNode, HTMLDivElement | null>>(null);
  let activeNode: HTMLDivElement | null | undefined;

  function getMap() {
    if (!nodeRef.current) {
      // Initialize the Map on first usage.
      nodeRef.current = new Map();
    }
    return nodeRef.current;
  }

  function elementDrag(e: MouseEvent) {
    e.preventDefault();
    if (activeNode) {
      activeNode.style.setProperty('--top', `${activeNode.offsetTop + e.movementY}px`)
      activeNode.style.setProperty('--left', `${activeNode.offsetLeft + e.movementX}px`)
    }
  }

  

  function dragEnd() {
    if (activeNode) {
      activeNode.style.setProperty('--cursor', 'grab');
      activeNode.removeEventListener('mousemove', elementDrag);
      activeNode.removeEventListener('mouseup', dragEnd);
    }
    
  }

  function click(node: ConspiracyNode) {
    const map = getMap();
    activeNode = map?.get(node);
    if (activeNode) {
      activeNode.style.setProperty('--cursor', 'grabbing');
      activeNode.addEventListener('mousemove', elementDrag, false);
      activeNode.addEventListener('mouseup', dragEnd, false);
    }
  }

  const nodes = conspiracyNode.map((node: ConspiracyNode, index) => {
    return (
      <div
        key={index}
        ref={(n) => {
          const map = getMap();
          map.set(node, n);

          return () => {
            map.delete(node);
          };
        }}
        style={{
          top: 'var(--top)',
          left: 'var(--left)',
          // '--left': `${node.left}px`,
          // '--top': `${node.top}px`,
        }}
        className={styles.node}
        onMouseDown={() => click(conspiracyNode[index])}
      >
        <div className={styles.header}>
          <Image
            src={'/tack.png'}
            className={styles.tack}
            width={50}
            height={50}
            alt="Tack"
          />
        </div>
      </div>
    )
  });

  return (<div>{nodes}</div>);
}
