import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { EmployeesApiService } from '../../../../shared/services/api/employees.api.service';
import { selectEmployees } from '../../../../store/selectors/employees.selector';
import { fetchEmployees } from '../../../../store/actions/employees.action';

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
  $employees = this.store.select(selectEmployees);

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

  constructor(
    private store: Store,
    private employeesService: EmployeesApiService,
  ) {}

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
    this.store.dispatch(fetchEmployees());
  }
}
