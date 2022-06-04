class Department {
    constructor(
        public readonly id: string,
        public name: string,
        // private employees: string[] = []
        protected employees: string[] = []
    ) {}

    describe(this: Department) {
        console.log(`Department: ${this.name}`);
    }

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
    constructor(public id: string, public admins: string[] = []) {
        super(id, "IT");
    }

    addEmployee(member: string) {
        if (this.admins.includes(member)) {
            alert(`관리자는 등록할 수 없습니다. 관리자명: ${member}`);
            return;
        }
        this.employees.push(member);
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

const my = new Department("s2", "max");
const my2 = new ITDepartment("s3", ["맥스", "MAX"]);
my.addEmployee("ysh");
my.addEmployee("jhr");
// my.employees[2] = "ysh2";
my.printEmployees();

console.log(my.name);
my2.printIT();
my2.addEmployee("맥스2");

// const myobj = { name: "wow", describe: my.describe };
// my.describe();
// myobj.describe();
