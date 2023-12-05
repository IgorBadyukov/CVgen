import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-project-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-project-page.component.html',
  styleUrl: './personal-project-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalProjectPageComponent {}
