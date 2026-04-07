import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController"
import { EventoController } from "../controllers/EventoController";
import { auth } from "../middleware/auth";

const routes = Router();
const usuario = new UsuarioController();
const evento = new EventoController();

routes.post("/cadastro", usuario.cadastro);
routes.post("/login", usuario.login);

routes.use(auth);

routes.get("/usuarios", usuario.listar);

routes.get("/evento", evento.listar);
routes.post("/evento", evento.criar);
routes.get("/evento/:id", evento.buscarPorId);
routes.put("/evento/:id", evento.atualizar);
routes.delete("/evento/:id", evento.deletar);

export { routes };