document.addEventListener("DOMContentLoaded", () => {
    const arabic_persian = [
        'ا',
        'ب',
        'پ',
        'ت',
        'ث',
        'ج',
        'چ',
        'ح',
        'خ',
        'د',
        'ذ',
        'ر',
        'ز',
        'ژ',
        'س',
        'ش',
        'ص',
        'ض',
        'ط',
        'ظ',
        'ع',
        'غ',
        'ف',
        'ق',
        'ك',
        'گ',
        'ل',
        'م',
        'ن',
        'ﻩ',
        'و',
        'ي'
    ];
    const transcription = [
        'a',
        'b',
        'p',
        't',
        'ṯ',
        'j',
        'č',
        'ḥ',
        'ḵ',
        'd',
        'ḏ',
        'r',
        'z',
        'ž',
        's',
        'š',
        'ṣ',
        'ḍ',
        'ṭ',
        'ẓ',
        'ʻ',
        'ḡ',
        'f',
        'q',
        'k',
        'g',
        'l',
        'm',
        'n',
        'h',
        'w',
        'y',
    ];

    const latin_txt = document.getElementById("latin-txt");
    const arabic_txt = document.getElementById("arabic-txt");

    latin_txt.addEventListener('input', (event) => {
        let content = event.target.value.toLowerCase();
        let a = "";
        for (let i = 0; i < content.length; i++) {
            let pos = transcription.indexOf(content[i]);
            if (content[i] == 'u' || content[i] == 'v' || content[i] == 'o') a += 'و';
            else if (content[i] == 'i' || content[i] == 'e') a += 'ي';
            else if (content[i] == 'c') a += 'چ';
            else if (content[i] == 'x') a += 'خ';
            else if (content[i] == 'ʾ' || content[i] == `'`) a += 'ع';
            else if (pos == -1) a += content[i];
            else a += arabic_persian[pos];
        }
        arabic_txt.value = a;
    });
});
