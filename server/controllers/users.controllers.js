import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM user");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM user WHERE id = ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res
        .status(404)
        .json({ message: "Usuario no encontrado desde getUser" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { user, pass, nombre, apellido } = req.body;
    const [result] = await pool.query(
      "INSERT INTO user(user,pass,nombre,apellido) VALUES (?,?,?,?)",
      [user, pass, nombre, apellido]
    );
    console.log(result);
    res.json({
      id: result.insertId,
      user,
      pass,
      nombre,
      apellido,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const [result] = await pool.query("UPDATE user SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const authenticateUser = async (req, res) => {
  try {
    const { user, pass } = req.body;
    const [result] = await pool.query(
      "SELECT * FROM user WHERE user = ? AND pass = ?",
      [user, pass]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM user WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json({ message: "Usuario no encontrado desde deleteUser" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
