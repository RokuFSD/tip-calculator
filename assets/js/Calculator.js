class Calculator {
  constructor(bill, tip, numberPeople) {
    this._bill = bill;
    this._tip = tip;
    this._numberPeople = numberPeople;
  }

  set bill(value) {
    this._bill = value;
  }

  set tip(value) {
    this._tip = value;
  }

  set numberPeople(value) {
    this._numberPeople = value;
  }

  evaluateTip() {
    return (this._bill * this._tip) / 100 / this._numberPeople;
  }

  evaluateTotal() {
    return this._bill / this._numberPeople;
  }
}
