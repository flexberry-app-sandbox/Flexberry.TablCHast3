import { Serializer as РаботаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-tabl-c-hast3-работа';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РаботаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
