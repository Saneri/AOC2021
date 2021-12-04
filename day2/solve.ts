import { defaultCipherList } from 'constants';
import { readFileSync } from 'fs';
import { join } from 'path';
import { parse } from 'path/posix';

type Location = {
  depth: number;
  horizontal: number;
};

const solve2a = (data: Array<string>): number => {
  const parseCommand = (
    data: Array<string>,
    index: number,
    location: Location
  ): Location => {
    const [command, amountString]: Array<string> = data[index].split(' ');
    const amount: number = +amountString;
    let { depth, horizontal } = location;
    switch (command) {
      case 'forward':
        horizontal += amount;
        break;
      case 'up':
        depth -= amount;
        break;
      case 'down':
        depth += amount;
        break;
    }

    if (index === data.length - 1) return { depth, horizontal };

    return parseCommand(data, index + 1, { depth, horizontal });
  };

  const initialLocation = Object.freeze({ depth: 0, horizontal: 0 });
  const location = parseCommand(data, 0, initialLocation);
  return location.depth * location.horizontal;
};

const data = readFileSync(join(__dirname, 'input.txt'), 'utf8').split('\n');

console.log(solve2a(data));
