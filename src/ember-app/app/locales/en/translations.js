import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTablCHast3ПреподLForm from './forms/i-i-s-tabl-c-hast3-препод-l';
import IISTablCHast3УченикLForm from './forms/i-i-s-tabl-c-hast3-ученик-l';
import IISTablCHast3ПреподEForm from './forms/i-i-s-tabl-c-hast3-препод-e';
import IISTablCHast3УченикEForm from './forms/i-i-s-tabl-c-hast3-ученик-e';
import IISTablCHast3ПреподModel from './models/i-i-s-tabl-c-hast3-препод';
import IISTablCHast3РодительModel from './models/i-i-s-tabl-c-hast3-родитель';
import IISTablCHast3УченикModel from './models/i-i-s-tabl-c-hast3-ученик';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tabl-c-hast3-препод': IISTablCHast3ПреподModel,
    'i-i-s-tabl-c-hast3-родитель': IISTablCHast3РодительModel,
    'i-i-s-tabl-c-hast3-ученик': IISTablCHast3УченикModel
  },

  'application-name': 'Tabl c hast3',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Tabl c hast3',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tabl c hast3',
          title: 'Tabl c hast3'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'tabl-c-hast3': {
          caption: 'TablCHast3',
          title: 'TablCHast3',
          'i-i-s-tabl-c-hast3-препод-l': {
            caption: 'Препод',
            title: ''
          },
          'i-i-s-tabl-c-hast3-ученик-l': {
            caption: 'Ученик',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-tabl-c-hast3-препод-l': IISTablCHast3ПреподLForm,
    'i-i-s-tabl-c-hast3-ученик-l': IISTablCHast3УченикLForm,
    'i-i-s-tabl-c-hast3-препод-e': IISTablCHast3ПреподEForm,
    'i-i-s-tabl-c-hast3-ученик-e': IISTablCHast3УченикEForm
  },

});

export default translations;
