import { useEffect, useRef } from 'react';
import { BasicTarget, getTargetElement } from '../utils/dom';

const defaultEvent = 'click';

// 鼠标 触摸事件
type EventType = MouseEvent | TouchEvent;

export default function useClickAway(
  onClickAway: (event: EventType) => void,
  target: BasicTarget | BasicTarget[],
  eventName: string = defaultEvent,
) {
  const onClickAwayRef = useRef(onClickAway);
  // 常量 不会随render变化
  onClickAwayRef.current = onClickAway;

  useEffect(() => {
    const eventHandler = (event: any) => {
      const targets = Array.isArray(target) ? target : [target];
      // 当前dom不执行操作
      if (
        targets.some(targetItem => {
          const targetElement = getTargetElement(targetItem) as HTMLElement;
          return !targetElement || targetElement?.contains(event.target);
        })
      ) {
        return;
      }
      onClickAwayRef.current(event);
    };

    document.addEventListener(eventName, eventHandler);

    return () => {
      document.removeEventListener(eventName, eventHandler);
    };
  }, [target, eventName]);
}
