'use client';

import { useRef } from 'react';
import { Shadows_Into_Light } from 'next/font/google';
import styles from '@/app/ui/board/node.module.css';
import Image from 'next/image';
import type { ConspiracyNode } from '@/app/lib/types';

export const shadowsIntoLight = Shadows_Into_Light({ weight: ['400'] });

export default function Node({ node }: { node: ConspiracyNode }) {
  const nodeRef = useRef<HTMLDivElement | null>(null);

  function elementDrag(e: MouseEvent) {
    e.preventDefault();
    if (nodeRef.current) {
      nodeRef.current.style.setProperty('--top', `${nodeRef.current.offsetTop + e.movementY}px`)
      nodeRef.current.style.setProperty('--left', `${nodeRef.current.offsetLeft + e.movementX}px`)
    }
  }

  function dragEnd() {
    if (nodeRef.current) {
      nodeRef.current.style.setProperty('--cursor', 'grab');
      nodeRef.current.removeEventListener('mousemove', elementDrag);
      nodeRef.current.removeEventListener('mouseup', dragEnd);
    }
  }

  function click() {
    if (nodeRef.current) {
      nodeRef.current.style.setProperty('--cursor', 'grabbing');
      nodeRef.current.addEventListener('mousemove', elementDrag, false);
      nodeRef.current.addEventListener('mouseup', dragEnd, false);
    }
  }

  function NodeImage({ src, title }: { src: string; title: string }) {
    if (src) {
      return (
        <Image
          src={`${src}`}
          width={160}
          height={120}
          alt={`Image of ${title}`}
        />
      );
    }
  }

  return (
    <div
      ref={nodeRef}
      style={{
        top: 'var(--top)',
        left: 'var(--left)',
        transform: `rotate(${node.tilt}deg)`,
        // The style interface doesn't have custom properties,
        // they are valid here though
        // @ts-expect-error:next-line
        '--left': `${node.left}px`,
        '--top': `${node.top}px`,
      }}
      className={styles.node}
      onMouseDown={click}
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
      <div className='body text-center'>
        <div className="my-4 flex justify-center">
          <NodeImage
            src={`${node.image}`}
            title={node.title}
          />
        </div>
        <h2 className={`${shadowsIntoLight.className} antialiased text-2xl my-6`}>{node.title}</h2>
      </div>
    </div>
  )
}
