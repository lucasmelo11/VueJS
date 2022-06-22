<template>
  <custom-header @create-account="userAccountCreate" @login="userLogin" />
  <contacts-area />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker © 2022</p>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import CustomHeader from "./CustomHeader.vue";
import ContactsArea from "./Contacts-index.vue";
import useModal from "../../hooks/useModal.js";

export default {
  components: {
    CustomHeader,
    ContactsArea,
  },
  setup() {
    // Use o Router
    const router = useRouter();
    const modal = useModal();
    //  Ao montar minha view pegue o token
    onMounted(() => {
      const token = window.localStorage.getItem("token");
      //  Se o token for válido, mova o usuário para a página de feedbacks
      if (token) {
        router.push({ name: "Feedbacks" });
      }
    });

    function userLogin() {
      console.log("clicou no login");
      modal.open({
        component: "ModalLogin",
      });
    }
    function userAccountCreate() {
      modal.open({
        component: "ModalAccountCreate",
      });
    }
    return {
      userLogin,
      userAccountCreate,
    };
  },
};
</script>
