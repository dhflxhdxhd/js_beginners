// class는 객체를 만들기 위함. 
// class body : 생성자, 프로토타입 메서드, 정적 메서드
/*
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
*/

class Person {
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }

    nextYearage(){
        return Number(this.age) + 1;
    }
}

// 상속
/*
class introducePerson extends Person {
    introduce(){
        return `${this.city}에 사는 ${this.name}입니다.`
    }
}

let profile = new introducePerson('a', 19, 'jeju');
console.log(profile);
*/

// super
// 부모가 가지고 있는 생성자, 메서드 호출
class introducePerson extends Person {
    constructor(name,age,city,dream){
        super(name,age,city);
        this.dream = dream;
    }
    
    introduce(){
        return `${this.city}에 사는 ${this.name}입니다. 
                내년에 ${super.nextYearage()}살이 됩니다. 
                장래희망은 ${this.dream}입니다.`
    }
}

let myProfile = new introducePerson('a',24,'jeju','개발자');
console.log(myProfile.introduce());



