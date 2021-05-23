import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css']
})
export class ItComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	this.loadScript('../assets/scripts/Scripts.js');
  }

    public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  
}
