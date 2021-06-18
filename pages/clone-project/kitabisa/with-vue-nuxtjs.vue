<template>
  <!-- Content -->
  <div class="flex flex-col max-w-full mx-auto space-y-2 sm:max-w-md md:max-w-md">
    <div class="grid px-4 py-6 bg-white gap-y-4">
      <h3 class="text-lg">Ingin Menggalang Dana ?</h3>
      <button class="block w-full py-3 font-semibold text-white bg-blue-500 rounded-full">
        Galang Dana Sekarang
      </button>
      <button class="block w-full py-3 font-semibold text-blue-500 border border-blue-500 rounded-full">
        Tanya Tentang Galang Dana
      </button>
    </div>

    <div class="grid p-4 bg-white gap-y-4">
      <img
        src="http://firebase-kanvas.imgix.net/web_homebanner/homebanner/juni/ASKA7jun.jpg?auto=compress,format&cs=tinysrgb&fm=pjpg&fit=clip&w=448"
        alt=""
      />
    </div>

    <div class="grid grid-cols-4 gap-4 p-4 bg-white">
      <div class="flex flex-col items-center">
        <img
          class="w-16 h-16 mb-2"
          src="https://firebase-kanvas.imgix.net/tile_homepage/icon-donasi.png?auto=compress,format&cs=tinysrgb&fm=png&fit=clip&dpr=1"
          alt=""
        />
        <span class="text-sm text-gray-500">Donasi</span>
      </div>
      <div class="flex flex-col items-center">
        <img
          class="w-16 h-16 mb-2"
          src="https://firebase-kanvas.imgix.net/tile_homepage/icon-zakat.png?auto=compress,format&cs=tinysrgb&fm=png&fit=clip&dpr=1"
          alt=""
        />
        <span class="text-sm text-gray-500">Zakat</span>
      </div>
      <div class="flex flex-col items-center">
        <img
          class="w-16 h-16 mb-2"
          src="https://firebase-kanvas.imgix.net/tile_homepage/icon-kbplus.png?auto=compress,format&cs=tinysrgb&fm=png&fit=clip&dpr=1"
          alt=""
        />
        <span class="text-sm text-gray-500">Saling Jaga</span>
      </div>
      <div class="flex flex-col items-center">
        <img
          class="w-16 h-16 mb-2"
          src="https://firebase-kanvas.imgix.net/tile_homepage/menu_galang_dana.png?auto=compress,format&cs=tinysrgb&fm=png&fit=clip&h=150&w=150&dpr=1"
          alt=""
        />
        <span class="text-sm text-gray-500">Galang Dana</span>
      </div>
    </div>

    <div class="p-4 bg-white">
      <h4 class="mb-4 text-gray-700">Penggalangan Dana Mendesak</h4>

      <div class="flex pb-4 overflow-x-scroll">
        <div class="flex -mx-3 flex-nowrap">
          <div class="inline-block px-3">
            <div class="w-64 border rounded-md shadow-lg">
              <img
                src="https://imgix.kitabisa.com/1c6c5fd0-0557-487d-b823-3db108ad9291.jpg?ar=16:9&w=280&auto=format,compress"
                alt=""
                class="rounded-t-md"
              />
              <div class="flex flex-col p-3 space-y-3">
                <span class="text-xs text-gray-600 line-clamp-1"
                  >Puluhan Rumah dan Rumah Ibadah Hancur Di Maluku
                </span>
                <div class="relative h-2 bg-gray-200 rounded-full">
                  <div style="width: 30%" class="h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div class="flex justify-between text-xs text-gray-400">
                  <span> Rp 11.985.237 </span>
                  <span> 196 hari lagi</span>
                </div>
              </div>
            </div>
          </div>

          <div class="inline-block px-3">
            <div class="w-64 border rounded-md shadow-lg">
              <img
                src="https://imgix.kitabisa.com/63390d28-e380-4be7-800e-422da266e49d.jpg?ar=16:9&w=280&auto=format,compress"
                alt=""
                class="rounded-t-md"
              />
              <div class="flex flex-col p-3 space-y-3">
                <span class="text-xs text-gray-600 line-clamp-1"
                  >Puluhan Rumah dan Rumah Ibadah Hancur Di Maluku
                </span>
                <div class="relative h-2 bg-gray-200 rounded-full">
                  <div style="width: 30%" class="h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div class="flex justify-between text-xs text-gray-400">
                  <span> Rp 11.985.237 </span>
                  <span> 196 hari lagi</span>
                </div>
              </div>
            </div>
          </div>

          <div class="inline-block px-3">
            <div class="w-64 border rounded-md shadow-lg">
              <img
                src="https://imgix.kitabisa.com/47af4d00-1c7e-4f20-93c6-39f15cf451ea.jpg?ar=16:9&w=280&auto=format,compress"
                alt=""
                class="rounded-t-md"
              />
              <div class="flex flex-col p-3 space-y-3">
                <span class="text-xs text-gray-600 line-clamp-1"
                  >Puluhan Rumah dan Rumah Ibadah Hancur Di Maluku
                </span>
                <div class="relative h-2 bg-gray-200 rounded-full">
                  <div style="width: 30%" class="h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div class="flex justify-between text-xs text-gray-400">
                  <span> Rp 11.985.237 </span>
                  <span> 196 hari lagi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <img
        src="https://firebase-kanvas.imgix.net/kilasbalik/qurbanexplore18jun.png?auto=compress,format&cs=tinysrgb&fm=png&fit=clip&dpr=2"
        alt=""
        class="my-4"
      />
    </div>

    <div class="p-4 bg-white">
      <h4 class="mb-4 text-gray-700">Pilih kategori Favoritmu</h4>

      <div class="grid grid-cols-4 mb-8">
        <div class="flex flex-col items-center justify-center" @click="showPreloader()">
          <div
            class="flex items-center justify-center w-12 h-12 p-2 mb-2 bg-gray-100 rounded-full bg-opacity-60"
          >
            <img class="w-6 h-6" src="https://assets.kitabisa.cc/images/categories/icon-bencana.png" alt="" />
          </div>

          <span class="text-xs text-gray-600">Bencana Alam</span>
        </div>

        <div class="flex flex-col items-center justify-center" @click="showPreloader()">
          <div
            class="flex items-center justify-center w-12 h-12 p-2 mb-2 bg-gray-100 rounded-full bg-opacity-60"
          >
            <img class="w-6 h-6" src="https://assets.kitabisa.cc/images/categories/icon-balita.png" alt="" />
          </div>

          <span class="text-xs text-center text-gray-600">Balita & Anak Sakit</span>
        </div>

        <div class="flex flex-col items-center justify-center" @click="showPreloader()">
          <div
            class="flex items-center justify-center w-12 h-12 p-2 mb-2 bg-gray-100 rounded-full bg-opacity-60"
          >
            <img class="w-6 h-6" src="https://assets.kitabisa.cc/images/categories/icon-medis.png" alt="" />
          </div>

          <span class="text-xs text-center text-gray-600">Bantuan Medis</span>
        </div>

        <div class="flex flex-col items-center justify-center" @click="showPreloader()">
          <div
            class="flex items-center justify-center w-12 h-12 p-2 mb-2 bg-gray-100 rounded-full bg-opacity-60"
          >
            <img class="w-6 h-6" src="https://assets.kitabisa.cc/images/categories/icon-list.png" alt="" />
          </div>

          <span class="text-xs text-center text-gray-600">Lainnya</span>
        </div>
      </div>

      <div v-if="isLoading" class="grid divide-y">
        <div v-for="index in 3" :key="index" class="flex py-4">
          <div class="flex-none w-48 h-32 rounded-md bg-gray-200 animate-pulse"></div>
          <div class="flex flex-col pl-4 space-y-3">
            <div class="h-3 rounded-full bg-gray-200 animate-pulse w-48"></div>

            <div class="h-3 rounded-full bg-gray-200 animate-pulse w-20"></div>

            <div class="h-3 rounded-full bg-gray-200 animate-pulse w-full"></div>

            <div class="h-3 my-8 rounded-full bg-gray-200 animate-pulse w-full"></div>
          </div>
        </div>
      </div>

      <div v-else class="grid divide-y">
        <div class="flex py-4">
          <div class="flex-none w-48 h-32 rounded-md">
            <img
              class="flex-none w-48 h-32 rounded-md"
              src="https://imgix.kitabisa.com/17d7e446-01b7-43ff-bc6d-c5d4f646a170.jpg?ar=16:9&w=214&auto=format,compress"
              alt=""
            />
          </div>
          <div class="flex flex-col pl-4 space-y-3">
            <span class="text-xs">Sedekah Jariyah 10.000 Quran untuk Korban Bencana</span>

            <span class="text-[10px] text-gray-500 flex items-center"
              >Rumah Zakat
              <img
                class="h-3 ml-1"
                src="https://assets.kitabisa.cc/images/icons/icon__verified-org.svg"
                alt=""
              />
            </span>

            <div class="relative w-full h-1 bg-gray-200 rounded-full">
              <div style="width: 10%" class="absolute h-1 bg-blue-400 rounded-full"></div>
            </div>

            <div class="flex justify-between">
              <div class="text-left">
                <h5 class="text-[10px] text-gray-500">Terkumpul</h5>
                <h4 class="text-xs font-semibold">Rp 61.620.104</h4>
              </div>
              <div class="text-right">
                <h5 class="text-[10px] text-gray-500">Sisa hari</h5>
                <h4 class="text-xs font-semibold">8</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="flex py-4">
          <div class="flex-none w-48 h-32 rounded-md">
            <img
              class="flex-none w-48 h-32 rounded-md"
              src="https://imgix.kitabisa.com/b45a90fd-10a1-4bb1-ac9f-10b58d88f0a8.jpg?ar=16:9&w=214&auto=format,compress"
              alt=""
            />
          </div>
          <div class="flex flex-col pl-4 space-y-3">
            <span class="text-xs">Sedekah Jariyah 10.000 Quran untuk Korban Bencana</span>

            <span class="text-[10px] text-gray-500 flex items-center"
              >Rumah Zakat
              <img
                class="h-3 ml-1"
                src="https://assets.kitabisa.cc/images/icons/icon__verified-org.svg"
                alt=""
              />
            </span>

            <div class="relative w-full h-1 bg-gray-200 rounded-full">
              <div style="width: 60%" class="absolute h-1 bg-blue-400 rounded-full"></div>
            </div>

            <div class="flex justify-between">
              <div class="text-left">
                <h5 class="text-[10px] text-gray-500">Terkumpul</h5>
                <h4 class="text-xs font-semibold">Rp 61.620.104</h4>
              </div>
              <div class="text-right">
                <h5 class="text-[10px] text-gray-500">Sisa hari</h5>
                <h4 class="text-xs font-semibold">8</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="flex py-4">
          <div class="flex-none w-48 h-32 rounded-md">
            <img
              class="flex-none w-48 h-32 rounded-md"
              src="https://imgix.kitabisa.com/7ee07cb4-9b80-41aa-8ab0-fd209df300c1.jpg?ar=16:9&w=214&auto=format,compress"
              alt=""
            />
          </div>
          <div class="flex flex-col pl-4 space-y-3">
            <span class="text-xs">Sedekah Jariyah 10.000 Quran untuk Korban Bencana</span>

            <span class="text-[10px] text-gray-500 flex items-center"
              >Rumah Zakat
              <img
                class="h-3 ml-1"
                src="https://assets.kitabisa.cc/images/icons/icon__verified-org.svg"
                alt=""
              />
            </span>

            <div class="relative w-full h-1 bg-gray-200 rounded-full">
              <div style="width: 80%" class="absolute h-1 bg-blue-400 rounded-full"></div>
            </div>

            <div class="flex justify-between">
              <div class="text-left">
                <h5 class="text-[10px] text-gray-500">Terkumpul</h5>
                <h4 class="text-xs font-semibold">Rp 61.620.104</h4>
              </div>
              <div class="text-right">
                <h5 class="text-[10px] text-gray-500">Sisa hari</h5>
                <h4 class="text-xs font-semibold">8</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="py-4">
          <div class="flex items-center justify-center">
            <button class="w-56 py-2 text-sm text-blue-500 rounded-full bg-blue-50">Lihat Semua</button>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 py-8 bg-white">
      <div class="flex flex-col items-center justify-center">
        <h4 class="mb-6 text-lg font-medium">Download Aplikasi Kitabisa!</h4>
        <p class="px-10 mb-6 text-center text-gray-700">
          Lebih cepat, bisa donasi mulai Rp 1.000, dan tidak memakan banyak memori ponsel.
        </p>

        <div class="flex space-x-4">
          <img class="w-auto h-14" src="https://assets.kitabisa.cc/images/home/btn-google-play.png" alt="" />
          <img class="w-auto h-14" src="https://assets.kitabisa.cc/images/home/btn-app-store.png" alt="" />
        </div>

        <div class="flex mt-6 text-gray-400">
          <div>Tentang Kitabisa | Syarat & Ketentuan | Pusat Bantuan</div>
        </div>

        <div class="grid grid-cols-7 mt-6 gap-x-4">
          <div class="flex items-center justify-center p-2 bg-gray-300 rounded-full">
            <img
              class="w-4 h-4"
              src="https://assets.kitabisa.cc/images/icons/footer/icon-socmed-fb.svg"
              alt=""
            />
          </div>
          <div class="flex items-center justify-center p-2 bg-gray-300 rounded-full">
            <img
              class="w-4 h-4"
              src="https://assets.kitabisa.cc/images/icons/footer/icon-socmed-twitter.svg"
              alt=""
            />
          </div>
          <div class="flex items-center justify-center p-2 bg-gray-300 rounded-full">
            <img
              class="w-4 h-4"
              src="https://assets.kitabisa.cc/images/icons/footer/icon-socmed-instagram.svg"
              alt=""
            />
          </div>
          <div class="flex items-center justify-center p-2 bg-gray-300 rounded-full">
            <img
              class="w-4 h-4"
              src="https://assets.kitabisa.cc/images/icons/footer/icon-socmed-youtube.svg"
              alt=""
            />
          </div>
          <div class="flex items-center justify-center p-2 bg-gray-300 rounded-full">
            <img
              class="w-4 h-4"
              src="https://assets.kitabisa.cc/images/icons/footer/icon-socmed-tiktok.svg"
              alt=""
            />
          </div>
          <div class="flex items-center justify-center p-2 bg-gray-300 rounded-full">
            <img
              class="w-4 h-4"
              src="https://assets.kitabisa.cc/images/icons/footer/icon-linkedin.svg"
              alt=""
            />
          </div>
          <div class="flex items-center justify-center p-2 bg-gray-300 rounded-full">
            <img
              class="w-4 h-4"
              src="https://assets.kitabisa.cc/images/icons/footer/icon-urbanhire.svg"
              alt=""
            />
          </div>
        </div>

        <hr class="w-full mt-8" />

        <span class="py-8 text-sm text-center text-gray-400 pb-28"
          >Copyright © 2021 Dimas Raka Septiawan. All Rights Reserved
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'clone/kitabisa',
  data() {
    return {
      isLoading: false,
    }
  },

  methods: {
    showPreloader() {
      this.isLoading = true

      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },
  },
}
</script>

<style lang="scss" scoped></style>
