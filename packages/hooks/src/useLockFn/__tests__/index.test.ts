import { renderHook } from '@testing-library/react-hooks';
import { useRef } from 'react';
import useLockFn from '../index';
import { sleep } from '../../utils/testingHelpers';

describe('useLockFn', () => {
  it('shouled be defined', () => {
    expect(useLockFn).toBeDefined();
  });

  const setUp = () =>
    renderHook(() => {
      const countRef = useRef(0);
      const locked = useLockFn(async (step: number) => {
        countRef.current += step;
        await sleep(50);
      });
      return {
        locked,
        countRef,
      };
    });

  it('test useLockFn', async () => {
    const hook = setUp();
    const { locked, countRef } = hook.result.current;
    locked(1);
    expect(countRef.current).toBe(1);
    locked(2);
    expect(countRef.current).toBe(1);
    await sleep(30);
    locked(3);
    expect(countRef.current).toBe(1);
    await sleep(30);
    expect(countRef.current).toBe(1);
    await sleep(30);
    locked(4);
    expect(countRef.current).toBe(5);
  });
});
