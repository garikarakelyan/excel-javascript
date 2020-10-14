const codes = {
  a: 65,
  z: 90,
}

function createCell(_, col) {
  return `
        <div class="cell" contenteditable data-col="${col}"></div>
    `
}

function createCol(el, index) {
  return `
         <div class="column" data-type="resizable" data-col="${index}">
            ${el}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `
}

function createRow(index, content) {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
    <div class="row" data-type="resizable">
      <div class="row-info">
        ${index ? index : ''}
        ${resize}
      </div>
      <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(codes.a + index)
}

export function createTable(rowsCount = 30) {
  const colsCount = codes.z - codes.a + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(createCol)
      .join('')

  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(createCell)
        .join('')

    rows.push(createRow(i + 1, cells))
  }
  return rows.join('')
}
