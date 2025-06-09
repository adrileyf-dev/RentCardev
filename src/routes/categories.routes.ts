import { Router, Request, Response } from "express";
import { IndexcreateCategoryContoller  } from "../modules/cars/useCases";
import { IndexListCategoryContoller } from "../modules/cars/useCases/ListCategory";
import multer from "multer"
import { importCategoryController } from "../modules/cars/useCases/importCategory";
const categoriesRoutes = Router();

const upload = multer({dest: "./tmp"})

categoriesRoutes.post("/",(request,response)=>{
 return IndexcreateCategoryContoller.handle(request,response);
});
categoriesRoutes.get("/all",(request,response)=>{
       return IndexListCategoryContoller.handle(request,response);
});

categoriesRoutes.post("/import",upload.single("file"),(request,response) =>{
return importCategoryController.handle(request,response);


})
export {categoriesRoutes};

