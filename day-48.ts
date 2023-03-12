// https://www.codewars.com/kata/59182a2f40ef95046400003c
export function join(tokens: string | string[], glue?: string): string {
    if(typeof tokens === 'string') {
  tokens = [tokens]
} 
      return tokens.join(glue)
}
