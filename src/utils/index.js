/**
 * @file common utils file
 * @author jingxiangzheng
 */

export function addScrollAnimate() {

    let revealDetect = document.querySelectorAll('.reveal-detect:not(.animated)');
    revealDetect = [].slice.call(revealDetect);

    window.addEventListener('scroll', () => {
        for(let i = 0; i < revealDetect.length; i++) {
          if(revealDetect[i].getBoundingClientRect().top < window.innerHeight) {
            revealDetect[i].classList.add('animated');
          } else {
            revealDetect[i].classList.remove('animated');
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
            setTimeout(_writing.bind(this), 200, ++index)
        }
    }
    _writing();
}
