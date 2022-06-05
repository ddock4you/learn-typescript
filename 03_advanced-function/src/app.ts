type admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

// type ElevatedEmployee = admin & Employee;

interface ElevatedEmployee extends admin, Employee {}

const a1: ElevatedEmployee = {
    name: "aaaa",
    privileges: ["aaa"],
    startDate: new Date("2022-02-02"),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Unversal = Combinable & Numeric;

const add = (a: Combinable, b: Combinable) => {
    if (typeof a === "string" || typeof b === "string") {
        // typeguard
        return a.toString() + b.toString();
    }
    return a + b;
};

const result = add("aaa", "bbbb");
// result.split(" ");
console.log(`vvvvv:${result}`);

type UnknownEmployeeInformation = admin | Employee;

const printEmployeeInformation = (emp: UnknownEmployeeInformation) => {
    if ("privileges" in emp) {
        console.log(`privileges: ${emp.privileges}`);
    }

    if ("startDate" in emp) {
        console.log(`startDate: ${emp.startDate}`);
    }
};

printEmployeeInformation(a1);

class Car {
    drive() {
        console.log("Driving...");
    }
}

class Truck {
    drive() {
        console.log("Driving...");
    }
    loadCargo(amount: number) {
        console.log(`Loading cargo... ${amount}`);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (veihicle: Vehicle) => {
    veihicle.drive();
    if (veihicle instanceof Truck) {
        veihicle.loadCargo(1000);
    }
};

useVehicle(v2);

interface Bird {
    type: "bird";
    flyingSpeed: number;
}

interface Horse {
    type: "horse";
    runSpeed: number;
}

type Animal = Bird | Horse;

const bird: Bird = {
    type: "bird",
    flyingSpeed: 1000,
};

const horse: Horse = {
    type: "horse",
    runSpeed: 1800,
};

const AnimalSpeed = (animal: Animal) => {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runSpeed;
            break;
        default:
            break;
    }
    console.log(`${animal.type} speed: ${speed}`);
};

AnimalSpeed(bird);

const pTag = document.querySelector("p") as HTMLElement;
console.log(pTag);

pTag.innerText = "Hi there!";

interface ErrorContainter {
    [prop: string]: string;
}

const form: ErrorContainter = {
    email: "ddd@ddd",
    username: "name",
};

const fetchedUserData = {
    id: "a1",
    name: "Max",
    job: {
        // title: "CEO",
        description: "a",
    },
};

// console.log(fetchedUserData?.job?.title); // 이거 안됨
