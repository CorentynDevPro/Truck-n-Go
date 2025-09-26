import { createI18n } from "vue-i18n";
import fr from "../i18n/fr.json";
import en from "../i18n/en.json";

/*
 * i18n instance for Vue app.
 * @see https://vue-i18n.intlify.dev/
 */
export const i18n = createI18n( {
    legacy: false,
    locale: navigator.language.startsWith( "fr" ) ? "fr" : "en",
    fallbackLocale: "en",
    messages: { fr, en },
    globalInjection: true,
} );
