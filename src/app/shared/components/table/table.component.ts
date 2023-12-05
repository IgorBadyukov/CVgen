import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IHeaderTable } from '../../interfaces/headerTable';
import { KeyValuePipe } from '../../pipes/key-value.pipe';
import { SplitArrayPipe } from '../../pipes/split-array.pipe';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    SplitArrayPipe,
    KeyValuePipe,
    TranslateModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<T> implements OnInit {
  @Input() dataTable: T[] = [];

  @Input() headerTable: IHeaderTable[] = [];

  public dataSource: MatTableDataSource<T>;

  public displayedColumns: string[] = [];

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<T>(this.dataTable);
    this.displayedColumns.push(...this.headerTable.map(item => item.name));
  }

  public getRow(data: string) {
    console.log(data);
  }
}
