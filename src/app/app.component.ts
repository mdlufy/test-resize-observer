import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiIcon } from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadge,
  TuiBadgedContent,
  TuiBadgeNotification,
} from '@taiga-ui/kit';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app',
  standalone: true,
  exportAs: 'Example1',
  imports: [
    TuiBadgedContent,
    TuiBadgeNotification,
    TuiAvatar,
    TuiIcon,
    TuiBadge,
    AsyncPipe,
  ],
  templateUrl: './app.template.html',
  styleUrls: ['./app.style.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  isShown$ = of(true).pipe(delay(1e3));
}
