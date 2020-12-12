import { ArrayFromPipe } from './array-from.pipe';

describe('ArrayFromPipe', () => {
  it('create an instance', () => {
    const pipe = new ArrayFromPipe();
    expect(pipe).toBeTruthy();
  });
});
