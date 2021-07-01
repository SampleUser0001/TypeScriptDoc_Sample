export { Animal }
/**
 * 動物といえば飯を食う、寝る。
 */
interface Animal {
  readonly name: string
  eat(food: string): void
  sleep(hours: number):void
}

