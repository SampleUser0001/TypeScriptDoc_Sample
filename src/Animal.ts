/**
 * 動物といえば飯を食う、寝る。
 */
interface Animal {
  /** 名前 */
  readonly name: string
  /** 飯を食う */
  eat(food: string): void
  /** 寝る */
  sleep(hours: number):void
}

export { Animal }