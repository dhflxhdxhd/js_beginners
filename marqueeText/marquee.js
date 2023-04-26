const pSubtitle = document.querySelector(".main-subtitle");
const subText = `Hope to go Hongkong ⯌  Taiwan ⯌ Australia ⯌ Ireland ⯌ Ethiopia ⯌ Mexico ⯌ Spain ⯌ Los Angeles ⯌ Thailand ⯌ New York ⯌ Canada Love Berlin ⯌ Dresden ⯌ Paris ⯌ London ⯌ Porto ⯌ Lisbon ⯌`.split(' ')


function initText(element, textArr){
    // 깊은 복사
    textArr.push(...textArr)

    for (let i = 0; i < textArr.length; i++){
        element.innerText += `${textArr[i]}\u00A0\u00a0`
    }
}

initText(pSubtitle,subText);

console.log(pSubtitle.scrollWidth/2)

let count1 = 0
function marqueeText(count,element,direction){
    if (count > element.scrollWidth / 2){
        element.style.transform = `translate3d(0,0,0)`
        count = 0
    }

    // -1px씩 왼쪽으로 이동
    element.style.transform = `translate3d(${count*direction}px,0,0)`
    return count
}

function animate(){ 
    count1 += 3;

    count1 = marqueeText(count1,pSubtitle,-1);

    window.requestAnimationFrame(animate)
}

animate();