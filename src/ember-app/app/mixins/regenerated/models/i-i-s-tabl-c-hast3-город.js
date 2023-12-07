import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  назв: DS.attr('string'),
  препод: DS.belongsTo('i-i-s-tabl-c-hast3-препод', { inverse: 'город', async: false })
});

export let ValidationRules = {
  назв: {
    descriptionKey: 'models.i-i-s-tabl-c-hast3-город.validations.назв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  препод: {
    descriptionKey: 'models.i-i-s-tabl-c-hast3-город.validations.препод.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГородE', 'i-i-s-tabl-c-hast3-город', {
    назв: attr('Название', { index: 0 })
  });
};
