import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  препод: DS.belongsTo('i-i-s-tabl-c-hast3-препод', { inverse: null, async: false }),
  родитель: DS.hasMany('i-i-s-tabl-c-hast3-родитель', { inverse: 'ученик', async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-tabl-c-hast3-ученик.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  препод: {
    descriptionKey: 'models.i-i-s-tabl-c-hast3-ученик.validations.препод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  родитель: {
    descriptionKey: 'models.i-i-s-tabl-c-hast3-ученик.validations.родитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УченикE', 'i-i-s-tabl-c-hast3-ученик', {
    фИО: attr('ФИО', { index: 0 }),
    препод: belongsTo('i-i-s-tabl-c-hast3-препод', 'Препод', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    родитель: hasMany('i-i-s-tabl-c-hast3-родитель', 'Родитель', {
      фИО: attr('ФИО', { index: 0 })
    })
  });

  modelClass.defineProjection('УченикL', 'i-i-s-tabl-c-hast3-ученик', {
    фИО: attr('ФИО', { index: 0 }),
    препод: belongsTo('i-i-s-tabl-c-hast3-препод', 'ФИО', {
      фИО: attr('ФИО', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
