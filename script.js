window.onload = function() {
    // Ambil elemen navbar
    var navbar = document.querySelector('.background-nav');
    navbar.style.opacity = 1;

    var midSection = document.querySelector('.mid');
    midSection.style.opacity = 1;

   
};

    function calculateAndRender() {
      const modal = 70000;
      const hargaPerPorsi = 2000;
      const totalPorsiDijual = 30;

      const totalPendapatan = hargaPerPorsi * totalPorsiDijual;
      const labaBersih = totalPendapatan - modal;

      const resultElement = document.getElementById('result');
      resultElement.classList.add('fade');
      resultElement.innerHTML = `
        <p><strong>Cara Menghitung:</strong></p>
        <p>Total Pendapatan = Harga per porsi x Total porsi dijual = Rp ${hargaPerPorsi.toLocaleString()} x ${totalPorsiDijual} = Rp ${totalPendapatan.toLocaleString()}</p>
        <p>Laba Bersih = Total Pendapatan - Modal = Rp ${totalPendapatan.toLocaleString()} - Rp ${modal.toLocaleString()} = Rp ${labaBersih.toLocaleString()}</p>
        <p>${labaBersih < 0 ? "Rugi" : "Untung"} sebesar Rp ${Math.abs(labaBersih).toLocaleString()}</p>
      `;

      // Render Chart
      const ctx = document.getElementById('salesChart').getContext('2d');
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['Modal', 'Laba Bersih'],
          datasets: [{
            data: [modal, labaBersih],
            backgroundColor: ['#ff6384', '#36a2eb'],
          }],
        },
        options: {
          plugins: {
            legend: {
              display: true,
              position: 'bottom',
            },
          },
        },
      });
    }
