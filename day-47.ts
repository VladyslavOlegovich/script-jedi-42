// https://www.codewars.com/kata/5916c87540ef95d8e1000007
export function intersect<T extends Object, U extends Object>(first: T, second: U): T & U {
    const result = {} as T & U;
    for (const key in first) {
      if (key in second) {
        result[key as keyof T & keyof U] = first[key as keyof T & keyof U] as (T & U)[keyof T & keyof U];
      }
    }
    return result;
  }
