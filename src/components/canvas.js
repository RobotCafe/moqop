import React, { useRef, useEffect } from 'react'
import polyline from "@mapbox/polyline";
import util from "util";


export default function Canvas({...props}) {
  
  const canvasRef = useRef(null)

  console.log(props.name)

  const update = async (arr, canvas, ctx) => {
    // var canvas = document.getElementById("canvas");
    // var ctx = canvas.getContext("2d");

    var minX, minY, maxX, maxY;
    arr.forEach((p, i) => {
      if (i === 0) {
        // if first point
        minX = maxX = p[1];
        minY = maxY = p[0];
      } else {
        minX = Math.min(p[1], minX);
        minY = Math.min(p[0], minY);
        maxX = Math.max(p[1], maxX);
        maxY = Math.max(p[0], maxY);
      }
    });

    // now get the map width and heigth in its local coords
    const mapWidth = maxX - minX;
    const mapHeight = maxY - minY;
    const mapCenterX = (maxX + minX) / 2;
    const mapCenterY = (maxY + minY) / 2;

    // to find the scale that will fit the canvas get the min scale to fit height or width
    const scale = Math.min(canvas.width / mapWidth, canvas.height / mapHeight);

    // Now you can draw the map centered on the cavas
    ctx.beginPath();
    arr.forEach((p) => {
      ctx.lineTo(
        (p[1] - mapCenterX) * scale*0.9 + canvas.width / 2,
        (p[0] - mapCenterY) * scale*0.9 + canvas.height / 2
      );
    });
    ctx.lineWidth = 12;
    ctx.strokeStyle = 'white';
    ctx.lineJoin = "round";
    ctx.lineCap = 'round',
    ctx.stroke();
 }

  useEffect(() => {
    console.log('useEffect')
    console.log(props)
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // //Our first draw
    // ctx.fillStyle = '#cccccc'
    // context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    if (props.data === 'initial') {
      let arr = polyline.decode(
        "msydHgx`q@_A~IkDL\\pJsPrWcQhv@cJxKq@bIpIjAzE~OzKdMbKrd@jK~FtMbTbL}H~DzVpLnJpTwB_CpPdNjOsDkKoNiGiKdHcIiDoTnDm]gMwWlQgy@sOiQpUyQqTuZdHwHgBlHuCqLoCyIzBaBpGgHSyKwF{AgIuGcAsNdIc]v@cKqEyLxFoYuMkd@pGoYsFkI`FuEpRy_@|g@iLlp@gIvBcUyRbAyJ_KEeV_]gLgGiNe}@yFmM|J}LeJiDoAoH{Uh@}BgT{Hk@qLcOja@aZsPyXgDyOzKLt@kN_ScXoAuTp@oYxN}LxQ}CgNm_AjJuCtj@cn@bh@sI~C{NnWmEjCiIhHWpDqHde@A~X_Nv]hO`S`Sda@aGfL`LGxEwLdQ`N~e@iT`k@XhEdDaBkC|Z~Jr_@}Sp_@~D`ReFg@qEjLiTsNeAwG}Ht@{BhFGt]lJtOxJfE`D|J`R|Hle@kTzPrY~ZmLlPpEbMqGxJeQxYqM~\\zNb\\uE|PlX~DoIlGnArGaHbQmw@nHcM"
      );
      console.log('initial')
      update(arr, canvas, ctx)
    } else {
      let arr = polyline.decode(props.map.polyline)
      update(arr, canvas, ctx)
      console.log('real')
    }



    // ctx.font = 2 * window.innerWidth + "px Inter";
    // ctx.fillText  ('Keyboard Cat', 0, 270);

  }, [])
  
  return <canvas ref={canvasRef} className="absolute z-20 h-full w-full scale-[.8]" width="1080" height="1920" />
}


