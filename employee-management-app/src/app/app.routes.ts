import { Routes } from '@angular/router';
import { EmployeeTable } from './employee-table/employee-table';
import { EmployeeForm } from './employee-form/employee-form';

export const routes: Routes = [
    {path: '', component: EmployeeTable},
    {path: 'create', component: EmployeeForm},
    {path: 'employees', redirectTo: '', pathMatch: 'full'}
];
