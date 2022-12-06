export default function (list, city) {
  return list.filter((item) => item.location === city);
}
