import { Component, Input, OnChanges, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating :number = 0;
  @Input() title: string = "";
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  cropWidth: number = 75;

  constructor() { }

  ngOnChanges(): void {
    this.cropWidth = this.rating * 75/5;
  }

  onClick(): void{
    this.notify.emit(this.title);
  }

}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   