abstract class Department {
    constructor(
        public readonly id: string,
        public name: string,
        // private employees: string[] = []
        protected employees: string[] = []
    ) {}

    static validation = "test";

    static confirmText(value: string = "") {
        if (!value) throw new Error("값을 입력하세요.");
        console.log(`텍스트 출력: ${value} || ${Department.validation}`);
    }

    abstract describe(this: Department): void;

    addEmployee(member: string) {
        this.employees.push(member);
    }

    printEmployees() {
        console.log({
            id: this.id,
            name: this.name,
            employees: this.employees,
        });
    }
}

class ITDepartment extends Department {
    private leadAdmin: string;

    constructor(public id: string, public admins: string[] = []) {
        super(id, "IT");
        this.leadAdmin = admins[0];
    }

    addEmployee(member: string): boolean | void {
        if (this.admins.includes(member)) {
            alert(`관리자는 등록할 수 없습니다. 관리자명: ${member}`);
            return false;
        }
        this.employees.push(member);
    }

    describe(): void {
        console.log(`ITDepartment: ${this.name}`);
    }

    get confirmLeadAdmin() {
        if (!this.leadAdmin) {
            throw new Error("리드 관리자가 없습니다.");
        }
        return this.leadAdmin;
    }

    set addMessage(message: string) {
        if (!message) throw new Error("메세지를 입력하세요.");
        alert(message);
    }

    printIT() {
        console.log({
            id: this.id,
            name: this.name,
            admins: this.admins,
            employees: this.employees,
        });
    }
}

class salesDepartment extends Department {
    private leadAdmin: string = "";

    constructor(public id: string) {
        super(id, "Sales");
    }

    set addLeadAdmin(name: string) {
        if (!name) throw new Error("입력된 리더관리자가 없습니다.");
        this.leadAdmin = name;
    }

    get confirmLeadAdmin() {
        if (!this.leadAdmin) throw new Error("입력된 리더관리자가 없습니다.");
        return this.leadAdmin;
    }

    describe(): void {
        console.log(`salesDepartment: ${this.name}`);
    }
}

// const my = new Department("s2", "max");
const my2 = new ITDepartment("s3", ["맥스", "MAX"]);
const my3 = new salesDepartment("s4");
// my.addEmployee("ysh");
// my.addEmployee("jhr");
// my.employees[2] = "ysh2";
// my.printEmployees();

// console.log(my.name);
// my2.printIT();
// my2.addEmployee("맥스2");
console.log(my2.confirmLeadAdmin);
// my2.addMessage = "메에세지이";
// const myobj = { name: "wow", describe: my.describe };
// my.describe();
// myobj.describe();

my3.addLeadAdmin = "나여어";
console.log(my3.confirmLeadAdmin);

Department.confirmText("aaaaa");
