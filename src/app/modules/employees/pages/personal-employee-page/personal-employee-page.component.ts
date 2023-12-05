import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-personal-employee-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personal-employee-page.component.html',
  styleUrl: './personal-employee-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonalEmployeePageComponent {}
