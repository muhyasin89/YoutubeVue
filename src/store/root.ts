import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { errorSwal } from "../utility/errorSwal";
import {formLogin, formLoginInit} from "../types/root";

export const useRootStore = defineStore("root", () => {
  const host = ref("");
  const isAuthenticate = ref(false);
  const token = ref("");

  const setLogin = async (formLogin: formLogin) => {
    const router = useRouter()
    let url ="login/";

    await axios.post(host.value+ url, formLogin)
    .then((response) => {
        token.value = response.data.token;
        axios.defaults.headers["Authorization"] = `Token ${token.value}`;
        router.push({'name':'login'})
    })
    .catch((err:Error) => {
        errorSwal(err);
    });
  }

  const Logout = async () => {
    const router = useRouter()
    let url ="logout/";

    await axios.post(host.value+ url, formLoginInit)
    .then((response) => {
        token.value = "";
        axios.defaults.headers["Authorization"] = "";
        router.push({'name':'login'})
    })
    .catch((err:Error) => {
        errorSwal(err);
    });

  }


  function updateHost(host: any) {
    host.value = host;
  }

  return { host, isAuthenticate, token, updateHost, setLogin, Logout };
});
