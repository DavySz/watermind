const express = require("express");
const cors = require("cors");

const executaQuery = require("./dbconect");

const api = express();
api.use(cors());
api.use(express.json());

api.get("/denuncia_join_user", (req, res) => {
  let query = `SELECT * FROM mobileusuarios INNER JOIN denuncias ON mobileusuarios.cpf = denuncias.cpf`;
  executaQuery(query, res);
});

api.post("/add_m_usuario", (req, res) => {
  console.log(req.body);
  let query = `INSERT INTO crudweb.mobileusuarios (cpf, nome, email, senha) VALUES ('${req.body.c}', '${req.body.n}', '${req.body.e}','${req.body.s}');`;
  executaQuery(query, res);
});

api.post("/login", (req, res) => {
  let query = `SELECT * FROM crudweb.mobileusuarios WHERE (email = '${req.body.e}' AND senha = '${req.body.s}')`;
  executaQuery(query, res);
});

api.get("/user/:email", (req, res) => {
  let email = req.params.email;
  let query = `SELECT * FROM crudweb.mobileusuarios WHERE (email = '${email}')`;
  executaQuery(query, res);
});

api.post("/add_denuncia", (req, res) => {
  console.log(req.body);
  let query = `INSERT INTO crudweb.denuncias (cpf, latitude, longitude, descricao, data, hora) VALUES ('${req.body.cpf}', '${req.body.lat}', '${req.body.lon}','${req.body.desc}','${req.body.data}', '${req.body.time}');`;
  executaQuery(query, res);
});

api.listen(3000, () => {
  console.log("Api na porta 8080");
});
