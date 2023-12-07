import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.tabl-c-hast3.caption'),
          title: i18n.t('forms.application.sitemap.tabl-c-hast3.title'),
          children: [{
            link: 'i-i-s-tabl-c-hast3-препод-l',
            caption: i18n.t('forms.application.sitemap.tabl-c-hast3.i-i-s-tabl-c-hast3-препод-l.caption'),
            title: i18n.t('forms.application.sitemap.tabl-c-hast3.i-i-s-tabl-c-hast3-препод-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-tabl-c-hast3-ученик-l',
            caption: i18n.t('forms.application.sitemap.tabl-c-hast3.i-i-s-tabl-c-hast3-ученик-l.caption'),
            title: i18n.t('forms.application.sitemap.tabl-c-hast3.i-i-s-tabl-c-hast3-ученик-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})