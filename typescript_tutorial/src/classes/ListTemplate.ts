import { HasFormatter } from '../interfaces/HasFormatter.js';

export class ListTemplate {
  constructor(private container:  HTMLUListElement) {}

  // item can be an Invoice or a Payment, thus use the Interface HasFormatter here
  render(item: HasFormatter, heading: string, pos: 'start'|'end') {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    h4.innerText = heading;
    li.append(h4);
    const p = document.createElement('p');
    p.innerText = item.format(); // interface makes sure it has a format() method
    li.append(p);

    if (pos === 'start') {
      this.container.prepend(li);
    } else {
      this.container.append(li);
    }
  }
}