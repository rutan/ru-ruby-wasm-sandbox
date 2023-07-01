type FetchParameter = Parameters<typeof fetch>;

export function fetchBinaryBase64(input: FetchParameter[0], init?: FetchParameter[1]) {
  return fetch(input, init)
    .then((resp) => resp.arrayBuffer())
    .then((arrayBuffer) => ab2base64(arrayBuffer));
}

function ab2base64(arrayBuffer: ArrayBuffer) {
  const buffer: string[] = [];

  const bytes = new Uint8Array(arrayBuffer);
  for (let i = 0; i < bytes.byteLength; ++i) {
    buffer.push(String.fromCharCode(bytes[i]));
  }

  return btoa(buffer.join(''));
}
