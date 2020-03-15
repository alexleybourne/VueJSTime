// Creating Slug

function Slugify(word) {
    let newSlug = word.toLowerCase()
    newSlug = newSlug.replace(/[$*_+~.()'"!\:;@&^%#+]/g, '')
    newSlug = newSlug.replace(/ /g, '-')
    return newSlug
}

