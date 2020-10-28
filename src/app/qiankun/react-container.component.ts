import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '@env/environment';
// qiankun
import { loadMicroApp } from 'qiankun';

@Component({
  selector: 'app-react-container',
  template: `
    <div id="react-container"></div>
  `
})
export class ReactContainerComponent implements OnInit, OnDestroy {

  microApp;

  constructor() { }

  ngOnInit() {
    this.microApp = loadMicroApp(
      {
        name: 'react-app',
        entry: environment.reactAppAddress,
        container: '#react-container',
      }
    );
  }

  ngOnDestroy() {
    if (this.microApp) {
      this.microApp.unmount();
    }
  }
}
