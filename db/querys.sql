
CREATE DATABASE ticket_one;

use ticket_one;

CREATE TABLE users 
(user_id INT NOT NULL IDENTITY(1,1),
user_name VARCHAR(60) NOT NULL,
user_pass VARCHAR(60) NOT NULL,
rol VARCHAR(50),
create_date DATETIME,
update_date DATETIME,
PRIMARY KEY (user_id)
);

CREATE TABLE budget 
(budget_id INT NOT NULL IDENTITY(1,1),
create_date DATETIME,
project VARCHAR(50),
version FLOAT,
update_date DATETIME,
PRIMARY KEY (budget_id)
);

CREATE TABLE financial_summary 
(financial_summary_id INT NOT NULL IDENTITY(1,1),
sales FLOAT,
cost FLOAT,
margin FLOAT,
per_centum FLOAT,
PRIMARY KEY (financial_summary_id)
);

CREATE TABLE cash_flow 
(cash_flow_id INT NOT NULL IDENTITY(1,1),
ingress FLOAT,
egress FLOAT,
total FLOAT,
accumulated FLOAT,
PRIMARY KEY (financial_summary_id)
);

--DROP TABLE users;

SELECT * FROM users;

INSERT INTO users (user_name,user_pass,rol,create_date,update_date)
VALUES 
('kev@kev.com', '123','admin',GETDATE(),GETDATE());

INSERT INTO users (user_name,user_pass,rol,create_date,update_date)
VALUES 
('tam@tam.com', '123','user',GETDATE(),GETDATE());

INSERT INTO budget (create_date,project,version,update_date)
VALUES 
(GETDATE(), 'Proyecto 2',1.2,GETDATE()),
(GETDATE(), 'Proyecto 3',1.1,GETDATE()),
(GETDATE(), 'Proyecto 4',2.1,GETDATE());