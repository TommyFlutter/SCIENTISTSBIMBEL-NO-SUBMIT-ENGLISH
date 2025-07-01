//* eslint-disable linebreak-style */

import { createRestaurantItemTemplate } from '../templates/template-creator';
import data from '../../data/DATA.json';

const DaftarResto = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">🗣️ Tingkatkan Kemampuan Bahasa Inggrismu dengan Kelas General English Conversation!
Kamu ingin bisa berbicara bahasa Inggris dengan percaya diri dalam situasi sehari-hari?</h2>
<h2>Ingin lancar berbicara dengan teman kerja, atau saat traveling ke luar negeri?</h2>

<h2>🎯 General English Conversation hadir untuk membantumu menguasai bahasa Inggris secara alami dan menyenangkan!</h2>
<h2>✨ Apa yang Kamu Dapatkan?</h2>
<h2>💬 Latihan percakapan langsung dengan tutor profesional</h2>
<h2>🧠 Materi praktis untuk situasi nyata: perkenalan, wawancara kerja, traveling, hingga diskusi santai</h2>
<h2>🎯 Peningkatan kemampuan listening & speaking secara signifikan</h2>
<h2>🤝 Lingkungan belajar yang interaktif dan mendukung</h2>
<h2>📱 Fleksibel: Kursus online/offline sesuai preferensimu</h2>
<h2>👩🏫 Cocok Untuk:</h2>
<h2>*Pelajar & mahasiswa</h2>
<h2>*Profesional yang ingin meningkatkan komunikasi di tempat kerja</h2>
<h2>*Siapa saja yang ingin fasih berbahasa Inggris tanpa rasa takut salah</h2>

<h2>📅 Ayo Daftar Sekarang dan Mulailah Percakapan Pertamamu dalam Bahasa Inggris!</h2>

<h2>💬 Kuota terbatas – Jangan sampai kehabisan!</h2>

<h2>👉 [Daftar Sekarang] | Hubungi kami di : BIMBEL SCIENTISTS WA 0858 8652 8913 </h2>

<h2>Pada Peta di bawah ini Bimbel Scientists tepat 4 Ruko di sebelah kanan Indomaret.MBJ</h2>
       <iframe width="300" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Indomaret.MBJ%20Bekasi+(Indomaret.MBJ)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='http://mapseinbinden.org'>google map einbinden</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=5010edb6be0de404a8a688adb338d3bbe218f252'></script>


        <div id="restaurant-list" class="restaurant-list">
        </div>
      </div>
    `;
  },

  async afterRender() {
    try {
      console.log('API Response:', data); // Check the structure of `data`
      const restaurantListContainer = document.querySelector('#restaurant-list');
      for (let i=0; i<data.books.length; i++){
        restaurantListContainer.innerHTML += createRestaurantItemTemplate(data.books[i]);  // panggil method dari template
      }
      const restaurants = data.restaurants || []; // Adjust this based on the actual key
      if (Array.isArray(restaurants)) {
        restaurants.forEach((restaurant) => {
          restaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
      } else {
        throw new Error('Invalid data format: expected an array');
      }
    } catch (error) {
      console.error('Error in afterRender:', error);
      document.querySelector('#restaurant-list').innerHTML = '<p>Failed to load restaurants.</p>';
    }
  },
};

export default DaftarResto;


