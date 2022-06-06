const d = document;
let x = 0,
  y = 0;

export function moveball(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    $limitBall = $ball.getBoundingClientRect(),
    $limitStage = $stage.getBoundingClientRect();
  // console.log(e.keyCode);
  // console.log(e.key);
  // console.log($limitBall, $limitStage);
  // const move =(direction)=>{

  // }
  switch (e.keyCode) {
    // left
    case 37:
      if ($limitBall.left > $limitStage.left) {
        e.preventDefault();
        x--;
      }
      // move("left")
      break;
    // up
    case 38:
      if ($limitBall.top > $limitStage.top) {
        e.preventDefault();
        y--;
      }
      // move("up")
      break;
    // right
    case 39:
      if ($limitBall.right < $limitStage.right) {
        e.preventDefault();
        x++;
      }
      // move("right")
      break;
    // down
    case 40:
      if ($limitBall.bottom < $limitStage.bottom) {
        e.preventDefault();
        y++;
      }

      // move("down")
      break;

    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}
export function shortcuts(e) {
  // console.log(e);
  // console.log(e.type);
  // console.log(e.key);
  // console.log(e.keyCode);
  // console.log(e);

  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alerta con el teclado");
  }

  if (e.key === "o" && e.altKey) {
    confirm("Haz lanzado una confirmacion con el teclado");
  }

  if (e.key === "e" && e.altKey) {
    prompt("Haz lanzado una prompt con el teclado");
  }
}
