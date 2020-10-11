const codes = {
  a: 65,
  z: 90,
}

function createCell() {
  return `
        <div class="cell" contenteditable></div>
    `
}

function createCol(el) {
  return `
        <div class="column">${el}</div>
    `
}

function createRow(index, content) {
  return `
        <div class="row">
          <div class="row-info">${index ? index : ''}</div> 
          <div class="row-data">${content}</div> 
        </div>
    `
}

export function createTable(rowsCount = 30) {
  const colsCount = codes.z - codes.a + 1;
  const rows = [];
  const cols = new Array(colsCount)
      .fill('')
      .map((el, index) => {
        return String.fromCharCode(codes.a + index)
      })
      .map((el) => {
        return createCol(el)
      })
      .join('');
  rows.push(createRow(null, cols));

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map((el, index) => {
          return createCell()
        })
        .join('');
    rows.push(createRow(i + 1, cells))
  }
  return rows.join('')
}
