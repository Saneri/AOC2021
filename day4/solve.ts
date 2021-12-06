import { readFileSync } from 'fs';
import { join } from 'path';

type Bingo = { bingoNumbers: number[]; bingoBoards: number[][][] };

const parseInput = (filename: string): Bingo => {
  const data = readFileSync(filename, 'utf8').split('\r\n');

  const parseBoards = (index: number, boards: number[][][]): number[][][] => {
    let bingoBoard: number[][] = [];
    for (let i = index; i < index + 5; i++) {
      bingoBoard.push(data[i].split(' ').map(Number));
    }
    if (data[index + 6] === undefined) return [...boards, bingoBoard];
    return parseBoards(index + 6, [...boards, bingoBoard]);
  };

  return {
    bingoNumbers: data[0].split(',').map(Number),
    bingoBoards: parseBoards(2, [])
  };
};

const solve4 = (bingoData: Bingo): number => {
  return -99;
};

const bingoData = parseInput(join(__dirname, 'input.txt'));
console.log(solve4(bingoData));
