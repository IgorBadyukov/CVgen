import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';
import { ROUTES } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './shared/utils/translateLoader';
import {
  HttpClient,
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideRouterStore } from '@ngrx/router-store';
import { provideEffects } from '@ngrx/effects';
import { routeReducer } from './store/reducers/route.reducer';
import { tokenInterceptor } from './shared/interceptors/token.interceptor';
import { projectsReducer } from './store/reducers/projects.reducer';
import { ProjectsEffect } from './store/effects/projects.effect';
import { employeesReducer } from './store/reducers/employees.reducer';
import { EmployeesEffect } from './store/effects/employees.effect';
import { coreReducer } from './store/reducers/core.reducer';
import { CoreEffect } from './store/effects/core.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(ROUTES, withPreloading(PreloadAllModules)),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(withInterceptors([tokenInterceptor])),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ),
    provideStore({
      route: routeReducer,
      projects: projectsReducer,
      employees: employeesReducer,
      core: coreReducer,
    }),
    provideRouterStore(),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(ProjectsEffect, EmployeesEffect, CoreEffect),
    provideHttpClient(withFetch()),
  ],
};
