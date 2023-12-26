document.addEventListener('DOMContentLoaded', function () {
    // Tanggal ulang tahun (format: tahun, bulan-1, tanggal)
    var birthday = new Date(2023, 11, 27);

    function updateCountdown() {
        var currentTime = new Date();
        var timeDifference = birthday - currentTime;

        var currentTime = new Date();

        // Hitungan mundur dalam detik
        var countdown = 10;


        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        
        document.getElementById('days').innerHTML = days ;
        document.getElementById('hours').innerHTML = hours ;
        document.getElementById('minutes').innerHTML = minutes ;
        document.getElementById('seconds').innerHTML = seconds ;


        if (timeDifference <= 0) {
           
            // Redirect to another page
            window.location.href = 'copy.html';
        }
    }

    // Update setiap detik
    setInterval(updateCountdown, 1000);



    var currentTime = new Date();

    // Hitungan mundur dalam detik
    var countdown = 10;

     const countdownElement = document.getElementById('countdown');
    const confettiElement = document.getElementById('confetti');
    const lightSwitchElement = document.getElementById('lightSwitch');

    // Fungsi untuk menampilkan hitungan mundur
    function displayCountdown() {
        console.log('Hitungan mundur: ' + countdown + ' detik');
    }

    // Menampilkan hitungan mundur awal
    displayCountdown();

        // Mengurangi hitungan mundur setiap detik
        var countdownInterval = setInterval(function () {
            countdown--;

            // Menampilkan hitungan mundur
            displayCountdown();

            // Jika hitungan mundur mencapai 0, hentikan interval
              if (countdown <= 0) {
            console.log('Hitungan mundur selesai!');
            clearInterval(countdownInterval);

            // Tambahkan animasi fade out saat menyembunyikan countdown
            countdownElement.style.transition = 'opacity 1s';
            countdownElement.style.opacity = 0;

            // Setelah animasi selesai, sembunyikan countdown
            setTimeout(() => {
                countdownElement.style.display = 'none';
            }, 3000);

            // Tambahkan animasi fade in saat menampilkan lightSwitch
            lightSwitchElement.style.opacity = 0;
            lightSwitchElement.style.display = 'block';
            lightSwitchElement.offsetHeight; // Trigger reflow
            lightSwitchElement.style.transition = 'opacity 1s';
            lightSwitchElement.style.opacity = 1;

            // Tambahkan animasi saat menampilkan confetti
            confettiElement.style.display = 'none';
            confettiElement.style.animation = 'opacity 1s';

            // Setelah animasi selesai, hapus animasi dan atur ulang display
            setTimeout(() => {
                confettiElement.style.animation = '';
            }, 1000);
        }
        }, 1000);
});


