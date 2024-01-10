document.querySelector("#back").innerHTML =
    Card("Java", "janeiro de", "2022") +
    Card("Python", "fevereiro de", "2023") +
    Card("C++", "fevereiro de", "2023")

document.querySelector("#front").innerHTML =
    Card("HTML5", "janeiro de", "2022") +
    Card("CSS3", "janeiro de", "2022") +
    Card("Angular", "janeiro de", "2022" ) +
    Card("TypeScript", "janeiro de", "2022") +
    Card("React", "setembro de", "2022" ) +
    Card("JavaScript", "setembro de","2022")

document.querySelector("#software").innerHTML =
    Card("VSCode", "janeiro de", "2022", ) +
    Card("SpringBoot", "janeiro de", "2022") +
    Card("MySQL", "janeiro de", "2022") +
    Card("NodeJS", "janeiro de", "2022") +
    Card("Arduino", "janeiro de", "2023") +
    Card("Postman", "janeiro de", "2022") +
    Card("Figma", "setembro de", "2022")

document.querySelector("#sO").innerHTML =
    Card("Windows", "fevereiro", "2009") +
    Card("Linux", "setembro de", "2022")



function Card(nome, mes, data) {
    return `
    <div class="swiper-slide card">
        <div class="card-content">
            <div class="image"><img src="./assets/${nome}.png" alt="" id="${nome}"></div>
            <div class="text-content">
                <h3>${nome}</h3>
                <p>Inicio dos estudos em:</p>
                <p>${mes} ${data}</p>
            </div>
        </div>
    </div>
    `
}

const chk = document.getElementById('chk')

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark')
    const imagens = document.querySelectorAll('.image img')
    const linkes = document.querySelectorAll('.con img')
    const flores = document.querySelectorAll('.flor img')
    imagens.forEach(img => {
        const nome = img.id
        if (document.body.classList.contains('dark')) {
            //modo escuro 
            img.src = `./assets/${nome}_dark.png`
        } else {
            //modo claro
            img.src = `./assets/${nome}.png`
        }

    })
    linkes.forEach(img => {
        const nome = img.id
        if (document.body.classList.contains('dark')) {
            //modo escuro 
            img.src = `./assets/${nome}_dark.png`
        } else {
            //modo claro
            img.src = `./assets/${nome}.png`
        }

    })
    flores.forEach(img => {
        const nome = img.id
        if (document.body.classList.contains('dark')) {
            //modo escuro 
            img.src = `./assets/${nome}_dark.png`
        } else {
            //modo claro
            img.src = `./assets/${nome}.png`
        }

    })

})

document.querySelector("#Lk").innerHTML = 
    Contos( "Gmail", "Github","Linkedin")


function Contos( gmail, github, linkedin ) {
    return `
    <li class="con">
        <a target="_blank" href="https://www.linkedin.com/in/nadynebarbieri">
            <img src="./assets/${linkedin}.png" alt="${linkedin}" id=${linkedin}>
        </a>
        <a target="_blank" href=" mailto:barbierinadyne@gmail.com">
            <img src="./assets/${gmail}.png" alt="${gmail}" id="${gmail}">
        </a>
        <a target="_blank" href="https://www.github.com/NadyneBarbieri">
            <img src="./assets/${github}.png" alt="${github}" id="${github}">
        </a>
    </li>`
}  