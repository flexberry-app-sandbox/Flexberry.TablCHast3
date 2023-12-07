import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  возвраст: DS.attr('number'),
  фИО: DS.attr('string'),
  ученик: DS.belongsTo('i-i-s-tabl-c-hast3-ученик', { inverse: 'родитель', async: false })
});

export let ValidationRules = {
  возвраст: {
    descriptionKey: 'models.i-i-s-tabl-c-hast3-родитель.validations.возвраст.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фИО: {
    descriptionKey: 'models.i-i-s-tabl-c-hast3-родитель.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  ученик: {
    descriptionKey: 'models.i-i-s-tabl-c-hast3-родитель.validations.ученик.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РодительE', 'i-i-s-tabl-c-hast3-родитель', {
    фИО: attr('ФИО', { index: 0 }),
    возвраст: attr('Возвраст', { index: 1 })
  });
};
