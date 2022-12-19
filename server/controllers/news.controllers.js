import { pool } from "../db.js";

export const getNews = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM news ORDER BY createAt DESC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getNew = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM news WHERE id= ?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(400).json({ message: "Noticias no Encontrada" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createNew = async (req, res) => {
  try {
    const { author, title, urlImage, content } = req.body;
    const [result] = await pool.query(
      "INSERT INTO news(author,title,urlImage,content) VALUES(?,?,?,?)",
      [author, title, urlImage, content]
    );
    console.log(result);
    res.json({ id: result.insertId, author, title, urlImage, content });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateNew = async (req, res) => {
  try {
    const result = await pool.query("UPDATE news SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteNew = async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM news WHERE id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "Noticias no encontrada" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
