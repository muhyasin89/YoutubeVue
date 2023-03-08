import axios from "axios";
import { useRootStore } from "../store/root";
import { errorSwal } from "../utility/errorSwal";

export const GetListRecord = async(url: string) : Promise<any> => {
    let items: any[] = [];
    let msg = "";
    let loaded = false;
    const root = useRootStore()

    return await axios.get(root.host + url)
    .then((response) => {
        items = response.data.results;
        msg = "Record sebanyak "+ response.data.count;
        loaded = true;
        return { items, msg, loaded}
    })
    .catch((err:Error) => {
        errorSwal(err);
    })

    
}