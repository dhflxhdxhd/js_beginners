const container = document.querySelector(".contents-Container");
const banner1 = document.querySelector(".rolling-list");
banner1.id = "banner1";



// 하위 노드까지 cloneNode()
const banner2 = banner1.cloneNode(true);
banner2.id = "banner2";



container.appendChild(banner2);

// banner1.style.left = '0px';
// banner2.style.left = document.querySelector(".rolling-list ul").offsetWidth + 'px';
// console.log(document.querySelector(".rolling-list ul").offsetWidth)
let count1 = 0
console.log(container.scrollWidth);


function rollingBanner(count,element,direction){
    if (count > element.scrollWidth / 2){
        element.style.transform = `translate3d(0,0,0)`
        count = 0
    }

    // -1px씩 왼쪽으로 이동
    element.style.transform = `translate3d(${count*direction}px,0,0)`
    return count
}

function animate(){
    count1 += 5

    count1 = rollingBanner(count1,container,-1)
    window.requestAnimationFrame(animate)
}

// animate();