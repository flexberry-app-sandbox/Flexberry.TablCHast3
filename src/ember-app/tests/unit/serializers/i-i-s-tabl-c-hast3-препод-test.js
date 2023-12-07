import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tabl-c-hast3-препод', 'Unit | Serializer | i-i-s-tabl-c-hast3-препод', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-tabl-c-hast3-препод',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-tabl-c-hast3-город',
    'model:i-i-s-tabl-c-hast3-препод',
    'model:i-i-s-tabl-c-hast3-работа',
    'model:i-i-s-tabl-c-hast3-родитель',
    'model:i-i-s-tabl-c-hast3-улица',
    'model:i-i-s-tabl-c-hast3-ученик',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
