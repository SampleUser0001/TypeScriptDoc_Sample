import { Animal } from './Animal'
import { Feline } from './Feline'

/**
 * Catクラス。AnimalとFelineを実装する。
 */
class Cat implements Animal, Feline {
  name = 'Mochimaru'
  eat(food: string) {
    console.log('Ate some', food, 'Mmm!')
  }
  sleep(hours: number) {
    console.log('Slept for', hours, 'hours')
  }
  meow() {
    console.log('Meow')
  }
}

export { Cat }