import { LanguageModel } from "../model/language.model";

export class DataService{
    languages: LanguageModel[] = [];

    constructor(){
        const en = new LanguageModel(1, 'en');
        const vn = new LanguageModel(2, 'vn');
        const fr = new LanguageModel(3, 'fr');
        this.languages.push(en);
        this.languages.push(vn);
        this.languages.push(fr);
    }

    getLanguages(): LanguageModel[]{
        return this.languages;
    }

    getLanguageDefault(): LanguageModel{
        return this.languages[0];
    }
};