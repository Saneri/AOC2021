import { readFileSync } from 'fs';
import { join } from 'path';

const main = (data: Array<number>): void => {
  const increaseAmount = data.reduce(
    (previous, current, index, arr): number => {
      if (arr[index] > arr[index - 1]) {
        return previous + 1;
      }

      return previous;
    },
    0
  );
};

const data = readFileSync(join(__dirname, 'input.txt'), 'utf8')
  .split('\n')
  .map(Number);

main(data);
