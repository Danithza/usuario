import { Router } from "express";
import { UserController } from "../src/adapter/restful/v1/controller/UserController";

const router = Router();
const userController = new UserController();

router.post("/", (req, res) => userController.add(req, res));
router.put("/:id", (req, res) => userController.update(req, res));
router.delete("/:id", (req, res) => userController.delete(req, res));
router.patch("/:id/deactivate", (req, res) => userController.deactivate(req, res));
router.patch("/:id/role", (req, res) => userController.changeRole(req, res));
router.get("/:id", (req, res) => userController.findById(req, res));
router.get("/", (req, res) => userController.list(req, res));

export default router;
