export default function sortPersons (persons) {
  return persons.sort(sortByField('health'))
}

function sortByField(field) {
  return (a, b) => a[field] > b[field] ? -1 : 1;
}

