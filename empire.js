
document.querySelector(".nav").addEventListener("click" , () => {
    alert('hi')
})

document.querySelectorAll('.nav_btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

// navIcon.onclick() = function() {
//      alert('hi')
// }

// window.addEventListener('click' , ()=>{
//     alert('hi')
// })


// document.addEventListener("click", (e) => {

//     alert(e.target)

// })
