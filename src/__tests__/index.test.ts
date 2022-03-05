import { decode } from '../index';

describe('Decode HTML encoded strings', function() {
  it('should decode escaped characters', () => {
    const actual = decode("This is a hashtag: &#35;");
    const expected = "This is a hashtag: #";

    expect(actual).toEqual(expected);
  });
});