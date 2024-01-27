import { logger } from "./logger.js";

export class settings{
  static TITLE = "Raise Hand Dialog";
  static NAME = "raise-hand-dialog";
  static KEY = "RaisehandDialog";

  static register(){
    logger.info("Registering all Settings");
    settings.logger();
    settings.gmOnly();
    settings.font_size();
    settings.icon();
    settings.response();
  }

  static value(key){
    return game.settings.get(settings.NAME, key);
  }

  static i18n(key){
    return game.i18n.localize(key);
  }

  static logger(){
    logger.info("Registering Logger Debugging Setting");
    game.settings.register(
      settings.NAME,
      'debug', 
      {
        name : "Debugging",
        hint : "",
        scope :"client",
        config : true,
        default : false,
        type : Boolean
      },
    );
  }

  static gmOnly(){
    logger.info("Registering GM Only Setting");
    game.settings.register(
      settings.NAME, 
      'gmOnly',
      {
        name : `${settings.i18n("wd.setting.gmOnly.title")}`,
        hint : `${settings.i18n("wd.setting.gmOnly.hint")}`,
        scope :"world",
        config : true,
        default : false,
        type : Boolean
      }
    )
  }

  static font_size(){
    logger.info("Registering fonts Setting");
    game.settings.register(
      settings.NAME,
      'font_size',
      {
        name : `${settings.i18n("wd.setting.font_size.title")}`,
        hint : `${settings.i18n("wd.setting.font_size.hint")}`,
        scope :"world",
        config : true,
        default : "1.5em",
        type : String
      }
    )
  }

  static icon(){
    logger.info("Registering Icon Setting");
    game.settings.register(
      settings.NAME, 
      'icon',
      {
        name : `${settings.i18n("wd.setting.icon.title")}`,
        hint : `${settings.i18n("wd.setting.icon.hint")}`,
        scope : "client",
        config : true,
        default : true,
        type : Boolean,
        onChange : () => window.location.reload(),
      }
    )
  }

  static response(){
    logger.info("Registering Response Setting");
    game.settings.register(
      settings.NAME, 
      'response',
      {
        name : `${settings.i18n("wd.setting.response.title")}`,
        hint : `${settings.i18n("wd.setting.response.hint")}`,
        scope : "world",
        config : true,
        default : true,
        type : Boolean
      }
    )
  }
}