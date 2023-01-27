import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css'],
})
export class LabelComponent implements OnInit {
  constructor() {}

  @Input() title: string = '';
  @Input() highlight: string = '';

  public color: string = '';

  ngOnInit(): void {
    this.evaluateColor();
  }

  private evaluateColor(): void {
    if (this.highlight === '') {
      this.color = 'tag';
    }
    if (this.highlight === 'black') {
      this.color = 'tag is-black';
    }
    if (this.highlight === 'dark') {
      this.color = 'tag is-dark';
    }
    if (this.highlight === 'light') {
      this.color = 'tag is-light';
    }
    if (this.highlight === 'white') {
      this.color = 'tag is-white';
    }
    if (this.highlight === 'primary') {
      this.color = 'tag is-primary';
    }
    if (this.highlight === 'link') {
      this.color = 'tag is-link';
    }
    if (this.highlight === 'info') {
      this.color = 'tag is-info';
    }
    if (this.highlight === 'success') {
      this.color = 'tag is-success';
    }
    if (this.highlight === 'warning') {
      this.color = 'tag is-warning';
    }
    if (this.highlight === 'danger') {
      this.color = 'tag is-danger';
    }
    if (this.highlight === 'primary-light') {
      this.color = 'tag is-primary is-light';
    }
    if (this.highlight === 'link-light') {
      this.color = 'tag is-link is-light';
    }
    if (this.highlight === 'info-light') {
      this.color = 'tag is-info is-light';
    }
    if (this.highlight === 'success-light') {
      this.color = 'tag is-success is-light';
    }
    if (this.highlight === 'warning-light') {
      this.color = 'tag is-warning is-light';
    }
    if (this.highlight === 'danger-light') {
      this.color = 'tag is-danger is-light';
    }
  }
}
