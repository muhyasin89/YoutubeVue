import axios from "axios";
import { useRootStore } from "../store/root";
import { errorSwal } from "../utility/errorSwal";

export const GetDetailRecord = async(url: string) : Promise<any> => {
    let items: any[] = [];
   
    let loaded = false;
    const root = useRootStore()

    return await axios.get(root.host + url)
    .then((response) => {
        items = response.data.results;
        loaded = true;
    })
    .catch((err:Error) => {
        errorSwal(err);
    })

    return  {items, loaded}
}