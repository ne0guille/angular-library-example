export const bookStatus = {
    leyendo: 'Leyendo',
    quieroLeer: 'Quiero Leer',
    leido: 'Leido',
    abandonado: 'Abandonado'
}

export default angular.module('app.constants', []).constant('bookStatus', bookStatus).name;