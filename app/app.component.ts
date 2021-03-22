import { NullTemplateVisitor } from "@angular/compiler";
import { Component } from "@angular/core";
import _ from "lodash";

const mapKeysDeep = (obj, cb) =>
  _.mapValues(_.mapKeys(obj, cb), val =>
    _.isObject(val) ? mapKeysDeep(val, cb) : val
  );

const mapValuesDeep = (obj, fn) =>
  _.mapValues(obj, (val, key) => {
    if (_.isPlainObject(val)) {
      mapValuesDeep(val, fn);
    } else if (_.isArray(val)) {
      val.forEach(subval => mapValuesDeep(subval, fn));
    } else {
      fn(val, key, obj);
    }
  });

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  myObj;
  jsonInput: string;
  onChange() {
    let parsed = null;
    try {
      parsed = JSON.parse(this.jsonInput);
      mapValuesDeep(parsed, (key, val, obj) => {
        if (obj["key"] && obj["value"] && obj["value"].length > 3) {
          try {
            const nestedParsed = JSON.parse(obj["value"]);

            obj["value"] = nestedParsed;
          } finally {
          }
        }
      });
    } catch (e) {
      console.error("invalid json");
    } finally {
      if (parsed) {
        console.log(parsed);
        this.myObj = parsed;
      }
    }
  }
}
