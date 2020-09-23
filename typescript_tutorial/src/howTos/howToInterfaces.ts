/* INTERFACE */

interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

// const me: isPerson = {}; // not working, interface enforces a structure in an object without a constructor
const me: isPerson = {
  name: 'Ella',
  age: 60,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent £'+ amount +'.');
    return amount;
  }
}

const greetPerson = (person: isPerson) => {
  console.log('hello', person.name);
}

greetPerson(me);