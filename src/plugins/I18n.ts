import en from '@/locales/en.json'
import ru from '@/locales/ru.json'

import { createI18n } from 'vue-i18n'

const messages = {
    en: en,
    ru: ru
}
const locale = localStorage.getItem('locale')
const i18n = createI18n({
    locale:  'en',
    messages
})

export default i18n;