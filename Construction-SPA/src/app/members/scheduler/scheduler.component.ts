import { AlerifyService } from './../../services/alerify.service';
import { ScheduleService } from './../../services/schedule.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Todos } from '../../_models/Todos';
import { User } from 'src/app/_models/Users';
import { DragEventArgs, EventSettingsModel, ResizeEventArgs, View } from '@syncfusion/ej2-angular-schedule';

import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit {
constructor(private auth: AuthService, private schedule: ScheduleService, private alertyfy: AlerifyService) {}
@Input() user: User;
@Input() todo: Todos[];
todos: Todos;
public setView: View = 'Week';
public setDate: Date = new Date(Date.now());
public eventSettings: EventSettingsModel = {
  dataSource: [
  {
      Id: 1,
      Subject: 'His birthday',
      StartTime: new Date(2020, 9, 12, 9, 30),
      EndTime: new Date(2020, 9, 12, 11, 0)
  }, {
      Id: 2,
      Subject: 'Thule Air Crash Report',
      StartTime: new Date(2020, 10, 12, 12, 0),
      EndTime: new Date(2018, 10, 12, 14, 0)
  }, {
      Id: 3,
      Subject: 'Blue Moon Eclipse',
      StartTime: new Date(2020, 10, 13, 9, 30),
      EndTime: new Date(2020, 10, 13, 11, 0)
  }, {
      Id: 4,
      Subject: 'Meteor Showers in 2018',
      StartTime: new Date(2020, 10, 14, 13, 0),
      EndTime: new Date(2020, 10, 14, 14, 30)
  }]
};

public eventObject: EventSettingsModel = {};
public setViews: View[] = ['Day', 'Week', 'WorkWeek', 'Agenda', 'Month'];
currentUserId = +this.auth.decodedToken.nameid;
// private dataManager: DataManager = new DataManager({
//   url: 'https://localhost:44368/api/user/' + this.currentUserId + 'todos', // 'controller/actions'
//   // tslint:disable-next-line: new-parens
//   adaptor: new WebApiAdaptor,
//         crossDomain: true
//     });
//     public eventSettings: EventSettingsModel = { dataSource: this.dataManager };
ngOnInit(): void {
    this.getTodos();
}
getTodos() {
  const currentUserId = +this.auth.decodedToken.nameid;
  this.schedule.getUserTodos(this.currentUserId)
  .subscribe(todo => {
    this.todo = todo;
  // tslint:disable-next-line: no-shadowed-variable
  }, error => {
    this.alertyfy.error(error);
  });

}
onDragStart(args: DragEventArgs): void {
  args.navigation.enable = true;
}
onResizeStart(args: ResizeEventArgs): void {
  args.interval = 1;
}
}

