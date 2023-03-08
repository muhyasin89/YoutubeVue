import axios from "axios";
import { useRootStore } from "../store/root";
import { errorSwal } from "../utility/errorSwal";

export const PutDetailRecord = async(url: string, data: any): Promise<any> => {
    let items: any[] = [];
  
    let loaded = false;
    const root = useRootStore()

    return await axios.put(root.host + url, data)
    .then((response) => {
        items = response.data;
        loaded = true;
        return { items, loaded}
    })
    .catch((err:Error) => {
        errorSwal(err);
    })

   
}