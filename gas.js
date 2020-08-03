function retranslate(text, times=15, output_lang="ja") {
    // 言語一覧 → https://cloud.google.com/translate/docs/languages
    var langs = ["af", "sq", "am", "ar", "hy", "az", "eu", "be", "bn", "bs", "bg", "ca", "ceb", "zh-CN", "zh-TW", "co", "hr", "cs", "da", "nl", "en", "eo", "et", "fi", "fr", "fy", "gl", "ka", "de", "el", "gu", "ht", "ha", "haw", "he", "hi", "hmn", "hu", "is", "ig", "id", "ga", "it", "ja", "jv", "kn", "kk", "km", "rw", "ko", "ku", "ky", "lo", "la", "lv", "lt", "lb", "mk", "mg", "ms", "ml", "mt", "mi", "mr", "mn", "my", "ne", "no", "ny", "or", "ps", "fa", "pl", "pt", "pa", "ro", "ru", "sm", "gd", "sr", "st", "sn", "sd", "si", "sk", "sl", "so", "es", "su", "sw", "sv", "tl", "tg", "ta", "tt", "te", "th", "tr", "tk", "uk", "ur", "ug", "uz", "vi", "cy", "xh", "yi", "yo", "zu"]
    var step = [""];
    var t = text;

    for (i = 0; i < times; i++){
        step.push(langs.splice(Math.floor(Math.random() * langs.length),1));
    }
    step.push([output_lang]);
    Logger.log(step);

    for (j = 1; j < step.length; j++){
        t = LanguageApp.translate(t, step[j-1], step[j]);
        Logger.log(step[j], step[j+1], t);
    }

    return t;
  
  }
  
  function test() {
    Logger.log(retranslate("広い門の下には、この男のほかに誰もいない。ただ、所々丹塗にぬりの剥げた、大きな円柱に、蟋蟀が一匹とまっている。羅生門が、朱雀大路にある以上は、この男のほかにも、雨やみをする市女笠や揉烏帽子が、もう二三人はありそうなものである。それが、この男のほかには誰もいない"));
  }