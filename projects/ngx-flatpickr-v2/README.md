# ngx-flatpickr

[![npm version](https://badge.fury.io/js/ngx-flatpickrjs.svg)](https://www.npmjs.com/package/ngx-flatpickrjs)

---

flatpickr for Angular 2+

---

### Exemple:

```HTML
<ngx-flatpickr
  language="french"
  placeholder="Please select a date"
  [options]="options"
  [default]="date"
  (onDateSelect)="setDate($event)"
  (onInit)="initialized($event)"
  >
</ngx-flatpickr>
```

- **language** _(Input)_:  
  _the language of the flatpickr instance_

  All the locales from flatpickr are available, both full country names and codes can be used (Eg: "French" and "fr" both work)

  A full list of all the locales can be seen [in the flatpickr github repository](https://github.com/flatpickr/flatpickr/tree/master/src/l10n)

- **options** _(Input)_:  
  _the placeholder text of the input field_

  All the options available can be seen [on the flatpickr website](https://flatpickr.js.org/options/)

- **onInit** _(Output)_:
  _function launched after the picker is initialized_

  The value returned in `$event` is the flatpickr instance

- **default** _(Input)_:  
  _the default date_

- **onDateSelect** _(Output)_:
  _function launched every time a date is selected_

  The value returned in `$event` is an array containing the selected date(s)

- **placeholder** _(Input)_:  
  _the placeholder text of the input field_

---

**This component also works with FormControl :**

```HTML
<ngx-flatpickr
  placeholder="Please select a date"
  [formControl]="date"
  >
</ngx-flatpickr>
```

```JS
this.date = new FormControl(new Date(), Validators.required)
```
