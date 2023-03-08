// https://www.codewars.com/kata/5914c6ee51f1d39b5600001c/
export const var1Boolean = true;
export const var2Decimal = 13;
export const var3Hex = 0xf00d;
export const var4Binary = 0b111111;
export const var5Octal = 0o744;
export const var6String = 'Hello, world!';
export const var7Array:[number, string, {a: number}, number, number] = [1, 'test', {a: 3}, 4, 5];
export const var8NumericArray:number[] = [1, 2, 3, 4, 5];
export const var9Tuple: [string, number] = ['key', 12345];
export enum Color {Red = 1, Green = 2, Blue = 4}
export const var10Enum: Color = Color.Blue;
export const var11ArrayOfAny: Array<any> = [1, 'test', {a: 3}, 4, 5];
export function var12VoidFunction():void {}
export const var13Null = null; 
export const var14Undefined = undefined;
export function var15NeverFunction():never {
  throw new Error()
}

// https://www.codewars.com/kata/5916b952e76dc9cbcb000066

export class SuccessServerResult {
  constructor (public httpCode: number, public resultObject:Object) {}
}

export class ErrorServerResult {
  constructor (public httpCode: number, public message:string) {}
}

export function getResult(result: SuccessServerResult | ErrorServerResult) {
  if (result.httpCode === 200) {
    return (<SuccessServerResult> result).resultObject;
  } else {
    return (<ErrorServerResult>result).message;
  }
}
