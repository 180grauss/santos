const santos = [
    'São Pedro',
    'Beato Carlo Acutis',
    'São Paulo',
    'São Francisco de Assis',
    'São João Paulo II',
    'Santa Teresa de Ávila',
    'São João Batista',
    'São José',
    'São Tomás de Aquino',
    'Santa Rita de Cássia',
    'São Jorge',
    'Santo Antônio de Pádua',
    'São Padre Pio de Pietrelcina',
    'Santa Clara de Assis',
    'Santa Faustina Kowalska',
    'São Bento de Núrsia',
    'São Miguel Arcanjo',
    'São Lourenço',
    'São Sebastião',
    'São João Bosco',
    'Santa Bernadette Soubirous',
    'Santa Teresa de Lisieux',
    'São Domingos de Gusmão',
    'São Tiago Maior',
    'São Francisco Xavier',
    'São Luís Gonzaga',
    'São Jerônimo',
    'Santa Catarina de Sena',
    'Santo Agostinho',
    'São Martinho de Tours',
    'Santo Ambrósio',
    'Nossa Senhora de Fátima',
    'Nossa Senhora Aparecida',
    'Nossa Senhora de Lourdes',
    'Nossa Senhora do Carmo',
    'Nossa Senhora das Graças',
    'Nossa Senhora da Conceição',
    'Nossa Senhora do Perpétuo Socorro',
    'São Maximiliano Kolbe',
    'São Oscar Romero',
    'Santa Madre Teresa de Calcutá',
    'São José de Anchieta',
    'Santa Dulce dos Pobres',
    'Nossa Senhora de Guadalupe',
    'Nossa Senhora da Paz',
    'Nossa Senhora da Assunção'

];

function sortearSanto() {
    const indiceSorteado = Math.floor(Math.random() * santos.length);
    const santoSorteado = santos[indiceSorteado];

    document.getElementById('modal-body').innerHTML = `<h2>${santoSorteado}</h2>`;

        const modal = new bootstrap.Modal(document.getElementById('santoModal'));
        modal.show();

}
