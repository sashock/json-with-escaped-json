import { NullTemplateVisitor } from '@angular/compiler';
import { Component } from '@angular/core';
import _ from 'lodash';

const mapKeysDeep = (obj, cb) =>
  _.mapValues(_.mapKeys(obj, cb), val =>
    _.isObject(val) ? mapKeysDeep(val, cb) : val
  );

const mapValuesDeep = (obj, fn, index:string=null) =>
  _.mapValues(obj, (val, key) => {
    if (_.isPlainObject(val)) {
      mapValuesDeep(val, fn);
    } else if (_.isArray(val)) {
      for (var arrayKey in val) {
      val.forEach(subval => mapValuesDeep(subval, fn, arrayKey));

}
    } else {
      fn(val, key, obj);
    }
  });

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myObj;
  jsonInput: string;
  onChange() {
    let parsed = null;
    try {
      parsed = JSON.parse(this.jsonInput);
      this.jsonInput = '';

        if (
          obj['key'] == 'custom_view_configuration' ||
          obj['key'] == 'custom_dashboard_configuration' ||
          obj['key'] == 'view-hierarchy-configuration'
        ) {
          try {
            const nestedParsed = JSON.parse(obj['value']);
            obj['value'] = nestedParsed;
            console.log(key);
          } finally {
          }
        }
      });
    } catch (e) {
      console.error('invalid json');
    } finally {
      if (parsed) {
        console.log(parsed);
        this.myObj = parsed;
      }
    }
  }
}
