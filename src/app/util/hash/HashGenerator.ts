import md5 from 'md5';

export class HashGenerator {
  #index: number = 0;

  generate(salt: string = 'default-salt') {
    const timestamp = new Date().getTime();
    const salted = timestamp + salt + this.#index++;
    return md5(salted);
  }
}
