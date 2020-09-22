/* CLASSES */
class Invoice { // Rechnung
  // this only works with a constructor!
  // all properties are public by default!
  // access modifiers: public, private, readonly
  readonly client: string;
  private details: string;
  private amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    // this.client = 'Frieda'; // won't work, because of readonly modifier
    return `${this.client} owes £${this.amount} for ${this.details}.`;
  }
}

const invOne = new Invoice('Mario', 'Plumming', 250);
const invTwo = new Invoice('Luigi', 'Website', 300);
const invThree = new Invoice('Yoshi', 'Jumping', 100);
// console.log(invOne.format());
// console.log(invTwo.format());

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.push(invThree);
// console.log(invoices);

invoices.forEach(inv => {
  //console.log(inv.client, inv.details, inv.amount, ':', inv.format()); // can#t log details, because they are private now
  // inv.client = 'Frieda'; // won't work, because of readonly modifier
  console.log(inv.format());
});

/* FASTER (SHORTER) CONSTRUCTION OF A CLASS */

class Payment {
  // this only works, if there are the access modifiers (public, private, readonly)
  constructor(
    readonly client: string,
    private details: string,
    private amount: number
  ) {}

  format() {
    return `${this.client} was payed £${this.amount} for ${this.details}.`;
  }
}

const payOne = new Payment('Anne', 'drinking coffee', 50);
const payTwo = new Payment('Berta', 'having fun', 450);

let payments: Payment[] = [];
payments.push(payOne);
payments.push(payTwo);

payments.forEach(pay => {
  console.log(pay.format());
})

const form = document.querySelector('.new-item-form') as HTMLFormElement; // now TS knows, but for Firefox they look the same ...
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.valueAsNumber
  );
  
})