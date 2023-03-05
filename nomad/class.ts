// *  abstract(추상클래스)
// 다른 클래스가 상속받을 수 있는 클래스
// 자기가 직접 인스턴스를 생성할 수는 없음

abstract class User {
    constructor(
        protected name: string,
        protected age: number,
        protected nickname: string
    ) {}
    printInfo() {
        console.log({
            nmae: this.name,
            age: this.age,
            nickname: this.nickname,
        });
    }
}

class Player extends User {
    getInfo() {
        return {
            name: this.name,
            age: this.age,
            nickname: this.nickname,
        };
    }
}

const y = new Player("ysh", 34, "ddock4you");

y.printInfo();
y.getInfo();
