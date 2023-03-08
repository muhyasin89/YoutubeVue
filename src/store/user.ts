import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user", () => {
  const userData = ref("");

  function updateUserData(user: any) {
    userData.value = user;
  }

  return { userData, updateUserData };
});
