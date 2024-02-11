
export const institutionFormatData = [

    { 'name': 'Бар', 'id': 'bar-1' },
    { 'name': 'Гастробар', 'id': 'gastrobar-2' },
    { 'name': 'Кальянная', 'id': 'hookah-bar-3' },
    { 'name': 'Паб', 'id': 'pab-4' },
    { 'name': 'Ресторан', 'id': 'restaurant-5' },
    { 'name': 'Стейк-хаус', 'id': 'steakhouse-6' },
];

export const drinks = [
    {
        'title': 'Пиво',
        'idDrink': 'beer',
        'typeDrinks': [
            { 'name': 'Английский эль', 'id': 'english-ale-1' },
            { 'name': 'Бельгийский эль', 'id': 'belgian-ale-2' },
            { 'name': 'Бланш/Витбир', 'id': 'blanche/witbier-3' },
            { 'name': 'Вайсбир', 'id': 'weissbier-4' },
            { 'name': 'Кислотный эль', 'id': 'sour-ale-5' },
            { 'name': 'Ламбик', 'id': 'lambic-6' },
            { 'name': 'Сидр', 'id': 'cider-7' },
        ]
    },
    {
        'title': 'Сидр',
        'idDrink': 'cider',
        'typeDrinks': [
            { 'name': 'Перри', 'id': 'perry-1' },
            { 'name': 'Сидр', 'id': 'cider-2' },
            { 'name': 'Фруктовый сидр', 'id': 'fruit-cider-3' },
        ]
    },
    {
        'title': 'Крепкий алкоголь',
        'idDrink': 'strongAlcohol',
        'typeDrinks': [
            { 'name': 'Арманьяк', 'id': 'armagnac-1' },
            { 'name': 'Бренди', 'id': 'brandy-2' },
            { 'name': 'Вино', 'id': 'wine-3' },
            { 'name': 'Виски', 'id': 'whiskey-4' },
            { 'name': 'Вермут', 'id': 'vermouth-5' },
            { 'name': 'Водка', 'id': 'vodka-6' },
            { 'name': 'Джин', 'id': 'gin-7' },
            { 'name': 'Кальвадос', 'id': 'calvados-8' },
            { 'name': 'Коньяк', 'id': 'cognac-9' },
            { 'name': 'Порто', 'id': 'Porto-10' },
            { 'name': 'Ром', 'id': 'rom-11' },
            { 'name': 'Текила', 'id': 'tequila-12' },

        ]
    },
];


export const problems = [
    { value: 'long time wait', label: 'Жду образцы неделями' },
    { value: 'spending time tasting', label: 'Трачу время на дегустацию' },
    { value: 'high price', label: 'Высокая цена' },
    { value: 'other', label: 'Другое' },
];