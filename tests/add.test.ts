import { expect, it, describe } from 'vitest'
import { add } from '../src/index';

describe('对add函数进行测试', () => {
  it('should return 3 with 1+2', () => {
    expect(add(1, 2)).toBe(3)
  })
  it('should return 0 with 0+0', () => {
    expect(add(0, 0)).toBe(0)
  })
  it('should return 5 with 2+3', () => {
    expect(add(2, 3 as any)).toBe(5)
  })
})