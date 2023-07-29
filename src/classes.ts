abstract class Department{
  // name: string
  employees: string[];

  constructor(public name: string, protected id: string){
    this.employees = []
  }

  abstract describe():void;

  addEmployee(employee: string){
    this.employees.push(employee)
  }

  printEmployeeInformation(){
    console.log(this.employees.length)
    console.log(this.employees)
  }

}

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[], name: string){
    super(name, id);
      this.admins = admins
  }
  describe(){
    console.log('IT Department '+ this.id)
  }
}

class AccountingDeportment extends Department{
  private static instance: AccountingDeportment
  private constructor(id: string, private reports: string[]){
    super("Accounting",id);
  }

  static createInstance(){
    if(AccountingDeportment.instance){
      return this.instance
    }
    this.instance = new AccountingDeportment('A1', [])
    return this.instance
  }
  
  addReport(text: string){
    this.reports.push(text)
  }

  printReports(){
    console.log(this.reports)
  }

  describe(): void {
    console.log('Accounting Department id is - '+ this.id)
  }
}

const it = new ITDepartment("B1", ["Bhanu"], "IT")
const accounts = AccountingDeportment.createInstance()
console.log(it)
it.describe()

it.addEmployee("Bhanu")
it.addEmployee("Prakash")

it.printEmployeeInformation()

accounts.addReport("Everything is going well.....")
accounts.printReports()
accounts.describe()