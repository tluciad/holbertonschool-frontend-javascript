export default function createInt8TypedArray(length, position, value) {
  if (position > length - 1) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const ArrInt8 = new Int8Array(buffer);

  ArrInt8[position] = value;
  return new DataView(buffer, 0);
}
