"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins, name) {
        super(name, id);
        this.admins = admins;
    }
    describe() {
        console.log('IT Department ' + this.id);
    }
}
class AccountingDeportment extends Department {
    constructor(id, reports) {
        super("Accounting", id);
        this.reports = reports;
    }
    static createInstance() {
        if (AccountingDeportment.instance) {
            return this.instance;
        }
        this.instance = new AccountingDeportment('A1', []);
        return this.instance;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log('Accounting Department id is - ' + this.id);
    }
}
const it = new ITDepartment("B1", ["Bhanu"], "IT");
const accounts = AccountingDeportment.createInstance();
console.log(it);
it.describe();
it.addEmployee("Bhanu");
it.addEmployee("Prakash");
it.printEmployeeInformation();
accounts.addReport("Everything is going well.....");
accounts.printReports();
accounts.describe();
