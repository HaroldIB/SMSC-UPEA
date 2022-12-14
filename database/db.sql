--Table Tasks
CREATE TABLE tasks(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  description VARCHAR(300),
  done BOOLEAN NOT NULL DEFAULT 0,
  createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

--Table News
CREATE TABLE news(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  author VARCHAR(200),
  title VARCHAR(200) NOT NULL,
  urlImage VARCHAR(300) NOT NULL,
  createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  content VARCHAR(4000)
);

--Table users
CREATE TABLE user(
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user VARCHAR(50) NOT NULL,
  pass VARCHAR(50) NOT NULL,
  nombre VARCHAR(100) NOT NULL,
  apellido VARCHAR(100)NOT NULL
);