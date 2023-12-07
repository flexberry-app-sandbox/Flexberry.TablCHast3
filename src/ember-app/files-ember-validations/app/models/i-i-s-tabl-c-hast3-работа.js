import {
  defineNamespace,
  defineProjections,
  Model as РаботаMixin
} from '../mixins/regenerated/models/i-i-s-tabl-c-hast3-работа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РаботаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
