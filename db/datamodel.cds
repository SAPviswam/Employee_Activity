namespace my.employee_activity;

using {cuid} from '@sap/cds/common';

entity Employee {
  key Employee_ID : Integer;
      Password    : String(20);
      Name        : String(100);
      Job_Title   : String(50);
      Department  : String(50);
      Email       : String(100);
      Phone       : String(20);
      Role        : String(20);
      task        : Association to many Task
                      on task.employee_t = $self;
// performanceMetrics : Composition of PerformanceMetrics;
};

entity Task : cuid {
  Task_ID               : Integer;
  Title                 : String(200);
  Description           : String(500);
  Priority              : String(20);
  Status                : String(20);
  Completion_percentage : Integer;
  Srart_date            : Date;
  End_date              : Date;
  employee_t            : Association to Employee;
}

// entity PerformanceMetrics : cuid {
//   Task_Completion_Rate : Decimal(3);
//   Completed_Task       : Integer;
//   Pendind_Task         : Integer;
//   employee_pm          : Association to Employee;
// }

// entity Notification : cuid {
//       Notification_ID : Integer;
//       Type            : String(20);
//       Message         : String(400);
//       Sent_Date       : Date;
//       Status          : Boolean;
//       employee_n      : Association to Employee;
//       task_n          : Association to Task;
// }
