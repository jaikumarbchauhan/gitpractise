import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-demo',
  templateUrl: './event-demo.component.html',
  styleUrls: ['./event-demo.component.css']
})
export class EventDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show(){ alert("Welcome to Angular") }
  trainer() { alert("trainer is Prasanna...") }
}
