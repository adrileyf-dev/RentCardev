import { SpecificationsRepositories } from "../../repositories/SpecificationsRepositories";
import { ListController  } from "./ListController";
import { ListServices } from "./ListServices";

const  specificationsRepositories = SpecificationsRepositories.getIntence();
const  listServices              =  new ListServices(specificationsRepositories);
const  IndexListController      =  new ListController(listServices);
export {IndexListController}
