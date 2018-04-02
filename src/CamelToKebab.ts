// https://gist.github.com/nblackburn/875e6ff75bc8ce171c758bf75f304707

export default function camelToKebab(input: string): string {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
