import md5 from 'md5';

export class HashGenerator {
  generate(salt: string = 'default-salt') {
    const timestamp = new Date().getTime();
    const salted = timestamp + salt;
    return md5(salted);
  }
}
