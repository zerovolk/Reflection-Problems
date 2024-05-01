const input = document.createElement('input')
const div = document.createElement('div')
const p = document.createElement('p')

function areYouPlayingBanjo(name) {
    if (!name) return;
    if (name.charAt(0) == "r" || name.charAt(0) == "R") {
        return name + " plays banjo"
    }
    return name + " does not play banjo";
}
let nameInput = ''

div.appendChild(input)
div.appendChild(document.createElement('br'))
document.body.append(div)

input.setAttribute('placeholder', 'Type a name')
input.onchange = function () {
    let resultP = p.innerHTML = areYouPlayingBanjo(this.value)
    div.append(resultP, document.createElement('br'))
    this.value = ''
}
div.className = 'block'

export default areYouPlayingBanjo