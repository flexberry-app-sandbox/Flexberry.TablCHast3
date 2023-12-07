import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tabl-c-hast3-улица', 'Unit | Model | i-i-s-tabl-c-hast3-улица', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-tabl-c-hast3-город',
    'model:i-i-s-tabl-c-hast3-препод',
    'model:i-i-s-tabl-c-hast3-родитель',
    'model:i-i-s-tabl-c-hast3-улица',
    'model:i-i-s-tabl-c-hast3-ученик',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
