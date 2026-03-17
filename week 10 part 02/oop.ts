class Employee {
    constructor(
        private _empName: string,
        private _age: number,
        private _empJob: string,
    ) {}

    get empName() {
        return this._empName;
    }

    set empName(val: string) {
        this._empName = val;
    }

    printEmp = (): void => {
        console.log(
            `Name: ${this._empName}, Age: ${this._age}, Job: ${this._empJob}`,
        );
    };
}

let employee1 = new Employee("Kim", 30, "Developer");
employee1.printEmp();
