import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IEmployee } from '../../interfaces/employee';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { MatButtonModule } from '@angular/material/button';
import { IHeaderTable } from '../../../../shared/interfaces/headerTable';
import { Store } from '@ngrx/store';
import {
  setBreadCrumbs,
  setPageTitle,
} from '../../../../store/actions/route.action';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import {
  EMPLOYEES_BREADCRUMBS,
  EMPLOYEES_PAGE_TITLE,
} from '../../constants/breadcrumbs';

@Component({
  selector: 'app-employees-page',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    MatButtonModule,
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './employees-page.component.html',
  styleUrl: './employees-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesPageComponent implements OnInit {
  public employees: IEmployee[] = [
    {
      id: 1,
      firstName: 'Igor',
      lastName: 'Badyukov',
      email: 'xxx@gmail.com',
      department: {
        id: 1,
        name: 'Forontend',
      },
      specialization: {
        id: 2,
        name: 'Angular',
      },
      departmentId: 1,
      specializationId: 2,
    },
    {
      id: 1,
      firstName: 'Igor',
      lastName: 'Badyukov',
      email: 'xxx@gmail.com',
      department: {
        id: 1,
        name: 'Forontend',
      },
      specialization: {
        id: 2,
        name: 'Angular',
      },
      departmentId: 1,
      specializationId: 2,
    },
  ];

  public column: IHeaderTable[] = [
    {
      field: 'firstName',
      name: 'firstName',
    },
    {
      field: 'lastName',
      name: 'lastName',
    },
    {
      field: 'email',
      name: 'email',
    },
    {
      field: 'department.name',
      name: 'department',
    },
    {
      field: 'specialization.name',
      name: 'specialization',
    },
  ];

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(
      setBreadCrumbs({
        breadcrumbs: [EMPLOYEES_BREADCRUMBS],
      }),
    );
    this.store.dispatch(
      setPageTitle({
        title: EMPLOYEES_PAGE_TITLE,
      }),
    );
  }
}
