import { NgModule } from '@angular/core';
import { CalendarPipe } from './CalendarPipe';
import { DateFormatPipe } from './DateFormatPipe';
import { DurationPipe } from './DurationPipe';
import { FromUnixPipe } from './FromUnixPipe';
import { TimeAgoPipe } from './TimeAgoPipe';
import { DifferencePipe } from './DifferencePipe';

const ANGULAR_MOMENT_PIPES = [CalendarPipe, DateFormatPipe, DurationPipe, FromUnixPipe, TimeAgoPipe, DifferencePipe];

@NgModule({
  declarations: ANGULAR_MOMENT_PIPES,
  exports: ANGULAR_MOMENT_PIPES
})
export class MomentModule { }
