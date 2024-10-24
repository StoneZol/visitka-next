'use client'
import React,{useEffect, useRef} from 'react'

export default function MatrixBG() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const str = 'А+Б0В-Г1Д=Е2Ё Ж3З И4Й К5Л М6Н О7П Р8С Т9У Ф!Х Ц?Ч Ш.ЩЪ,Ы Ь:ЭЮ;Я';
    const matrix = str.split('');

    let font = 11;
    let col = width / font;
    let arr = [];

    for (let i = 0; i < col; i++) arr[i] = 1;

    function draw() {
      context.fillStyle = 'rgba(0,0,0,.05)';
      context.fillRect(0, 0, width, height);
      context.fillStyle = '#c200c2';
      context.font = font + 'px system-ui';

      for (let i = 0; i < arr.length; i++) {
        let txt = matrix[Math.floor(Math.random() * matrix.length)];
        context.fillText(txt, i * font, arr[i] * font);
        if (arr[i] * font > height && Math.random() > 0.975) arr[i] = 0;
        arr[i]++;
      }
    }

    const interval = setInterval(draw, 123);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      col = width / font;
      arr = [];
      for (let i = 0; i < col; i++) arr[i] = 1;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className='Canva'></canvas>;
}
