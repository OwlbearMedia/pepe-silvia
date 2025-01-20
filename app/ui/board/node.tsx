'use client';

import { useRef } from 'react';
import styles from '@/app/ui/board/node.module.css';

export default function Node() {
  const nodeRef = useRef<HTMLDivElement>(null);

  function elementDrag(e: MouseEvent) {
    e.preventDefault();
    if (nodeRef.current) {
      nodeRef.current.style.setProperty('--top', `${nodeRef.current.offsetTop + e.movementY}px`)
      nodeRef.current.style.setProperty('--left', `${nodeRef.current.offsetLeft + e.movementX}px`)
    }
  }

  function dragEnd(e: MouseEvent) {
    if (nodeRef.current) {
      nodeRef.current.style.setProperty('--cursor', 'grab');
    }
    document.removeEventListener('mousemove', elementDrag);
    document.removeEventListener('mouseup', dragEnd);
  }

  function click() {
    if (nodeRef.current) {
      nodeRef.current.style.setProperty('--cursor', 'grabbing');
    }
    document.addEventListener('mousemove', elementDrag, false);
    document.addEventListener('mouseup', dragEnd, false);
  }

  return <div ref={nodeRef} className={styles.node} onMouseDown={click}>Node</div>;
}
