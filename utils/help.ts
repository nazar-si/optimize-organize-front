export function getNoun(number: number, one: string, two: string, five: string, call=true) {
    let n = Math.abs(number);
    let s = call?number.toString() + " ":""
    n %= 100;
    if (n >= 5 && n <= 20) {
      return s + five;
    }
    n %= 10;
    if (n === 1) {
      return s + one;
    }
    if (n >= 2 && n <= 4) {
      return s + two;
    }
    return s + five;
  }