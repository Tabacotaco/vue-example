import Vue from 'vue';
import VueI18n from 'vue-i18n';


Vue.use(VueI18n);

interface VueI18nConfig {
  locale: string;
  messages: { [Language: string]: any; };
}

const getLocaleMessages = (locale: string = navigator.language.toLowerCase()): VueI18nConfig => {
  const options: VueI18nConfig = {locale, messages: {}};

  try {
    options.messages[locale] = require(`@/assets/i18n/${locale}.json`);
  } catch (e) {
    options.locale = 'en-us';
    options.messages[locale] = require('@/assets/i18n/en-us.json');
  }
  return options;
};

const i18n = new VueI18n(getLocaleMessages());

export const setLocaleMessages = (locale?: string): void => {
  const options: VueI18nConfig = getLocaleMessages(locale);

  i18n.setLocaleMessage(options.locale, options.messages[options.locale]);
  i18n.locale = options.locale;
};

export default i18n;