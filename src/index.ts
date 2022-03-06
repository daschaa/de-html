import * as characters from './characterMap.json';

export const decode = (text: string) => {
  let outText = text;
  for (const symbol of characters) {
    outText = outText.replace(symbol.Code, symbol.Symbol.toString());
  }
  return outText;
};
