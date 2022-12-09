export default function updateUniqueItems(list) {
  if (!(list instanceof Map)) throw Error('Cannot process');
  list.forEach((key, value) => {
    if (key === 1) {
      list.set(value, 100);
    }
  });
  return list;
}
