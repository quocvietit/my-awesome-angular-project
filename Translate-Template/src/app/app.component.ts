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
  // Title: String = 'title';
  // languages: LanguageModel[];
  // language: LanguageModel;

  constructor(private translateService: TranslateService,
              private data: DataService) {
    // this.languages = this.data.getLanguages();
    // this.language = this.data.getLanguageDefault();
    // console.log(this.languages);
    // this.translateService.addLangs(["en", "vn", "fr"]);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
    // console.log(this.language.name);
  }

  changeLanguage() {
    //console.log(this.language.name);
    this.translateService.use('en');
  }
}
