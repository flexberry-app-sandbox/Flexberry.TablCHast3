import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISTablCHast3ПреподLForm from './forms/i-i-s-tabl-c-hast3-препод-l';
import IISTablCHast3РаботаLForm from './forms/i-i-s-tabl-c-hast3-работа-l';
import IISTablCHast3УлицаLForm from './forms/i-i-s-tabl-c-hast3-улица-l';
import IISTablCHast3УченикLForm from './forms/i-i-s-tabl-c-hast3-ученик-l';
import IISTablCHast3ПреподEForm from './forms/i-i-s-tabl-c-hast3-препод-e';
import IISTablCHast3РаботаEForm from './forms/i-i-s-tabl-c-hast3-работа-e';
import IISTablCHast3УлицаEForm from './forms/i-i-s-tabl-c-hast3-улица-e';
import IISTablCHast3УченикEForm from './forms/i-i-s-tabl-c-hast3-ученик-e';
import IISTablCHast3ГородModel from './models/i-i-s-tabl-c-hast3-город';
import IISTablCHast3ПреподModel from './models/i-i-s-tabl-c-hast3-препод';
import IISTablCHast3РаботаModel from './models/i-i-s-tabl-c-hast3-работа';
import IISTablCHast3РодительModel from './models/i-i-s-tabl-c-hast3-родитель';
import IISTablCHast3УлицаModel from './models/i-i-s-tabl-c-hast3-улица';
import IISTablCHast3УченикModel from './models/i-i-s-tabl-c-hast3-ученик';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tabl-c-hast3-город': IISTablCHast3ГородModel,
    'i-i-s-tabl-c-hast3-препод': IISTablCHast3ПреподModel,
    'i-i-s-tabl-c-hast3-работа': IISTablCHast3РаботаModel,
    'i-i-s-tabl-c-hast3-родитель': IISTablCHast3РодительModel,
    'i-i-s-tabl-c-hast3-улица': IISTablCHast3УлицаModel,
    'i-i-s-tabl-c-hast3-ученик': IISTablCHast3УченикModel
  },

  'application-name': 'Tabl c hast3',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Tabl c hast3',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tabl c hast3',
          title: 'Tabl c hast3'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
          },
          'i-i-s-tabl-c-hast3-улица-l': {
            caption: 'Улица',
            title: ''
          },
          'i-i-s-tabl-c-hast3-работа-l': {
            caption: 'РаботаL',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-tabl-c-hast3-препод-l': IISTablCHast3ПреподLForm,
    'i-i-s-tabl-c-hast3-работа-l': IISTablCHast3РаботаLForm,
    'i-i-s-tabl-c-hast3-улица-l': IISTablCHast3УлицаLForm,
    'i-i-s-tabl-c-hast3-ученик-l': IISTablCHast3УченикLForm,
    'i-i-s-tabl-c-hast3-препод-e': IISTablCHast3ПреподEForm,
    'i-i-s-tabl-c-hast3-работа-e': IISTablCHast3РаботаEForm,
    'i-i-s-tabl-c-hast3-улица-e': IISTablCHast3УлицаEForm,
    'i-i-s-tabl-c-hast3-ученик-e': IISTablCHast3УченикEForm
  },

});

export default translations;
