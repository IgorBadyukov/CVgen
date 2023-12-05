import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ResolveErrorMessagePipe } from '../../pipes/resolve-error-message.pipe';
import { InputChipsCvaDirective } from '../../directives/input-chips-cva.directive';

@Component({
  selector: 'app-input-chips',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    ResolveErrorMessagePipe,
  ],
  templateUrl: './input-chips.component.html',
  styleUrl: './input-chips.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputChipsComponent extends InputChipsCvaDirective {
  @Input() label: string = '';
}
