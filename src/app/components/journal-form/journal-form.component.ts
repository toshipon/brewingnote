import { Component, OnInit } from '@angular/core';
import { Journal } from '../../models/journal';

@Component({
  selector: 'app-journal-form',
  templateUrl: './journal-form.component.html',
  styleUrls: ['./journal-form.component.css']
})
export class JournalFormComponent implements OnInit {

  model = new Journal();

  methods = [
    {value: 'aeropress', viewValue: 'Aeropress'},
    {value: 'chemex', viewValue: 'Chemex'},
    {value: 'drip', viewValue: 'Drip'},
    {value: 'espresso', viewValue: 'Espresso'},
    {value: 'frenchpress', viewValue: 'Frenchpress'},
    {value: 'mokapot', viewValue: 'Moka pot'},
    {value: 'vacuumpot', viewValue: 'Vaccum pot'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('onSubmit!');
    console.dir(this.model);
  }

}
