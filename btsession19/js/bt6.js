let imgFeature = document.querySelector(".img-feature")
let listImg = document.querySelectorAll(".list-image img")
let prevbtn = document.querySelector(".prev")
let nextbtn = document.querySelector(".next")
let currentIndex = 0;

function updateImageByIndex(index) {
    document.querySelectorAll('.list-image div').forEach(item => {
        item.classList.remove('active')
    })
    currentIndex = index
    imgFeature.src = listImg[index].getAttribute('src');
    listImg[index].parentElement.classList.add('active')
}
listImg.forEach((imgElement, index) => {
    imgElement.addEventListener('click', e => {
        updateImageByIndex(index)

    })
});


nextbtn.addEventListener('click', e => {
    if (currentIndex == 0) {
        currentIndex = listImg.length - 1
    } else {
        currentIndex--
    }
    updateImageByIndex(currentIndex)
})

prevbtn.addEventListener('click', e => {
    if (currentIndex == listImg.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    updateImageByIndex(currentIndex)
})

setInterval(() => {
    if (currentIndex == listImg.length - 1) {
        currentIndex = 0
    } else {
        currentIndex++
    }
    updateImageByIndex(currentIndex)
}, 3000)