import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  город: DS.hasMany('i-i-s-tabl-c-hast3-город', { inverse: 'препод', async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-tabl-c-hast3-препод.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  город: {
    descriptionKey: 'models.i-i-s-tabl-c-hast3-препод.validations.город.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПреподE', 'i-i-s-tabl-c-hast3-препод', {
    фИО: attr('ФИО', { index: 0 }),
    город: hasMany('i-i-s-tabl-c-hast3-город', 'Город', {
      назв: attr('Название', { index: 0 }),
      улица: belongsTo('i-i-s-tabl-c-hast3-улица', 'Улица', {
        назв: attr('Улица', { index: 2 })
      }, { index: 1 })
    })
  });

  modelClass.defineProjection('ПреподL', 'i-i-s-tabl-c-hast3-препод', {
    фИО: attr('ФИО', { index: 0 }),
    город: hasMany('i-i-s-tabl-c-hast3-город', '', {
      улица: belongsTo('i-i-s-tabl-c-hast3-улица', 'Улица', {
        назв: attr('Улица', { index: 0 })
      }, { index: -1, hidden: true })
    })
  });
};
