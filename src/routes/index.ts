import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { specificationsRoutes } from "./specifications.route";
const route = Router();
route.use("/categories",categoriesRoutes);
route.use("/specifications",specificationsRoutes);
export {route}

