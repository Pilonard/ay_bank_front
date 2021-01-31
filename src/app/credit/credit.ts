 export  class Credit {
  public annuity: string;
  public capital: string;
  public typeCredit: string ;
  public duration: string;
  constructor(annuity: string, capital: string, typeCredit: string, duration: string) {
    this.annuity = annuity;
    this.capital = capital;
    this.typeCredit = typeCredit;
    this.duration = duration;
  }

}
