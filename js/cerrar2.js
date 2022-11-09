const openModal = document.querySelector("#primera");
const modal = document.querySelector("#primero");
const closeModal = document.querySelector(".cerrar");

openModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.add("modal--show");

});

closeModal.addEventListener("click", (e)=>{
    e.preventDefault();
    modal.classList.remove("modal--show");

});

//modal segundo
const openModal2 = document.querySelector("#segunda");
const modal2 = document.querySelector("#segundo");
const closeModal2 = document.querySelector("#cerrar2");

openModal2.addEventListener("click", (e)=>{
    e.preventDefault();
    modal2.classList.add("modal--show");

});

closeModal2.addEventListener("click", (e)=>{
    e.preventDefault();
    modal2.classList.remove("modal--show");

});

//modal tercero
const openModal3 = document.querySelector("#tercera");
const modal3 = document.querySelector("#tercero");
const closeModal3 = document.querySelector("#cerrar3");

openModal3.addEventListener("click", (e)=>{
    e.preventDefault();
    modal3.classList.add("modal--show");

});

closeModal3.addEventListener("click", (e)=>{
    e.preventDefault();
    modal3.classList.remove("modal--show");

});
//modal tercero
const openModal4 = document.querySelector("#cuarta");
const modal4 = document.querySelector("#cuarto");
const closeModal4 = document.querySelector("#cerrar4");

openModal4.addEventListener("click", (e)=>{
    e.preventDefault();
    modal4.classList.add("modal--show");

});

closeModal4.addEventListener("click", (e)=>{
    e.preventDefault();
    modal4.classList.remove("modal--show");

});
