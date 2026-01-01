import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-table',
  imports: [],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.css',
})
export class EmployeeTable {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(){
    this.employeeService.getEmployees().subscribe((data: Employee[]) => {
      this.employees = data;
      console.log(data);
    });
  }

  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe({
      next: (response) => {
        this.employees = this.employees.filter(e => e.id != id);
      },
      error: (err) => {
        console.log('Error deleting employee', err);
      }
    });
  }

}
