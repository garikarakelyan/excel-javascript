import {$} from '@core/dom';

export function resizeHandler($root, event) {
  const $resizer = $(event.target);
  const $parent = $resizer.closest('[data-type="resizable"]');
  const cords = $parent.getCords();
  const type = $resizer.data.resize;
  const sideProp = type === 'col' ? 'bottom' : 'right';
  let value;

  $resizer.toCss({
    opacity: 1,
    [sideProp]: '-5000px',
  })

  document.onmousemove = (e) => {
    if (type === 'col') {
      const delta = e.pageX - cords.right;
      value = cords.width + delta;
      $resizer.toCss({right: -delta + 'px'})
    } else {
      const delta = e.pageY - cords.bottom;
      value = cords.height + delta;
      $resizer.toCss({bottom: -delta + 'px'})
    }
  }

  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
    if (type === 'col') {
      $parent.toCss({width: value + 'px'});
      $root.findAll(`[data-col="${$parent.data.col}"]`).forEach((el) => {
        el.style.width = value + 'px'
      })
    } else {
      $parent.toCss({height: value + 'px'});
    }

    $resizer.toCss({
      opacity: 0,
      bottom: 0,
      right: 0,
    })
  }
}
