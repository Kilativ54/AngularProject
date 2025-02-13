import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
})
export class TestComponent {
  title = 'title works!';
  firstName = 'Vitalii';
  lastName = 'Yechkalov!';
  isEnabled = false;

  isActive: boolean = true;
  isDisabled: boolean = false;

  getFullName() {
    return `My namae is ${this.firstName} ${this.lastName}`;
  }
}
