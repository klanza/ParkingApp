DROP DATABASE IF EXISTS parkingspots_db;
CREATE database parkingspots_db;

USE parkingspots_db;

CREATE TABLE parkingspots (
  id INT NOT NULL,
  price DECIMAL NOT NULL,
  location_lat DECIMAL NOT NULL,
  location_lng DECIMAL NOT NULL,
  address VARCHAR(150) NOT NULL,
  owner_username VARCHAR(100) NOT NULL,
  bookedBy_username VARCHAR(100) NULL,
  time_booked DATETIME NULL,
  time_vacated DATETIME NULL,
  available BOOLEAN DEFAULT TRUE,
  PRIMARY KEY (id)
);

SELECT * FROM parkingspots;