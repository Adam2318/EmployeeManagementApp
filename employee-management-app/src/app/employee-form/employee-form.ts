import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  isEditing: boolean = false;

  errorMessage: string = "";

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id) {
        this.isEditing = true;

        this.employeeService.getEmployeeById(+id).subscribe({
          next: (result) => {
            Object.assign(this.employee, result);
          },
          error: (err) => console.error('Error loading employee', err)
        });
      }
    });
  }


  onSubmit(): void {
    if (this.isEditing) {
      this.employeeService.editEmployee(this.employee)
        .subscribe({
          next: (response) => {
            this.router.navigate(['/'])
          },
          error: (err) => {
            this.errorMessage = `Error occured during editing: ${err.status}`;
          }
        });
    } else {
      this.employeeService.createEmployee(this.employee)
        .subscribe({
          next: (response) => {
            this.router.navigate(['/'])
          },
          error: (err) => {
            this.errorMessage = `Error occured during creating : ${err.status}`;
          }
        });
    }
  }
}
