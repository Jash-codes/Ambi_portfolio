import "./RoyalSpark.css";

import {
  useEffect,
  useRef
} from "react";

function RoyalSpark() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;

    const ctx = canvas.getContext("2d");

    let sparks = [];

    /* =========================
       CANVAS SIZE
    ========================= */

    const resizeCanvas = () => {

      canvas.width = window.innerWidth;

      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    /* =========================
       CREATE SPARKS
    ========================= */

    const createSpark = (x,y) => {

      for(let i=0;i<12;i++){

        sparks.push({

          x,
          y,

          angle:
          Math.random() * Math.PI * 2,

          speed:
          Math.random() * 3 + 1,

          radius:
          Math.random() * 2 + 1,

          life: 100
        });
      }
    };

    /* =========================
       CLICK EVENT
    ========================= */

    const handleClick = (e) => {

      createSpark(
        e.clientX,
        e.clientY
      );
    };

    /* =========================
       SCROLL EFFECT
    ========================= */

    const handleScroll = () => {

      createSpark(

        window.innerWidth / 2,

        window.innerHeight - 120
      );
    };

    /* =========================
       DRAW
    ========================= */

    const animate = () => {

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      sparks.forEach((spark,index)=>{

        spark.x +=
        Math.cos(spark.angle)
        * spark.speed;

        spark.y +=
        Math.sin(spark.angle)
        * spark.speed;

        spark.life -= 2;

        ctx.beginPath();

        ctx.arc(
          spark.x,
          spark.y,
          spark.radius,
          0,
          Math.PI * 2
        );

        /* GOLD */

        ctx.fillStyle =
        `rgba(212,175,109,${
          spark.life / 100
        })`;

        ctx.shadowBlur = 15;

        ctx.shadowColor =
        "rgba(212,175,109,0.8)";

        ctx.fill();

        if(spark.life <= 0){

          sparks.splice(index,1);
        }

      });

      requestAnimationFrame(animate);
    };

    animate();

    /* EVENTS */

    window.addEventListener(
      "click",
      handleClick
    );

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return ()=>{

      window.removeEventListener(
        "click",
        handleClick
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );
    };

  },[]);

  return (

    <canvas
      ref={canvasRef}
      className="royal-spark-canvas"
    />

  );
}

export default RoyalSpark;