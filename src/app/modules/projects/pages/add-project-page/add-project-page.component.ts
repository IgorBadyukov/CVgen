import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  setBreadCrumbs,
  setPageTitle,
} from '../../../../store/actions/route.action';
import {
  PROJECT_ADD_BREADCRUMBS,
  PROJECT_ADD_PAGE_TITLE,
  PROJECTS_BREADCRUMBS,
} from '../../constants/breadcrumbs';

@Component({
  selector: 'app-add-project-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-project-page.component.html',
  styleUrl: './add-project-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProjectPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(
      setBreadCrumbs({
        breadcrumbs: [PROJECTS_BREADCRUMBS, PROJECT_ADD_BREADCRUMBS],
      }),
    );
    this.store.dispatch(
      setPageTitle({
        title: PROJECT_ADD_PAGE_TITLE,
      }),
    );
  }
}
