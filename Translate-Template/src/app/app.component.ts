import { Component } from '@angular/core';
import { LanguageModel } from './model/language.model';
import { TranslateService } from '@ngx-translate/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  languages: LanguageModel[];
  language: LanguageModel;

  constructor(private translateService: TranslateService,
    private data: DataService) {
    this.languages = this.data.getLanguages();
    this.language = this.data.getLanguageDefault();
    console.log(this.languages);

    let lang: string[] = []
    for (let i = 0; i < this.languages.length; i++) {
      lang.push(this.languages[i].name);
    }
    this.translateService.addLangs(lang);

    this.translateService.setDefaultLang(this.language.name);
    this.translateService.use(this.language.name);
    console.log(this.language.name);
  }

  changeLanguage() {
    if(this.language == null){
      this.language = this.data.getLanguageDefault();
    }
    console.log(this.language.name);
    this.translateService.use(this.language.name);
  }
}
