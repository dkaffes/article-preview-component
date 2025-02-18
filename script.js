
const shareContentWrap = document.querySelector('.share-content-wrapper');

const shareButton = document.querySelector('.share-btn');

shareButton.addEventListener('click',() =>{
    shareContentWrap.classList.toggle('hidden');
    shareContentWrap.classList.toggle('flex');
    shareContentWrap.classList.toggle('share-content-wrapper-bg');
    shareButton.classList.toggle('share-btn-bg');
});
