import axios from "axios";
import Swal from "sweetalert2";
import { useRootStore } from "../store/root";

export const DeleteRecord = (url: string, id: number) => {
  const root = useRootStore();
  new Swal({
    title: "Are you sure?",
    text: "You won't be able to revert this! Delete item id:" + id,
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "No, cancel!",
    buttonsStyling: true,
  }).then((result: any) => {
    if (result.isConfirmed) {
      axios
        .delete(root.host + url)
        .then((response) => {})
        .then(function (response: any) {
          Swal.fire("Delete Success", "You Have Delete item " + id, "success");
        });
    }
  });
};
