import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { JournalService } from '../../services/journal.service';
import { Journal } from '../../models/journal';

@Component({
  selector: 'app-journal-form',
  templateUrl: './journal-form.component.html',
  styleUrls: ['./journal-form.component.css'],
  providers: [JournalService]
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

  constructor(
    private router: Router,
    private journalService: JournalService
  ) { }

  ngOnInit() {
  }

  onSubmit(e) {
    e.preventDefault();

    this.journalService.create(this.model)
      .then((res) => {
        console.log(`A journal(${res}) is created!`);
        this.router.navigate(['/journal']);
      })
      .catch((res) => {
        console.log(res);
      });
  }
}
