let btnShow = document.getElementById("btnShow");
let btnNoShow = document.getElementById("btnNoShow");
let texto = document.getElementById("texto");

btnShow.addEventListener("click", () => {
  texto.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. At aut eum sit, vel nobis culpa iusto architecto debitis veritatis tempore perferendis illum quo, repudiandae suscipit corporis delectus quibusdam excepturi dignissimos!Ratione cum nisi culpa dolor ex odio velit qui odit tempore in! Asperiores praesentium, molestiae cumque cum sunt aliquam, libero ratione quaerat harum neque, et dolorem omnis rerum! Laborum, sapiente.";
    btnShow.style.display = "none";
    btnNoShow.style.display = "block";
});

btnNoShow.addEventListener("click", ()=>{
    texto.innerHTML = ""
    btnNoShow.style.display = "none";
    btnShow.style.display = "block";
})