var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){

    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        pacientes.forEach(paciente => {
            var nome = paciente.querySelector(".info-nome").textContent;

            var expressao = new RegExp(this.value, "i");
    
            if (!expressao.test(nome)) {
                paciente.classList.add("oculta-paciente");
            } else {
                paciente.classList.remove("oculta-paciente");
            }
        });
    } else {
        pacientes.forEach(paciente => {
            paciente.classList.remove("oculta-paciente");
        });
    }
})