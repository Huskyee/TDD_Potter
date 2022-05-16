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
    expect(potter.price).toBe(24);
  });

  test('buy two different books', () => {
    potter.buy([0, 1]);
    expect(potter.price).toBe(15.2);
  });

  test('buy three different books', () => {
    potter.buy([1, 2, 4]);
    expect(potter.price).toBe(21.6);
  });

  test('buy four different books', () => {
    potter.buy([1, 2, 3, 4]);
    expect(potter.price).toBe(25.6);
  });
});
