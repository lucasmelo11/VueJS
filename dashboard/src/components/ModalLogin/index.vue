<template>
  <div class="flex justify-between">
    <h1 class="text-4xl font-black text-gray-800">Entre em sua Conta</h1>
    <button class="text-4xl text-gray-600 focus:outline-none">&times;</button>
  </div>
  <div class="mt-16">
    <form @submit.prevent="handleSubmit">
      <!-- Usuário/Email -->
      <label class="block">
        <span class="text-lg font-medium text-gray-800">E-mail</span>
        <input
          type="email"
          v-model="state.email.value"
          :class="{ 'border-brand-danger': !!state.email.errorMessage }"
          class="
            block
            w-full
            px-4
            py-3
            mt-1
            text-lg
            bg-gray-100
            border-2 border-transparent
            rounded
          "
          placeholder="joe.parker@email.com"
        />
        <span
          v-if="!!state.email.errorMessage"
          class="block font-medium text-brand-danger"
          >{{ state.email.errorMessage }}</span
        >
      </label>
      <!-- Senha -->
      <label class="block mt-9">
        <span class="text-lg font-medium text-gray-800">Senha</span>
        <input
          type="password"
          v-model="state.password.value"
          :class="{ 'border-brand-danger': !!state.password.errorMessage }"
          class="
            block
            w-full
            px-4
            py-3
            mt-1
            text-lg
            bg-gray-100
            border-2 border-transparent
            rounded
          "
        />
        <span
          v-if="!!state.password.errorMessage"
          class="block font-medium text-brand-danger"
          >{{ state.password.errorMessage }}</span
        >
      </label>
      <button
        :disabled="state.isLoading"
        type="submit"
        :class="{
          'opacity-50': state.isLoading,
        }"
        class="
          px-8
          py-3
          mt-10
          text-2xl
          font-bold
          text-white
          rounded-full
          bg-brand-main
          focus:outline-none
          transition-all
          duration-150
        "
      >
        Entrar
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import useModal from "../../hooks/useModal";
import { useField } from "vee-validate";
import {validateEmptyAndEmail, validateEmptyAndLenght6} from '../../utils/validators'

export default {
  setup() {
    const modal = useModal();
    const { value: emailValue, errorMessage: emailErrorMessage } =
      useField('email', validateEmptyAndEmail);

    const { value: passwordValue, errorMessage: passwordErrorMessage } =
      useField('password', validateEmptyAndLenght6);

    const state = reactive({
      hasErrors: false,
      isLoading: false,
      email: {
        value: emailValue,
        errorMessage: emailErrorMessage,
      },
      password: {
        value: passwordValue,
        errorMessage: passwordErrorMessage,
      },
    });
    function handleSubmit() {}
    return {
      state,
      close: modal.close,
      handleSubmit,
    };
  },
};
</script>