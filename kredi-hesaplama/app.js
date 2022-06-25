console.log('**** Kredi Hesaplama *******');
const select = document.querySelector('.form-select');
const vade = document.querySelector('#vade');
const tutar = document.querySelector('#tutar');
const hesaplaBtn = document.querySelector('.btn-dark');
let oran = 0;
let taksit = 0;

hesaplaBtn.addEventListener('click', (e) => {
  //? preventDefault() event'ın default davranaışı (submit etmek ve formu silmek) engeller
  e.preventDefault();
  if (select.value === 'Konut Kredisi') {
    oran = 1.29;
  } else if (select.value === 'Ihtiyac Kredisi') {
    oran = 1.99;
  } else if (select.value === 'Arac Kredisi') {
    oran = 1.79;
  }
  if (!select.value || !vade.value || !tutar.value) {
    alert('Lutfen Kredi turu, Vade ve tutari giriniz');
  }

  const faiz = oran / 100;
  taksit =
    (tutar.value * (faiz * (1 + faiz) ** vade.value)) /
    ((1 + faiz) ** vade.value - 1);

  // console.log(taksit);
  sonuclariGoster();
});
const sonuclariGoster = () => {
  const sonuclar = document.querySelector('.sonuclar');

  sonuclar.innerHTML = `
  <h2 class="mt-3 text-warning">Kredi Bilgileri</h2>
  <table class="table table-bordered border-warning  mt-4">
   <tbody>
    <tr>
      <th>Kredi Miktari</th>
      <td>${tutar.value} ₺</td>
      <th>Kredi Tipi</th>
      <td>${select.value}</td>
    </tr>
    <tr>
      <th>Vade</th>
      <td>${vade.value}</td>
      <th>Faiz Orani</th>
      <td>${oran}</td>
    </tr>
    <tr>
      <th>Toplam Tutar</th>
      <td>${(taksit * vade.value).toFixed(2)} ₺</td>
      <th>Taksit Tutari</th>
      <td>${taksit.toFixed(2)} ₺</td>
    </tr>
  </tbody>

</table>

  `;
};