import { defaultOperators, toFullOption } from 'react-querybuilder/debug';
// import { musicalInstruments } from './musicalInstruments';

// Basic validator function (returns true if value exists)
export const validator = (r) => !!r.value;

export const fieldsss = [
  {
    name: 'firstName',
    label: 'First Name',
    placeholder: 'Enter first name',
    validator,
  },
  {
    name: 'lastName',
    label: 'Last Name',
    placeholder: 'Enter last name',
    defaultOperator: 'beginsWith',
    validator,
  },
  {
    name: 'age',
    label: 'Age',
    inputType: 'number',
    validator,
  },
  {
    name: 'isMusician',
    label: 'Is a musician',
    valueEditorType: 'checkbox',
    operators: defaultOperators.filter((op) => op.name === '='),
    defaultValue: false,
  },
//   {
//     name: 'instrument',
//     label: 'Primary instrument',
//     valueEditorType: 'select',
//     values: musicalInstruments,
//     // defaultValue: 'Cowbell', // Uncomment if needed
//     operators: defaultOperators.filter((op) => op.name === '='),
//   },
//   {
//     name: 'alsoPlays',
//     label: 'Also plays',
//     valueEditorType: 'multiselect',
//     values: musicalInstruments,
//     defaultValue: 'More cowbell',
//     operators: defaultOperators.filter((op) => op.name === 'in'),
//   },
  {
    name: 'tourStops',
    label: 'Tour stops',
    matchModes: true,
    subproperties: [
      { name: 'city', label: 'City' },
      { name: 'state', label: 'State/Province' },
      { name: 'venue', label: 'Venue' },
      { name: 'date', label: 'Date', inputType: 'date', datatype: 'date' },
      { name: 'country', label: 'Country' },
    ],
  },
  {
    name: 'gender',
    label: 'Gender',
    operators: defaultOperators.filter((op) => op.name === '='),
    valueEditorType: 'radio',
    values: [
      { name: 'M', label: 'Male' },
      { name: 'F', label: 'Female' },
      { name: 'O', label: 'Other' },
    ],
  },
  { name: 'height', label: 'Height', validator },
  { name: 'job', label: 'Job', validator },
  {
    name: 'description',
    label: 'Description',
    valueEditorType: 'textarea',
  },
  {
    name: 'birthdate',
    label: 'Birth Date',
    inputType: 'date',
    datatype: 'date',
  },
  {
    name: 'datetime',
    label: 'Show Time',
    inputType: 'datetime-local',
    datatype: 'timestamp with time zone',
  },
  { name: 'alarm', label: 'Daily Alarm', inputType: 'time' },
  { name: 'bign', label: 'Big Int', inputType: 'bigint' },
  {
    name: 'groupedField1',
    label: 'Grouped Field 1',
    comparator: 'groupNumber',
    groupNumber: 'group1',
    valueSources: ['field', 'value'],
  },
  {
    name: 'groupedField2',
    label: 'Grouped Field 2',
    comparator: 'groupNumber',
    groupNumber: 'group1',
    valueSources: ['field', 'value'],
  },
  {
    name: 'groupedField3',
    label: 'Grouped Field 3',
    comparator: 'groupNumber',
    groupNumber: 'group1',
    valueSources: ['field', 'value'],
  },
  {
    name: 'groupedField4',
    label: 'Grouped Field 4',
    comparator: 'groupNumber',
    groupNumber: 'group1',
    valueSources: ['field', 'value'],
  },
].map((o) => toFullOption(o));
