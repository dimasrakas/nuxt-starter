<template>
  <div class="relative">
    <!-- Header Navigation -->
    <div class="w-full px-4 py-4 bg-blue-400 sticky top-0 z-40">
      <div class="flex items-center max-w-lg mx-auto">
        <img
          class="w-8 h-8 mr-3"
          src="https://assets.kitabisa.cc/images/logos/logogram__ktbs_white.png"
          alt=""
        />
        <div class="flex items-center justify-between w-full h-8 px-4 bg-white rounded-full bg-opacity-20">
          <div class="text-xs font-light text-white">Coba cari "Tolong menolong"</div>
          <div>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              class="w-3 h-3 text-white fill-current"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <Nuxt />

    <!-- Bottom Navigation -->
    <div class="fixed inset-x-0 bottom-0">
      <div class="grid max-w-full grid-cols-5 py-3 mx-auto bg-white border-t gap-x-4 sm:max-w-md md:max-w-md">
        <NuxtLink
          to="/clone-project/kitabisa/with-vue-nuxtjs"
          class="flex flex-col items-center justify-center text-blue-400"
        >
          <img
            class="w-auto h-6 mb-2"
            src="https://assets.kitabisa.cc/images/home/bottom-navigation/home_navbar_active.svg"
            alt=""
          />
          <div class="text-center">
            <span class="block text-xs leading-none">Donasi</span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/clone-project/kitabisa/galangdana"
          class="flex flex-col items-center justify-center text-gray-400"
        >
          <img
            class="w-auto h-6 mb-2"
            src="https://assets.kitabisa.cc/images/home/bottom-navigation/plus_navbar.svg"
            alt=""
          />
          <div class="text-center">
            <span class="block text-xs leading-none">Galang Dana</span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/clone-project/kitabisa/donasisaya"
          class="flex flex-col items-center justify-center text-gray-400"
        >
          <img
            class="w-auto h-6 mb-2"
            src="https://assets.kitabisa.cc/images/home/bottom-navigation/donasi_navbar.svg"
            alt=""
          />
          <div class="text-center">
            <span class="block text-xs leading-none">Donasi Saya</span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/clone-project/kitabisa/inbox"
          class="flex flex-col items-center justify-center text-gray-400"
        >
          <img
            class="w-auto h-6 mb-2"
            src="https://assets.kitabisa.cc/images/home/bottom-navigation/inbox_navbar.svg"
            alt=""
          />
          <div class="text-center">
            <span class="block text-xs leading-none">Inbox</span>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/clone-project/kitabisa/akun"
          class="flex flex-col items-center justify-center text-gray-400"
        >
          <img
            class="w-auto h-6 mb-2"
            src="https://assets.kitabisa.cc/images/home/bottom-navigation/account_navbar.svg"
            alt=""
          />
          <div class="text-center">
            <span class="block text-xs leading-none">Akun</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
