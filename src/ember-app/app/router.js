import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tabl-c-hast3-препод-l');
  this.route('i-i-s-tabl-c-hast3-препод-e',
  { path: 'i-i-s-tabl-c-hast3-препод-e/:id' });
  this.route('i-i-s-tabl-c-hast3-препод-e.new',
  { path: 'i-i-s-tabl-c-hast3-препод-e/new' });
  this.route('i-i-s-tabl-c-hast3-улица-l');
  this.route('i-i-s-tabl-c-hast3-улица-e',
  { path: 'i-i-s-tabl-c-hast3-улица-e/:id' });
  this.route('i-i-s-tabl-c-hast3-улица-e.new',
  { path: 'i-i-s-tabl-c-hast3-улица-e/new' });
  this.route('i-i-s-tabl-c-hast3-ученик-l');
  this.route('i-i-s-tabl-c-hast3-ученик-e',
  { path: 'i-i-s-tabl-c-hast3-ученик-e/:id' });
  this.route('i-i-s-tabl-c-hast3-ученик-e.new',
  { path: 'i-i-s-tabl-c-hast3-ученик-e/new' });
});

export default Router;
