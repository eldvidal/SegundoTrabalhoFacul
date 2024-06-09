document.addEventListener('DOMContentLoaded', function (){
    const form = document.getElementById('planosformulario');
    const valordosplanos = document.getElementById('valordosplanos');

    form.addEventListener('submit', function (e){
        e.preventDefault();

        const idade = parseInt(document.getElementById('idade').value);
        const peso = parseFloat(document.getElementById('peso').value.replace(',', '.'));
        const altura = parseFloat(document.getElementById('altura').value.replace(',', '.'));
        const imc = peso/((altura)**2);

        // Operadora A
        const planoBasicoA = 100+(idade*10*(imc/10));
        const planoStandardA = (150+(idade*15))*(imc/10);
        const planoPremiumA = (200-(imc*10)+(idade*20))*(imc/10);

        // Operadora B
        let fatorComorbidade;
        if (imc<18.5){
            fatorComorbidade = 10;
        } else if (imc >=18.5 && imc <= 24.9){
            fatorComorbidade = 1;
        } else if (imc >= 25 && imc <= 29.9){
            fatorComorbidade = 6;
        } else if (imc >= 30 && imc <= 34.9){
            fatorComorbidade = 10;
        } else if (imc >= 35 && imc <= 39.9){
            fatorComorbidade = 20;
        } else {
            fatorComorbidade = 30;
        }

        const planoBasicoB = 100+(fatorComorbidade*10*(imc/10));
        const planoStandardB = (150+(fatorComorbidade*15))*(imc/10);
        const planoPremiumB = (200-(imc*10)+(fatorComorbidade*20))*(imc/10);
        if(altura > 3){
            alert("Insira o valor da altura corretamente.")
        } else{
        valordosplanos.innerHTML = 
            `<h2>Resultado</h2>
            <strong>Operadora de Saúde A</strong><br>
            Plano Básico: R$ ${planoBasicoA.toFixed(2)}<br>
            Plano Standard: R$ ${planoStandardA.toFixed(2)}<br>
            Plano Premium: R$ ${planoPremiumA.toFixed(2)}<br><br>
            <strong>Operadora de Saúde B</strong><br>
            Plano Básico: R$ ${planoBasicoB.toFixed(2)}<br>
            Plano Standard: R$ ${planoStandardB.toFixed(2)}<br>
            Plano Premium: R$ ${planoPremiumB.toFixed(2)}<br>`;
        }
    });
});
