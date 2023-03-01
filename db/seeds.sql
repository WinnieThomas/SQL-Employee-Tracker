INSERT INTO department (name)
VALUES ("Teaching"),
       ("Support Staff"),
       ("Management"),
       ("Administration"),
       ("Facilities");


INSERT INTO role (title, salary, department_id)
VALUES 
    ("Teacher", 30000, 1),
    ("Secretary", 25000, 4),
    ("Care Taker", 25000, 5),
    ("Head Teacher", 50000, 3),
    ("Science Technician", 30000, 2),
    ("Cleaner", 19000, 5),
    ("Lunchtime Supervisor", 19000, 2),
    ("Teaching Assistant", 23000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Sandra", "Dobbs", 3, NULL),
    ("Kevin", "Foalks", 6, 3),
    ("Amanda", "Stone", 5, 1),
    ("Carly", "Green", 1, 4),
    ("Anthony", "Westerly", 4, NULL),
    ("Pamela", "Smith", 7, 3),
    ("Anne", "Monderly", 8, 1),
    ("Paul", "Woodley", 2, 4),
    ("Amanda", "Booth", 1, 4),
    ("Peter", "Faith", 1,4);

