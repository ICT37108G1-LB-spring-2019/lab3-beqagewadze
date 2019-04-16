import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  x = [
    {
      name: 'ბექა',
      surname: 'გეწაძე',
      personalNumber: '12345678910'
    },
    {
      name: 'ბექა2',
      surname: 'გეწაძე2',
      personalNumber: '12345678919'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
