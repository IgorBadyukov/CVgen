import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResolveErrorMessagePipe } from '../../pipes/resolve-error-message.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { InputCvaDirective } from '../../directives/input-cva.directive';

@Component({
  selector: 'app-input-date-picker',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    ResolveErrorMessagePipe,
    TranslateModule,
  ],
  templateUrl: './input-date-picker.component.html',
  styleUrl: './input-date-picker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDatePickerComponent
  extends InputCvaDirective
  implements OnChanges
{
  @Input() label: string = '';

  @Input() minDate: string | Date = '';

  @Input() maxDate: string | Date = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['minDate'] && changes['minDate'].currentValue) {
      this.minDate = new Date(this.minDate);
    } else if (changes['maxDate'] && changes['maxDate'].currentValue) {
      this.maxDate = new Date(this.maxDate);
    }
  }
}
