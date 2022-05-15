import { Potter } from './potter';

describe('Potter', () => {
  it('should create an instance', () => {
    expect(new Potter()).toBeTruthy();
  });

  test('buy nothing', () => {
    const potter = new Potter();
    potter.buy([]);
    expect(potter.price).toBe(0);
  });

  test('buy one book', () => {
    const potter = new Potter();
    potter.buy([0]);
    expect(potter.price).toBe(8);
  });
});
