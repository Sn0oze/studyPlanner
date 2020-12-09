import {Component, Input, OnInit} from '@angular/core';
import {Term} from '../../../shared/models';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss']
})
export class TermComponent implements OnInit {
  @Input() term: Term;
  @Input() isLocked = true;
  public listMode = true;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleMode(): void {
    this.listMode = !this.listMode;
  }
}
