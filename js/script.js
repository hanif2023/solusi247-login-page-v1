// CREATE SLIDING CONTENT LOGIN
const container = document.querySelector(".container-solusi247");
const loginBtn = document.querySelector(".bg-solusi247 button");
const banner = document.querySelector(".banner-solusi247 p");

let isClicked = false; // Menambahkan variabel status

loginBtn.addEventListener('click', () => {
    container.classList.toggle("change");
    banner.classList.toggle("change-font");

    if (!isClicked) { // Jika tombol belum diklik sebelumnya
        loginBtn.innerHTML = '<i class="bx bx-chevrons-right"></i>'; // Mengganti ikon dengan ikon bx bx-chevrons-right
    } else { // Jika tombol sudah diklik sebelumnya
        loginBtn.innerText = 'Employee Login'; // Mengganti teks kembali ke "Employee Login"
    }

    isClicked = !isClicked; // Toggle nilai variabel status
});



// CHANGE ICON PASSWORD HIDE
const passwordInput = document.getElementById('password');
const hidePasswordIcon = document.getElementById('hide-password');
const showPasswordIcon = document.getElementById('show-password');

hidePasswordIcon.addEventListener('click', () => {
    passwordInput.type = 'text';
    hidePasswordIcon.style.display = 'none';
    showPasswordIcon.style.display = 'block';
});

showPasswordIcon.addEventListener('click', () => {
    passwordInput.type = 'password';
    hidePasswordIcon.style.display = 'block';
    showPasswordIcon.style.display = 'none';
});
