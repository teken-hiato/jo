(function () {
  let editIndex = -1;

  function consultarAlunos() {
    const alunos = JSON.parse(localStorage.getItem("dados_alunos")) || [];
    const containerConsulta = document.getElementById("consulta");
    containerConsulta.innerHTML = "";

    if (alunos.length === 0) {
      containerConsulta.innerHTML = "<p>Nenhum dado encontrado!</p>";
      return;
    }

    alunos.forEach((aluno, index) => {
      const divAluno = document.createElement("div");
      divAluno.classList.add("aluno");

      divAluno.innerHTML = `
        <h3>Aluno ${index + 1}</h3>
        <p><strong>Nome:</strong> ${aluno.nome}</p>
        <p><strong>Série:</strong> ${aluno.serie}</p>
        <p><strong>Matéria:</strong> ${aluno.materia}</p>
        <p><strong>Bimestre:</strong> ${aluno.bimestre}</p>
        <p><strong>Nota:</strong> ${aluno.nota}</p>
      `;

      const btnExcluir = document.createElement("button");
      btnExcluir.textContent = "Excluir";
      btnExcluir.classList.add("btn-excluir");
      btnExcluir.addEventListener("click", function () {
        if (confirm("Tem certeza que deseja excluir esse aluno?")) {
          const alunosAtualizados =
            JSON.parse(localStorage.getItem("dados_alunos")) || [];
          alunosAtualizados.splice(index, 1);
          localStorage.setItem(
            "dados_alunos",
            JSON.stringify(alunosAtualizados)
          );
          alert("Aluno excluído com sucesso!");
          consultarAlunos();
        }
      });
      divAluno.appendChild(btnExcluir);

      const btnEditar = document.createElement("button");
      btnEditar.textContent = "Editar";
      btnEditar.classList.add("btn-editar");
      btnEditar.addEventListener("click", function () {
        editIndex = index;

        document.getElementById("id_nome2").value = aluno.nome;
        document.getElementById("id_serie2").value = aluno.serie;
        document.getElementById("id_materia2").value = aluno.materia;
        document.getElementById("id_bimestre2").value = aluno.bimestre;
        document.getElementById("id_nota2").value = aluno.nota;

        document.getElementById("dialogTela").showModal();
      });
      divAluno.appendChild(btnEditar);

      containerConsulta.appendChild(divAluno);
    });
  }

  document
    .getElementById("id_formulario")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("id_nome").value;
      const serie = document.getElementById("id_serie").value;
      const materia = document.getElementById("id_materia").value;
      const bimestre = document.getElementById("id_bimestre").value;
      const nota = document.getElementById("id_nota").value;

      const aluno = { nome, serie, materia, bimestre, nota };
      const alunosExistentes =
        JSON.parse(localStorage.getItem("dados_alunos")) || [];

      alunosExistentes.push(aluno);
      localStorage.setItem("dados_alunos", JSON.stringify(alunosExistentes));

      alert("Dados armazenados com sucesso!");
      this.reset();
    });

  document
    .getElementById("id_consultar")
    .addEventListener("click", consultarAlunos);

  document
    .getElementById("form_edicao")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      if (editIndex > -1) {
        const alunos = JSON.parse(localStorage.getItem("dados_alunos")) || [];
        alunos[editIndex] = {
          nome: document.getElementById("id_nome2").value,
          serie: document.getElementById("id_serie2").value,
          materia: document.getElementById("id_materia2").value,
          bimestre: document.getElementById("id_bimestre2").value,
          nota: document.getElementById("id_nota2").value,
        };
        localStorage.setItem("dados_alunos", JSON.stringify(alunos));
        alert("Dados atualizados com sucesso!");
        document.getElementById("dialogTela").close();
        consultarAlunos();
        editIndex = -1;
      }
    });

  document.getElementById("fechar").addEventListener("click", function () {
    document.getElementById("dialogTela").close();
  });
  const limpar = document.getElementById("Limpar");
  const audio = document.getElementById("plum");

  limpar.addEventListener("click", () => {
    audio.play();
  });
  const botao = document.getElementById("lançar");
  const audio2 = document.getElementById("up");

  botao.addEventListener("click", () => {
    audio2.play();
  });
  const comsu = document.getElementById("id_consultar");
  const audio3 = document.getElementById("select");

  comsu.addEventListener("click", () => {
    audio3.play();
  });
  const okk = document.getElementById("ok");
  const audio4 = document.getElementById("select");

  okk.addEventListener("click", () => {
    audio4.play();
  });
  const fechar = document.getElementById("fechar");
  const audio5 = document.getElementById("run");

  fechar.addEventListener("click", () => {
    audio5.play();
  });
})();
