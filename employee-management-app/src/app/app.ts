import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { EmployeeTable } from './employee-table/employee-table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeTable, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employee-management-app');
}
