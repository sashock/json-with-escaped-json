import { Component, OnChanges, Input, ElementRef } from "@angular/core";
import JSONFormatter from "json-formatter-js";

@Component({
  selector: "app-formatter",
  template: '<div id="hostElt" [innerHtml]="html"></div>'
})
export class FormatterComponent implements OnChanges {
  @Input() data: any;
  html: any;
  constructor(private element: ElementRef) {}

  ngOnChanges() {
    const formatter = new JSONFormatter(this.data, Infinity);
    const hostElt = document.getElementById("hostElt");
    const childElements = hostElt.children;
    for (let child of childElements) {
      hostElt.removeChild(child);
    }
    hostElt.appendChild(formatter.render());
  }
}
