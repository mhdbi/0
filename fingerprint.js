function generateFingerprint() {
  const components = [];

  // 1. Basic Browser Information
  components.push(navigator.userAgent);
  components.push(navigator.platform);
  components.push(navigator.language);
  components.push(navigator.cookieEnabled);

  // 2. Screen Information
  components.push(screen.width);
  components.push(screen.height);
  components.push(screen.colorDepth);

  // 3. Timezone
  components.push(Intl.DateTimeFormat().resolvedOptions().timeZone);
  components.push(new Date().getTimezoneOffset());

  // 4. WebGL Information (if available)
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    if (gl) {
      components.push(gl.getParameter(gl.RENDERER));
      components.push(gl.getParameter(gl.VENDOR));
    }
  } catch (e) {
    // WebGL not supported or error
  }

  // 5. Canvas Fingerprinting
  try {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 50;
    const ctx = canvas.getContext('2d');
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.fillStyle = "#f60";
    ctx.fillRect(125,1,62,20);
    ctx.fillStyle = "#069";
    ctx.fillText("Hello World", 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText("Hello World", 4, 17);
    components.push(canvas.toDataURL());
  } catch (e) {
    // Canvas not supported or error
  }


  // Combine components into a string
  const fingerprintString = components.join('|||');

  // Basic hashing function
  let hash = 0;
  if (fingerprintString.length === 0) return hash;
  for (let i = 0; i < fingerprintString.length; i++) {
    const chr = fingerprintString.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }

  return hash;
}

// Get the fingerprint
const fingerprint = generateFingerprint();
console.log('Fingerprint:', fingerprint);
