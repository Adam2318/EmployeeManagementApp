import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {
  employee: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    position: ''
  }

  errorMessage: string = "";

  constructor(private employeeService: EmployeeService, private router: Router) {}

  onSubmit(): void {
    this.employeeService.createEmployee(this.employee)
      .subscribe({
        next: (response) => {
          this.router.navigate(['/'])
        },
        error: (err) => {
          this.errorMessage = `Error occured : ${err.status}`;
        }
      });
  }
}
