REAL-TIME MONITORING SYSTEM FOR DISASTER MANAGEMENT TRAININGS

---

Project Title

Real-Time Monitoring System for Disaster Management Trainings

---

Problem Statement

Disaster management training programs are essential for preparing individuals and organizations to respond effectively during emergencies. However, manual management of training activities makes it difficult to monitor attendance, track participant progress, communicate updates, and generate reports efficiently.

Manual record-keeping can result in inaccurate data, delayed communication, and ineffective evaluation of training outcomes. Therefore, a Real-Time Monitoring System is needed to automate training management, provide instant updates, monitor attendance, and generate reports for better disaster preparedness and response planning.

---

Project Objectives

Main Objective

To develop a web-based system that monitors and manages disaster management training activities in real time.

Sub Objectives

• Provide secure user authentication and access control.
• Enable online participant registration.
• Monitor attendance in real time.
• Send notifications and alerts instantly.
• Maintain centralized training records.
• Generate attendance and performance reports.
• Improve communication between trainers and trainees.
• Enhance disaster preparedness through effective training management.

---

System Modules

Module 1: User Authentication

• User Registration
• Login
• Logout
• Password Management
• Role-Based Access Control

Module 2: Dashboard

• Training Overview
• Participant Statistics
• Attendance Summary
• Recent Activities

Module 3: Training Management

• Add Training Programs
• Update Training Details
• Delete Training Records
• Schedule Training Sessions

Module 4: Participant Registration

• Register Participants
• Manage Participant Details
• Training Enrollment

Module 5: Attendance Monitoring

• Mark Attendance
• Track Attendance Status
• View Attendance Reports

Module 6: Notification Management

• Training Reminders
• Schedule Updates
• Emergency Alerts
• Notification History

Module 7: Report Generation

• Attendance Reports
• Participant Reports
• Training Performance Reports
• Export Reports

---

Database Table Design

USERS

| Field Name     | Description    |
| -------------- | -------------- |
| User_ID (PK)   | Unique User ID |
| Full_Name      | User Name      |
| Email          | Email Address  |
| Password       | User Password  |
| Role           | User Role      |
| Contact_Number | Contact Number |

TRAININGS

| Field Name       | Description          |
| ---------------- | -------------------- |
| Training_ID (PK) | Unique Training ID   |
| Training_Name    | Training Name        |
| Description      | Training Description |
| Training_Date    | Scheduled Date       |
| Venue            | Training Venue       |
| Trainer_Name     | Trainer Name         |
| Status           | Training Status      |

PARTICIPANTS

| Field Name          | Description           |
| ------------------- | --------------------- |
| Participant_ID (PK) | Unique Participant ID |
| Full_Name           | Participant Name      |
| Gender              | Gender                |
| Email               | Email Address         |
| Contact_Number      | Contact Number        |
| Address             | Address               |

REGISTRATIONS

| Field Name           | Description            |
| -------------------- | ---------------------- |
| Registration_ID (PK) | Unique Registration ID |
| Participant_ID (FK)  | Participant Reference  |
| Training_ID (FK)     | Training Reference     |
| Registration_Date    | Registration Date      |

ATTENDANCE

| Field Name          | Description           |
| ------------------- | --------------------- |
| Attendance_ID (PK)  | Unique Attendance ID  |
| Participant_ID (FK) | Participant Reference |
| Training_ID (FK)    | Training Reference    |
| Attendance_Date     | Attendance Date       |
| Attendance_Status   | Present/Absent        |
| Check_In_Time       | Check-In Time         |

NOTIFICATIONS

| Field Name           | Description            |
| -------------------- | ---------------------- |
| Notification_ID (PK) | Unique Notification ID |
| User_ID (FK)         | User Reference         |
| Message              | Notification Message   |
| Notification_Date    | Notification Date      |
| Status               | Notification Status    |

REPORTS

| Field Name        | Description        |
| ----------------- | ------------------ |
| Report_ID (PK)    | Unique Report ID   |
| Training_ID (FK)  | Training Reference |
| Generated_By (FK) | User Reference     |
| Report_Type       | Report Category    |
| Generated_Date    | Report Date        |

---

Database Relationship Diagram

```text
                        +-------------+
                        |    USERS    |
                        +-------------+
                               |
                 +-------------+-------------+
                 |                           |
                 v                           v
        +----------------+         +----------------+
        | NOTIFICATIONS  |         |    REPORTS     |
        +----------------+         +----------------+
                                           |
                                           |
                                           v
                                   +---------------+
                                   |   TRAININGS   |
                                   +---------------+
                                           |
                    +----------------------+------------------+
                    |                                         |
                    v                                         v
           +----------------+                     +----------------+
           | REGISTRATIONS  |                     |  ATTENDANCE    |
           +----------------+                     +----------------+
                    ^                                         ^
                    |                                         |
                    +----------------------+------------------+
                                           |
                                           v
                                  +----------------+
                                  | PARTICIPANTS   |
                                  +----------------+
```

---

Expected Outcome

• Real-time monitoring of disaster management trainings.
• Accurate attendance tracking.
• Instant notifications and alerts.
• Automated report generation.
• Centralized data management.
• Improved disaster preparedness.
• Better decision-making through analytics and reports.

---

Technologies Used

| Category        | Technology            |
| --------------- | --------------------- |
| Frontend        | HTML, CSS, JavaScript |
| Backend         | Python / Java         |
| Database        | MySQL                 |
| IDE             | VS Code               |
| Version Control | GitHub                |

---

Project Summary

The Real-Time Monitoring System for Disaster Management Trainings is a web-based application designed to automate and monitor disaster management training activities. The system provides participant registration, attendance monitoring, notification management, and report generation functionalities. By maintaining centralized records and offering real-time updates, the system improves training effectiveness, communication, and disaster preparedness.

Project Type: Mini Project

Domain: Disaster Management

Category: Real-Time Monitoring & Training Management System

Database: MySQL

Platform: Web Application

---

GitHub Repository Structure

```text
Real-Time-Monitoring-System/
│
├── README.md
├── Database/
│   ├── Database_Table_Diagram.png
│   └── ER_Diagram.png
│
├── Frontend/
│   ├── HTML
│   ├── CSS
│   └── JavaScript
│
├── Backend/
│   └── Python / Java
│
├── Documentation/
│   ├── Project_Report.pdf
│   └── PPT_Presentation.pptx
│
└── Screenshots/
```

Recommended Images for GitHub

1. Database Table Diagram (All 7 Tables)
2. ER Diagram (Entity Relationship Diagram)
3. Use Case Diagram
4. System Architecture Diagram
5. User Interface Screenshots
