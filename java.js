document.getElementById('fournisseur').addEventListener('change', function() {
    var autreFournisseurInput = document.getElementById('autreFournisseur');
    if (this.value === 'autre') {
        autreFournisseurInput.style.display = 'inline-block';
    } else {
        autreFournisseurInput.style.display = 'none';
    }
});

document.getElementById('Code_Postal').addEventListener('input', function() {
    var codePostal = this.value;
    var codePostalPattern = /^\d{5}$/;
    var codePostalError = document.getElementById('codePostalError');
    if (!codePostalPattern.test(codePostal)) {
        codePostalError.style.display = 'inline-block';
    } else {
        codePostalError.style.display = 'none';
    }
});

document.getElementById('Nom').addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});

window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});