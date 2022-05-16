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
    expect(potter.price).toBe(0);
  });

  test('buy one book', () => {
    potter.buy([0]);
    expect(potter.price).toBe(8);
  });

  test('buy same books', () => {
    potter.buy([0, 0, 0]);
    expect(potter.price).toBe(8 * 3);
  });

  test('buy two different books', () => {
    potter.buy([0, 1]);
    expect(potter.price).toBe(8 * 2 * 0.95);
  });

  test('buy three different books', () => {
    potter.buy([1, 2, 4]);
    expect(potter.price).toBe(8 * 3 * 0.9);
  });

  test('buy four different books', () => {
    potter.buy([1, 2, 3, 4]);
    expect(potter.price).toBe(8 * 4 * 0.8);
  });

  test('buy five different books', () => {
    potter.buy([0, 1, 2, 3, 4]);
    expect(potter.price).toBe(8 * 5 * 0.75);
  });

  test('several discounts 1', () => {
    potter.buy([0, 0, 1, 1, 2, 3]);
    expect(potter.price).toBe(8 * 4 * 0.8 + 8 * 2 * 0.95);
  });

  test('several discounts 2', () => {
    potter.buy([0, 0, 0, 0, 0, 
                1, 1, 1, 1, 1, 
                2, 2, 2, 2, 
                3, 3, 3, 3, 3, 
                4, 4, 4, 4]);
    expect(potter.price).toBe(3 * (8 * 5 * 0.75) + 2 * (8 * 4 * 0.8));
  });
});
