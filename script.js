class Person {
    constructor(name, age, height) {
      this.name = name;
      this.age = age;
      this.height = height;
    }
  }
  
  let nicolas = new Person("henrique", 27, 1.64);
  console.log(
    `Olá meu nome é ${nicolas.name} eu tenho ${nicolas.age} anos e minha altura é ${nicolas.height}`
  );
  
  class Filho extends Person {
    constructor(name, age, height, filho) {
      super(name, age, height);
      this.filho = filho;
    }
  }
  let cintia = new Job("Rennque", 26, 1.75, "Programador");
  console.log(
    `Olá meu nome é ${cintia.name} eu tenho ${cintia.age} anos e minha altura é ${cintia.height} e sou um ${cintia.job}`
  );