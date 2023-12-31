import { Router } from "express";
import * as controller from "./controller.js";


const router=Router();
router.route("/addTask").post(controller.addTask);
router.route("/gettask").get(controller.getTask);
router.route("/deltask/:id").delete(controller.delTask);
// router.route("/edittask/:id").patch(controller.editTask);

export default router;