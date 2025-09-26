import { Controller, Get } from "@nestjs/common";
import { I18n, I18nContext } from "nestjs-i18n";

@Controller()
export class AppController {
    @Get( "hello" )
    getHello( @I18n() i18n: I18nContext ): { message: string } {
        return { message: i18n.t( "common.HELLO" ) };
    }
}
