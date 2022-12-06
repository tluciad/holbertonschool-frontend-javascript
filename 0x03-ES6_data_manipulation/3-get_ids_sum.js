export default function getStudentIdsSum(list) {
  return list.reduce(
    (accumulator, item) => accumulator + item.id, 0,
  );
}
