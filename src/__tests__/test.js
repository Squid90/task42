import sortPersons from '../game';

//let test;
//let expect;
const standartList = [
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
];

test('sort persons by health', () => {
  const persons = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  const currentList = sortPersons(persons);
  expect(currentList).toEqual(standartList);
});
