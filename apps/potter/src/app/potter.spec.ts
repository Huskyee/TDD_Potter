import { Potter } from './potter';

describe('Potter', () => {
  let potter: Potter;

  beforeEach(() => {
    potter = new Potter();
  });

  it('should create an instance', () => {
    expect(potter).toBeTruthy();
  });

  test('buy nothing', () => {
    potter.buy([]);
    let ans = errorRemove(0);
    expect(potter.price).toBe(ans);
  });

  test('buy one book', () => {
    potter.buy([0]);
    let ans = errorRemove(8);
    expect(potter.price).toBe(ans);
  });

  test('buy same books', () => {
    potter.buy([0, 0, 0]);
    let ans = errorRemove(8 * 3);
    expect(potter.price).toBe(ans);
  });

  test('buy two different books', () => {
    potter.buy([0, 1]);
    let ans = errorRemove(8 * 2 * 0.95);
    expect(potter.price).toBe(ans);
  });

  test('buy three different books', () => {
    potter.buy([1, 2, 4]);
    let ans = errorRemove(8 * 3 * 0.9);
    expect(potter.price).toBe(ans);
  });

  test('buy four different books', () => {
    potter.buy([1, 2, 3, 4]);
    let ans = errorRemove(8 * 4 * 0.8);
    expect(potter.price).toBe(ans);
  });

  test('buy five different books', () => {
    potter.buy([0, 1, 2, 3, 4]);
    let ans = errorRemove(8 * 5 * 0.75);
    expect(potter.price).toBe(ans);
  });

  test('several discounts 1', () => {
    potter.buy([0, 0, 1, 1, 2, 3]);
    let ans = errorRemove(8 * 4 * 0.8 + 8 * 2 * 0.95);
    expect(potter.price).toBe(ans);
  });

  test('several discounts 2', () => {
    potter.buy([0, 0, 0, 0, 0, 
                1, 1, 1, 1, 1, 
                2, 2, 2, 2, 
                3, 3, 3, 3, 3, 
                4, 4, 4, 4]);
    let ans = errorRemove(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8));
    expect(potter.price).toBe(ans);
  });

  function errorRemove(num: number) {
    return Math.round(num * 100) / 100;
  }
});
