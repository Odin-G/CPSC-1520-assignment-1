const form = document.getElementById('album-form')
const titleInput = document.getElementById('album-title')
const descriptionInput = document.getElementById('album-description')
const artSelect = document.getElementById('albume-art ')

function validateTitle() {
    let isValid
    if (titleInput.value.trim() === '' || titleInput.value.length > 20) {
        titleInput.classList.add('is-invalid')
        isValid = false
    } else {
        titleInput.classList.remove('is-invalid')
        isValid = true
    }
    return isValid
}

function validateDescription() {
    let isValid
    if (descriptionInput.value.trim() === '' || descriptionInput.value.length > 40) {
        descriptionInput.classList.add('is-invalid')
        isValid = false
    } else {
        descriptionInput.classList.remove('is-invalid')
        isValid = true
    }
    return isValid
}

function validateArt() {
    let isValid 
    if (artSelect.value === '') {
        artSelect.classList.add('is-invalid')
        isValid = false
    } else {
        artSelect.classList.remove('is-invalid')
        isValid = true
    }
    return isValid
}

function createAlbumCard() {
    const container = document.getElementById('all-albums-list')
    const albumTitle = titleInput.value
    const albumDescription = descriptionInput.value
    const albumArt = artSelect.value

    const cardDiv = document.createElement('div')
    cardDiv.classList.add('col')

    const card = document.createElement('div')
    card.classList.add('card', 'shadow-sm')

    const img = document.createElement('img')
    img.classList.add('bd-placeholder-img', 'card-img-top')
    img.setAttribute('src', `img/${albumArt}`)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const title = document.createElement('h5')
    title.classList.add('card-title')
    title.textContent = albumDescription

    const description = document.createElement('p')
    description.classList.add('card-text')
    description.textContent = albumTitle

    cardBody.appendChild(title)
    cardBody.appendChild(description)

    card.appendChild(img)
    card.appendChild(cardBody)

    cardDiv.appendChild(card)

    container.appendChild(cardDiv)
}

form.addEventListener('submit', e => {
    e.preventDefault()

    const isValidTitle = validateTitle()
    const isValidDescription = validateDescription()
    const isValidArt = validateArt()

    if (isValidTitle && isValidDescription && isValidArt) {
        createAlbumCard()
        form.reset()
    }
})

titleInput.addEventListener('input', validateTitle)
descriptionInput.addEventListener('input', validateDescription)
artSelect.addEventListener('change', validateArt)