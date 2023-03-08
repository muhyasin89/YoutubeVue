import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

import { useRouter } from "vue-router";

import { errorSwal } from "../utility/errorSwal";

export interface formLogin{
    username: string,
    password: string
}

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


  function updateHost(host: any) {
    host.value = host;
  }

  return { host, isAuthenticate, token, updateHost };
});
