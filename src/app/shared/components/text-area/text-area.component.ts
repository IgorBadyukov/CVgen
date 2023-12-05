import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ResolveErrorMessagePipe } from '../../pipes/resolve-error-message.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { InputCvaDirective } from '../../directives/input-cva.directive';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ResolveErrorMessagePipe,
    TranslateModule,
  ],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextAreaComponent extends InputCvaDirective {
  @Input() label: string = '';
}
