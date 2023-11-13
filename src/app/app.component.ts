import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-lab-3';

  list: User[] = [
    {
      firstname: 'Luka',
      lastname: 'Budagovi',
      gender: 'Male',
      address: {
        country: 'Georgia',
        city: 'Tbilis',
        street: 'Aghmashenebeli',
      },
      mobileNum: '514-14-14-14',
      dob: new Date('2002-07-27'),
      position: 'JR. Angular Developer',
      subscription: false,
      email: []
    }
  ];

  pushList = (newUser: User) => {
    this.list.push(newUser);
  }
}
