
import { renderHook } from '@testing-library/react-hooks';
import  useUnmount from '../';

describe('useMount', () => {
  // 检查变量是否未定义
  it('should be defined', () => {
    expect(useUnmount).toBeDefined();
  });
  // 函数只调用一次
  it('test useMount', async () => {
    const fn = jest.fn();
    const hook = renderHook(() => useUnmount(fn));
    expect(fn).toBeCalledTimes(0);
    hook.rerender();
    expect(fn).toBeCalledTimes(0);
    hook.unmount();
    expect(fn).toBeCalledTimes(1);
  });
});