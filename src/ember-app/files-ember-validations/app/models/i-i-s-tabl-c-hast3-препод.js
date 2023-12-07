import {
  defineNamespace,
  defineProjections,
  Model as ПреподMixin
} from '../mixins/regenerated/models/i-i-s-tabl-c-hast3-препод';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПреподMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
