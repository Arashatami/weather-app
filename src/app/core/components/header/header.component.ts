import { FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'du']);
    this.lang.valueChanges.pipe(takeUntilDestroyed(), distinctUntilChanged(),
    ).subscribe(res => {
      this.translate.use(res!);
    });
  }
  lang = new FormControl("en");
}
