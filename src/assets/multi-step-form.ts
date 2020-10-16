import { dataComponents } from './data';

const PaymentMethods = [
  {
    name: 'Card',
    value: 'Card',
    type: 'radio',
  },
  {
    name: 'Paypal',
    value: 'Paypal',
    type: 'radio',
  },
  {
    name: 'Cash',
    value: 'Cash',
    type: 'radio',
  },
];

const Date = [
  {
    type: 'radio',
    value: 'Today',
    placeholder: 'Today',
  },
  {
    type: 'radio',
    value: 'Tomorrow',
    placeholder: 'Tomorrow',
  },
  {
    type: 'radio',
    value: 'Other',
    placeholder: 'Other',
  },
];

const DATA_STEP_1 = {
  Goods: {
    type: 'select',
    options: dataComponents,
    validations: { required: true },
    errors: { required: 'This field can not be left blank' },
    placeholder: 'Choose here',
  },
  description: {
    type: 'textarea',
    validations: {},
    errors: {},
    placeholder: 'Your comments',
  },
};

const DATA_STEP_2 = {
  address: {
    type: 'text',
    validations: { required: true },
    errors: { required: 'This field can not be left blank' },
    placeholder: 'Full Address',
  },
  city: {
    type: 'text',
    validations: { required: true },
    errors: { required: 'This field can not be left blank' },
    placeholder: 'City',
  },
  country: {
    type: 'text',
    validations: { required: true },
    errors: { required: 'This field can not be left blank' },
    placeholder: 'Country',
  },
};

const DATA_STEP_3 = {
  PaymentMethod: {
    type: 'select',
    name: 'methods',
    validations: { required: true },
    errors: { required: 'This field can not be left blank' },
    options: PaymentMethods,
    placeholder: 'Choose here',
  },

  CardNumber: {
    type: 'number',
    validations: { pattern: /^\d{16}$/ },
    errors: { pattern: 'Please enter a valid card number' },
    placeholder: 'Card number',
  },
};
const DATA_STEP_4 = {
  DateOfDelivery: {
    type: 'radio',
    name: 'date',
    value: Date,
    validations: {},
    errors: {},
    options: Date,
  },
  ChooseADate: {
    type: 'date',
    validations: {},
    errors: {},
    placeholder: 'Choose date',
  },
};

const STEP_ITEMS = [
  { label: 'Step 1', data: DATA_STEP_1 },
  { label: 'Step 2', data: DATA_STEP_2 },
  { label: 'Step 3', data: DATA_STEP_3 },
  { label: 'Step 4', data: DATA_STEP_4 },
  { label: 'Review & Submit', data: {} },
];

export { STEP_ITEMS };
