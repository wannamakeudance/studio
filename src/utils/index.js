/**
 * @file common utils file
 * @author jingxiangzheng
 */

export function addScrollAnimate() {

    let revealDetect = document.querySelectorAll('.animate__animated:not(.animate__rubberBand)');
    revealDetect = [].slice.call(revealDetect);

    window.addEventListener('scroll', () => {
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        
        for(let i = 0; i < revealDetect.length; i++) {
            const {top, bottom} = revealDetect[i].getBoundingClientRect();
            
            if (top >= 0 && bottom <= viewHeight) {
                revealDetect[i].classList.add('animate__fadeInDown');
            } else {
                revealDetect[i].classList.remove('animate__fadeInDown');
            }
        }
    });
}

/**
 * add the effect of writing
 * @param {String} words the words of writing
 * @param {String} selectorClass the class of selector
 */
export function addWriting(words = '', selectorClass) {

    const dom = document.querySelector(selectorClass);
    const data = words.split('');

    function _writing(index = 0) {
        if (index < data.length) {
            dom.innerHTML += data[index]
            setTimeout(_writing.bind(this), 100, ++index)
        }
    }
    _writing();
}
