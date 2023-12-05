import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ResolveErrorMessagePipe } from '../../pipes/resolve-error-message.pipe';
import { TranslateModule } from '@ngx-translate/core';
import { InputCvaDirective } from '../../directives/input-cva.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    ResolveErrorMessagePipe,
    TranslateModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent extends InputCvaDirective implements OnInit {
  @Input() label: string = '';

  @Input() type: string = '';

  public hide: boolean;

  override ngOnInit() {
    super.ngOnInit();
    this.hide = this.type === 'password';
  }
}
