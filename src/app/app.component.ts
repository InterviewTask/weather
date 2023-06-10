import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather';
  constructor(
    private translate: TranslateService
  ){
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }


}
