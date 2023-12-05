import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectBreadCrumbs,
  selectPageTitle,
} from '../../../../store/selectors/route.selector';
import { Observable } from 'rxjs';
import { IBreadCrumbs, IPageTitle } from '../../../../shared/interfaces/route';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { constantBreadcrumbs } from '../../constants/breadcrumbs';

@Component({
  selector: 'app-header-main-page',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './header-main-page.component.html',
  styleUrl: './header-main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderMainPageComponent implements OnInit {
  protected readonly constantBreadcrumbs: IBreadCrumbs[] = constantBreadcrumbs;

  public $breadcrumbs: Observable<IBreadCrumbs[]>;

  public $pageInfo: Observable<IPageTitle>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.$breadcrumbs = this.store.select(selectBreadCrumbs);
    this.$pageInfo = this.store.select(selectPageTitle);
  }
}
