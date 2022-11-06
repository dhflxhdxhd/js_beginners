// class 이름  -> 파스칼케이스

class Person {}
const Person = class MyClass {};

const Person = class {};

// 클래스 : 함수
// 클래스 몸체에는 0개 이상의 메서드만 정의 -> 종류 : constructor(생성자), 프로토타입 메서드, 정적 메서드

// 클래스 선언문
class Person {
    // constructor : 인스턴스를 생성하고 초기화하기 위한 특수한 메서드
  constructor(name) {
    // 인스턴스 생성 및 초기화
    this.name = name;
  }

  sayHi() {
    console.log(`hi ${this.name}`);
  }

  static sayBye() {
    console.log('bye');
  }
}

// 인스턴스 생성
const me = new Person('Kim');

// 인스턴스의 프로퍼티 참조
console.log(me.name);
// 프로토타입 메서드 호출
me.sayHi();
// 정적 메서드 호출
Person.sayHello();
