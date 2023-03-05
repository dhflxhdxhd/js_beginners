// class는 객체를 만들기 위함. 
// class body : 생성자, 프로토타입 메서드, 정적 메서드
class Person {
    // 인스턴스 생성자
    constructor(name){
        this.name = name;
    }

    // 프로토타입 메서드
    sayHi(){
        console.log("hi");
    }

    // 정적 메서드
    static sayHello() {
        console.log("hello");
    }
}

const me = new Person('Lee');

console.log(me.name);
me.sayHi();
Person.sayHello();