import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  setBreadCrumbs,
  setPageTitle,
} from '../../../../store/actions/route.action';
import {
  EMPLOYEE_ADD_BREADCRUMBS,
  EMPLOYEE_ADD_PAGE_TITLE,
  EMPLOYEES_BREADCRUMBS,
} from '../../constants/breadcrumbs';

@Component({
  selector: 'app-add-employee-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-employee-page.component.html',
  styleUrl: './add-employee-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEmployeePageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(
      setBreadCrumbs({
        breadcrumbs: [EMPLOYEES_BREADCRUMBS, EMPLOYEE_ADD_BREADCRUMBS],
      }),
    );
    this.store.dispatch(
      setPageTitle({
        title: EMPLOYEE_ADD_PAGE_TITLE,
      }),
    );
  }
}
