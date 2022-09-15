profil = document.querySelector(".profils")
passion = document.querySelector(".passions")
projet = document.querySelector(".projets")

info_profil = document.querySelector(".lui")
info_passion = document.querySelector(".passion")
info_projet = document.querySelector(".projet")

function display() {
    profil.addEventListener("click", function() {
        profil.classList.add("active")
        passion.classList.remove("active")
        projet.classList.remove("active")

        info_profil.classList.remove("none")
        info_passion.classList.add("none")
        info_projet.classList.add("none")
    })

    passion.addEventListener("click", function() {
        profil.classList.remove("active")
        passion.classList.add("active")
        projet.classList.remove("active")

        info_profil.classList.add("none")
        info_passion.classList.remove("none")
        info_projet.classList.add("none")
    })

    projet.addEventListener("click", function() {
        profil.classList.remove("active")
        passion.classList.remove("active")
        projet.classList.add("active")

        info_profil.classList.add("none")
        info_passion.classList.add("none")
        info_projet.classList.remove("none")
    })
}

display()