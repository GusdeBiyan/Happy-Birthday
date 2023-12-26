document.addEventListener('DOMContentLoaded', function () {
    // Tanggal ulang tahun (format: tahun, bulan-1, tanggal)
    var birthday = new Date(2023, 11, 29);

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
    }

    // Update setiap detik
    setInterval(updateCountdown, 1000);



   
});


