import {
  defineNamespace,
  defineProjections,
  Model as РодительMixin
} from '../mixins/regenerated/models/i-i-s-tabl-c-hast3-родитель';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РодительMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
