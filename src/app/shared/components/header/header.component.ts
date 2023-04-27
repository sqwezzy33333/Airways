import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.dateSelectForm);
  }

  dateSelectForm = new FormControl('MM/DD/YYYY');
}
