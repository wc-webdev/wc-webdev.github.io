window.tgen.function('to_alpha', { rgba: [255, 255, 255, 255], }, function ($g, params) {
  const buffer = new $g.buffer();
  const { width, height, } = $g.texture;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const offset = $g.texture.offset(x, y);
      const [r, g, b, ] = $g.point.get(x, y);
      buffer.data[offset] = params.rgba[0]
      buffer.data[offset + 1] = params.rgba[1]
      buffer.data[offset + 2] = params.rgba[2]
      buffer.data[offset + 3] = (r + g + b) / 3
    }
  }

  let size = $g.texture.size()
  while (size--) {
    $g.texture.data[size] = buffer.data[size]
  }
  return params;
})

const generateTexture = params => (
  window.tgen
    .init(window.innerWidth, window.innerWidth)
    //.init(16, 16)
    .render({
      ...params,
      //width: 16,
      //height: 16,
      width: window.innerWidth,
      height: window.innerWidth,
    })
    .toCanvas()
    .toDataURL('image/png')
)

export default generateTexture
