/**
 * @file common utils file
 * @author jingxiangzheng
 */
import _ from 'lodash';

export function addScrollAnimate() {

    let revealDetect = document.querySelectorAll('.animate__animated:not(.animate__rubberBand)');
    revealDetect = [].slice.call(revealDetect);

    window.addEventListener('scroll', _.throttle(() => {
        const viewHeight = window.innerHeight || document.documentElement.clientHeight;
        
        for(let i = 0; i < revealDetect.length; i++) {
            const {top, bottom, height} = revealDetect[i].getBoundingClientRect();
            
            if ((bottom >= 0 && bottom <= viewHeight) || (top >=0 && top <= viewHeight)) {
                revealDetect[i].classList.add('animate__fadeInDown');
            } else if (bottom < 0 || top > viewHeight){
                revealDetect[i].classList.remove('animate__fadeInDown');
            }
        }
    }), 8000);
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
