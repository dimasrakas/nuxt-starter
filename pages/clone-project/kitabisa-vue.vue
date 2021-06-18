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
          <div class="flex flex-col items-center justify-center">
            <div
              class="
                flex
                items-center
                justify-center
                w-12
                h-12
                p-2
                mb-2
                bg-gray-100
                rounded-full
                bg-opacity-60
              "
            >
              <img
                class="w-6 h-6"
                src="https://assets.kitabisa.cc/images/categories/icon-bencana.png"
                alt=""
              />
            </div>

            <span class="text-xs text-gray-600">Bencana Alam</span>
          </div>

          <div class="flex flex-col items-center justify-center">
            <div
              class="
                flex
                items-center
                justify-center
                w-12
                h-12
                p-2
                mb-2
                bg-gray-100
                rounded-full
                bg-opacity-60
              "
            >
              <img
                class="w-6 h-6"
                src="https://assets.kitabisa.cc/images/categories/icon-balita.png"
                alt=""
              />
            </div>

            <span class="text-xs text-center text-gray-600">Balita & Anak Sakit</span>
          </div>

          <div class="flex flex-col items-center justify-center">
            <div
              class="
                flex
                items-center
                justify-center
                w-12
                h-12
                p-2
                mb-2
                bg-gray-100
                rounded-full
                bg-opacity-60
              "
            >
              <img class="w-6 h-6" src="https://assets.kitabisa.cc/images/categories/icon-medis.png" alt="" />
            </div>

            <span class="text-xs text-center text-gray-600">Bantuan Medis</span>
          </div>

          <div class="flex flex-col items-center justify-center">
            <div
              class="
                flex
                items-center
                justify-center
                w-12
                h-12
                p-2
                mb-2
                bg-gray-100
                rounded-full
                bg-opacity-60
              "
            >
              <img class="w-6 h-6" src="https://assets.kitabisa.cc/images/categories/icon-list.png" alt="" />
            </div>

            <span class="text-xs text-center text-gray-600">Lainnya</span>
          </div>
        </div>

        <div class="grid divide-y">
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
            <img
              class="w-auto h-14"
              src="https://assets.kitabisa.cc/images/home/btn-google-play.png"
              alt=""
            />
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

    <!-- Bottom Navigation -->
    <div class="fixed inset-x-0 bottom-0">
      <div class="grid max-w-full grid-cols-5 py-3 mx-auto bg-white border-t gap-x-4 sm:max-w-md md:max-w-md">
        <div class="flex flex-col items-center justify-center text-blue-400">
          <img
            class="w-auto h-6 mb-2"
            src="https://assets.kitabisa.cc/images/home/bottom-navigation/home_navbar_active.svg"
            alt=""
          />
          <div class="text-center">
            <span class="block text-xs leading-none">Donasi</span>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center text-gray-400">
          <img
            class="w-auto h-6 mb-2"
            src="https://assets.kitabisa.cc/images/home/bottom-navigation/plus_navbar.svg"
            alt=""
          />
          <div class="text-center">
            <span class="block text-xs leading-none">Galang Dana</span>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center text-gray-400">
          <img
            class="w-auto h-6 mb-2"
            src="https://assets.kitabisa.cc/images/home/bottom-navigation/donasi_navbar.svg"
            alt=""
          />
          <div class="text-center">
            <span class="block text-xs leading-none">Donasi Saya</span>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center text-gray-400">
          <img
            class="w-auto h-6 mb-2"
            src="https://assets.kitabisa.cc/images/home/bottom-navigation/inbox_navbar.svg"
            alt=""
          />
          <div class="text-center">
            <span class="block text-xs leading-none">Inbox</span>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center text-gray-400">
          <img
            class="w-auto h-6 mb-2"
            src="https://assets.kitabisa.cc/images/home/bottom-navigation/account_navbar.svg"
            alt=""
          />
          <div class="text-center">
            <span class="block text-xs leading-none">Akun</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
