(function() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');

  let rotation = 0;
  let faviconLink = document.querySelector("link[rel*='icon']");
  let ketchupImg = new Image();
  let imageLoaded = false;

  if (!faviconLink) {
    faviconLink = document.createElement('link');
    faviconLink.rel = 'icon';
    document.head.appendChild(faviconLink);
  }

  // Load ketchup image
  ketchupImg.onload = function() {
    imageLoaded = true;
    animate();
  };
  ketchupImg.src = '/ketchup/favicon-32x32.png';

  function drawFavicon() {
    if (!imageLoaded) return;

    ctx.clearRect(0, 0, 64, 64);

    ctx.save();
    ctx.translate(32, 32);

    // Simply rotate the entire image
    ctx.rotate(rotation);

    // Draw the ketchup image centered and rotated
    ctx.drawImage(ketchupImg, -32, -32, 64, 64);

    ctx.restore();
  }

  function animate() {
    rotation += 0.1; // Speed of rotation
    drawFavicon();
    faviconLink.href = canvas.toDataURL();
    requestAnimationFrame(animate);
  }
})();
