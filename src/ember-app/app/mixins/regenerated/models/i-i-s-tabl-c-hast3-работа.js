import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  назв: DS.attr('string')
});

export let ValidationRules = {
  назв: {
    descriptionKey: 'models.i-i-s-tabl-c-hast3-работа.validations.назв.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РаботаE', 'i-i-s-tabl-c-hast3-работа', {
    назв: attr('Название', { index: 0 })
  });

  modelClass.defineProjection('РаботаL', 'i-i-s-tabl-c-hast3-работа', {
    назв: attr('Название', { index: 0 })
  });
};
