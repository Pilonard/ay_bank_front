 export  class Credit {
  public annuity: string;
  public capital: string;
  public typeCredit: string ;
  public duration: string;
  public creditState?: string;
  public userId?: string;
  public salary?: string;


  constructor(annuity: string,
              capital: string,
              typeCredit: string,
              duration: string,
              salary?: string,
              creditState?: string) {
    this.annuity = annuity;
    this.capital = capital;
    this.typeCredit = typeCredit;
    this.duration = duration;
    this.salary = salary;
    this.creditState = creditState;
  }

   // set creditState(value: string) {
   //   this._creditState = value;
   // }
 }
