import { SpecificationsRepositories } from "../../repositories/SpecificationsRepositories";
import { CreateController } from "./CreateController";
import { CreateService } from "./CreateService";

const  specificationsRepositories = SpecificationsRepositories.getIntence();
const  createService              =  new CreateService(specificationsRepositories);
const  IndexcreateController      =  new CreateController(createService);

export {IndexcreateController}
