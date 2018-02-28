DROP DATABASE IF EXISTS parkingspots_db;
CREATE database parkingspots_db;

USE parkingspots_db;

CREATE TABLE parkingspots (
  id INT NOT NULL,
  price INT NOT NULL,
  location VARCHAR(150) NOT NULL,
  user_name VARCHAR(100) NOT NULL,
  booked_name VARCHAR(100) NULL,
  time_booked DATETIME NULL,
  time_left DATETIME NULL,
  available BOOLEAN DEFAULT TRUE,
  PRIMARY KEY (id)
);

SELECT * FROM parkingspots;