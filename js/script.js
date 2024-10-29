const santosMasculinos = [
    'São Pedro', 'Beato Carlo Acutis', 'São Paulo', 'São Francisco de Assis', 'São João Paulo II',
    'São João Batista', 'São José', 'São Tomás de Aquino', 'São Jorge', 'Santo Antônio de Pádua',
    'São Padre Pio de Pietrelcina', 'São Bento de Núrsia', 'São Miguel Arcanjo', 'São Lourenço',
    'São Sebastião', 'São João Bosco', 'São Domingos de Gusmão', 'São Tiago Maior',
    'São Francisco Xavier', 'São Luís Gonzaga', 'São Jerônimo', 'Santo Agostinho', 'São Martinho de Tours',
    'Santo Ambrósio', 'São Maximiliano Kolbe', 'São Oscar Romero', 'São José de Anchieta'
];

const santosFemininos = [
    'Santa Maria Madalena', 'Santa Teresa de Ávila', 'Santa Teresa de Lisieux', 'Santa Rita de Cássia',
    'Santa Clara de Assis', 'Santa Catarina de Sena', 'Santa Bernadette Soubirous', 'Santa Faustina Kowalska',
    'Santa Hildegarda de Bingen', 'Santa Brígida da Suécia', 'Santa Teresa Benedita da Cruz', 'Santa Maria Goretti',
    'Santa Joana d\'Arc', 'Santa Rosa de Lima', 'Santa Mônica', 'Santa Elizabeth Ann Seton', 'Santa Ana',
    'Santa Águeda', 'Santa Perpétua', 'Santa Felicidade', 'Santa Ludovina', 'Santa Paulina do Coração Agonizante de Jesus',
    'Santa Gertrudes de Helfta', 'Santa Gemma Galgani', 'Santa Filomena', 'Santa Águeda de Catânia',
    'Santa Catarina Labouré', 'Santa Isabel de Portugal', 'Santa Verônica Giuliani', 'Santa Angela Merici',
    'Santa Dulce dos Pobres', 'Nossa Senhora de Fátima', 'Nossa Senhora Aparecida', 'Nossa Senhora de Lourdes',
    'Nossa Senhora do Carmo', 'Nossa Senhora das Graças', 'Nossa Senhora da Conceição',
    'Nossa Senhora do Perpétuo Socorro', 'Santa Madre Teresa de Calcutá', 'Santa Dulce dos Pobres',
    'Nossa Senhora de Guadalupe', 'Nossa Senhora da Paz', 'Nossa Senhora da Assunção'
];

function sortearSanto() {
    const genero = document.getElementById("genero").value; // Pega o valor selecionado
    let listaDeSantos;

    if (genero === "masculino") {
        listaDeSantos = santosMasculinos;
    } else if (genero === "feminino") {
        listaDeSantos = santosFemininos;
    } else {
        alert("Por favor, selecione um gênero.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeSantos.length);
    const santoSorteado = listaDeSantos[indiceSorteado];

    document.getElementById('modal-body').innerHTML = `<h2>${santoSorteado}</h2>`;

    const modal = new bootstrap.Modal(document.getElementById('santoModal'));
    modal.show();
}
