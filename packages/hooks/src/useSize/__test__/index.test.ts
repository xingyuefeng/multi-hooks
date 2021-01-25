
import { renderHook } from '@testing-library/react-hooks';
import  useSize from '../';

describe('useSize', () => {
  // 检查变量是否未定义
  it('should be defined', () => {
    expect(useSize).toBeDefined();
  });
  // 测试宽高
  it('test useSize size', async () => {
    const { result } = renderHook(() => useSize(document.body));
    console.log(result)
    expect(result.current.width).toEqual(0);
    expect(result.current.height).toEqual(0);
  });
});