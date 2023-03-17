let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style= "color: #ff7d52;">Estudio Psicología, escribo y desarrollo sitios web.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
