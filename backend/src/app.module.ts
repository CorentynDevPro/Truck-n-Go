import { Module } from "@nestjs/common";
import { I18nModule, QueryResolver, AcceptLanguageResolver } from "nestjs-i18n";
import { join } from "path";

@Module( {
    imports: [
        I18nModule.forRoot( {
            fallbackLanguage: "en",
            loaderOptions: {
                path: join( __dirname, "/i18n/" ),
                watch: true,
            },
            resolvers: [
                { use: QueryResolver, options: [ "lang", "locale" ] },
                AcceptLanguageResolver
            ]
        } ),
    ],
    controllers: [],
    providers: [],
} )

export class AppModule {
}
