<template>
  <div>
    <section class="w-full bg-gray-100">
      <div class="py-10 mx-auto max-w-8xl px-4 sm:px-4 md:px-8">
        <div class="flex flex-col mt-10 md:flex-row md:mt-8 md:space-x-8">
          <NuxtLink
            to="/clone-project/kitabisa/with-tailwindcss"
            class="
              flex flex-col
              items-center
              justify-center
              flex-1
              overflow-hidden
              text-center
              bg-white
              md:rounded-xl
            "
          >
            <div class="flex flex-col px-10 pb-5 space-y-6 pt-14 md:px-8">
              <h3 class="text-4xl font-bold leading-none md:text-5xl">Kitabisa.com</h3>
              <p class="text-xl font-light text-gray-800">Clone with TailwindCSS only</p>
            </div>
            <img
              src="https://3.bp.blogspot.com/-cA93BTgAH40/WdoI08ydP1I/AAAAAAAAAE0/LBAcvvLR4LkhnOdZd2wEwLGejc__9vsLgCLcBGAs/s1600/kita%2Bbisa%2Bpic.png"
              class="w-2/3 rounded-t-3xl"
            />
          </NuxtLink>
          <NuxtLink
            to="/clone-project/kitabisa/with-vue-nuxtjs"
            class="
              flex flex-col
              items-center
              justify-center
              flex-1
              overflow-hidden
              text-center
              bg-white
              md:rounded-xl
            "
          >
            <div class="flex flex-col px-10 pb-5 space-y-6 pt-14 md:px-8">
              <h3 class="text-4xl font-bold leading-none md:text-5xl">Kitabisa.com</h3>
              <p class="text-xl font-light text-gray-800">
                Clone with TailwindCSS and combine with VueJS & NuxtJS
              </p>
            </div>
            <img
              src="https://3.bp.blogspot.com/-cA93BTgAH40/WdoI08ydP1I/AAAAAAAAAE0/LBAcvvLR4LkhnOdZd2wEwLGejc__9vsLgCLcBGAs/s1600/kita%2Bbisa%2Bpic.png"
              class="w-2/3 rounded-t-3xl"
            />
          </NuxtLink>
          <div
            class="
              relative
              flex flex-col
              items-center
              justify-center
              flex-1
              py-32
              mt-10
              overflow-hidden
              text-center
              bg-white
              md:rounded-xl md:mt-0
            "
          >
            <img src="https://cdn.devdojo.com/images/april2021/iphone-12-security.png" class="w-20 h-auto" />
            <div class="flex flex-col px-10 space-y-6 md:px-8">
              <h3 class="text-3xl font-semibold leading-none md:text-4xl">Privacy</h3>
              <p class="text-xl font-light text-gray-800">What you share should be up to you.</p>
              <a
                href="#_"
                class="
                  flex
                  items-center
                  w-auto
                  mx-auto
                  text-lg
                  leading-tight
                  text-center text-blue-600
                  hover:underline
                "
                ><span>Learn more</span>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-4 h-4 ml-0.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path></svg
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
