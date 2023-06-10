import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subject, catchError, concat, debounceTime, distinctUntilChanged, map, of, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-search-drop-down',
  templateUrl: './search-drop-down.component.html',
  styleUrls: ['./search-drop-down.component.scss']
})
export class SearchDropDownComponent implements OnInit {
  @Output() selectedItem: EventEmitter<any> = new EventEmitter<any>();
  control: FormControl = new FormControl();
  @Input() placeholder!: string;
  @Input() bindLabel = 'name';
  @Input() bindValue: any;
  @Input() notFoundText: string = '';
  @Input() addTag = false;
  @Input() multiple = true;
  @Input() callbackFunction!: (args: any) => Observable<any>;

  items$!: Observable<any[]>;
  search$ = new Subject<string>();
  loading = false;

  constructor() { }

  ngOnInit() {
    this.items$ = this.getItems();

  }

  getItems() {
    return concat(
      of([]),
      this.search$.pipe(
        debounceTime(300),
        distinctUntilChanged((prev, curr) => prev === curr || curr === null),
        tap(() => { this.loading = true; }),
        switchMap((term: string) => {
          return this.callbackFunction(term).pipe(
            map(res => res.list),
            catchError(() => of([])), // empty list on error
            tap(() => { this.loading = false; })
          );
        }
        )
      )
    );
  }

  emitChanges(event: any) {
    this.selectedItem.emit(event.coord)

  }

}
