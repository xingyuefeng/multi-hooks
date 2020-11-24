
import { renderHook } from '@testing-library/react-hooks';
import useMount from '../index';

describe('useMount', () => {
  // 检查变量是否未定义
  it('should be defined', () => {
    expect(useMount).toBeDefined();
  });
  // 函数只调用一次
  it('test mount', async () => {
    const fn = jest.fn();
    const hook = renderHook(() => useMount(fn));
    expect(fn).toBeCalledTimes(1);
    hook.rerender();
    expect(fn).toBeCalledTimes(1);
    hook.unmount();
    expect(fn).toBeCalledTimes(1);
  });
});