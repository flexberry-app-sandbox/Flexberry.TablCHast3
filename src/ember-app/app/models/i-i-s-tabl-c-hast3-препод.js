import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПреподMixin
} from '../mixins/regenerated/models/i-i-s-tabl-c-hast3-препод';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПреподMixin, Validations, {
});

defineProjections(Model);

export default Model;
