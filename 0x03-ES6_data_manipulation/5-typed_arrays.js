export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length); // Create the ArrayBuffer
  const view = new DataView(buffer); // Create a DataView

  if (position >= length || position < 0) {
    // Handle out of range position
    throw new Error('Position outside range');
  }
  view.setInt8(position, value); // Set the Int8 value at the specified position
  return view;
}
