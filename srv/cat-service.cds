using my.employee_activity as ea from '../db/datamodel';

service CatalogService {
 entity Employee as projection on ea.Employee;
 entity Task as projection on ea.Task;
//  entity PerformanceMetrics as projection on ea.PerformanceMetrics;
//  entity Notification as projection on ea.Notification;
}
