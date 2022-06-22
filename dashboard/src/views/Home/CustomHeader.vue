<template>
  <!-- container principal -->
  <header class="header">
    <!-- Segundo container -->
    <div class="header-group">
      <div class="flex items-center justify-between py-10">
        <!-- Logo do site -->
        <div class="w-28 lg:w-36">
          <img src="../../assets/images/logo_white.png" alt="logo" />
        </div>
        <!-- Botão de cadastro -->
        <div class="flex">
          <button
          @click="() => emit('create-account')"
            class="
              px-6
              py-2
              font-bold
              rounded-full
              text-white
              focus:outline-none
            "
          >
            Crie uma conta
          </button>
          <!-- Botão de Login -->
          <button
          @click="() => emit('login')"
            class="
              px-6
              py-2
              font-bold
              bg-white
              rounded-full
              text-brand-main
              focus:outline-none
            "
          >
            Entrar
          </button>
        </div>
      </div>

      <div class="flex flex-col mt-28">
        <h1 class="text-4xl font-black text-white">
          Receba feedbacks <br />
          E saiba como upar seus <br class="hidden lg:inline-block" />
          serviços!
        </h1>
        <p class="text-lg font-medium text-white">
          Receba ideias, reclamações e feedbacks <br />
          com um simples widget em sua página.
          <br class="hidden lg:inline-block" />
        </p>
        <div>
          <button
            class="
              px-6
              py-2
              font-bold
              bg-white
              rounded-full
              text-brand-main
              focus:outline-none
            "
          >
            Crie uma conta Free
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  setup(props,{emit}){
    return {emit}
  }
};
</script>

<style lang="postcss" scoped>
.header {
  @apply bg-brand-main w-full flex justify-center;
  height: 700px;
}

.header-group {
  @apply flex flex-col w-4/5 max-w-6xl;
}

@media (min-width: 980px) {
  .header-group {
    background-image: url(../../assets/images/blue_balloons.png);
    background-size: 628px;
    background-position: 90% 100%;
    background-repeat: no-repeat;
  }
}
</style>