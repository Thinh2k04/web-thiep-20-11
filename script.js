/**
 * 20/10 - CHÚC MỪNG NGÀY PHỤ NỮ VIỆT NAM
 * Ultra-smooth, Bespoke, High-Performance Interactive Experience
 */

(function () {
  'use strict';

  /* ================= TEMPLATES & CONFIG ================= */
  const PERSONA_TEMPLATES = {
    crush: {
      name: 'Người Thương Yêu Nhất',
      chipName: 'Người Thương',
      toCard: 'Em yêu - Bông hồng đẹp nhất trong lòng anh',
      title: 'Chúc Em 20/10 Mãi Rạng Ngời & Hạnh Phúc 💖',
      letter: `Nhân ngày Phụ Nữ Việt Nam 20/10, anh muốn gửi đến em tất cả những điều ngọt ngào và chân thành nhất.

Chúc em luôn nở nụ cười rạng rỡ như ánh ban mai, luôn xinh đẹp và bình yên trong từng phút giây. Cảm ơn em vì đã xuất hiện, làm cho cuộc sống này trở nên dịu dàng và ý nghĩa hơn bao giờ hết.

Mong rằng mỗi ngày của em đều được bao bọc trong yêu thương, niềm vui và những bất ngờ tuyệt vời nhất! 🌹`,
      from: 'Người luôn dõi theo & thương em ♡'
    },
    mom: {
      name: 'Mẹ Kính Yêu Của Con',
      chipName: 'Mẹ Yêu',
      toCard: 'Mẹ yêu - Người phụ nữ vĩ đại nhất trần đời',
      title: 'Kính Chúc Mẹ Ngày 20/10 An Khang & Trẻ Khỏe 🌹',
      letter: `Mẹ kính yêu của con! Nhân ngày 20/10, con xin gửi đến Mẹ lời tri ân và tình yêu thương sâu sắc nhất từ tận đáy lòng.

Cảm ơn Mẹ vì bao năm tháng đã hy sinh thầm lặng, luôn là điểm tựa ấm áp và vững chãi nhất cho chúng con. Con chỉ mong Mẹ luôn dồi dào sức khỏe, tâm hồn an yên và mỗi ngày đều tràn ngập nụ cười tươi vui.

Chúng con yêu Mẹ rất nhiều! 💖`,
      from: 'Con của Mẹ ♡'
    },
    sister: {
      name: 'Chị / Em Gái Đáng Yêu',
      chipName: 'Chị / Em Gái',
      toCard: 'Chị / Em gái dễ thương & tuyệt vời',
      title: 'Chúc 20/10 Ngập Tràn Niềm Vui & May Mắn 🌸',
      letter: `Chúc mừng ngày 20/10 nhé cô gái tuyệt vời!

Chúc bạn luôn giữ trọn nét hồn nhiên, ngày càng xinh đẹp, tự tin và thành công rực rỡ trên con đường mình đã chọn. Chúc bạn sớm gặp được người yêu thương, chiều chuộng và luôn xem bạn như một công chúa!

Mãi vui tươi và tỏa sáng nhé! ✨`,
      from: 'Người anh / em thân thiết ♡'
    },
    colleague: {
      name: 'Người Phụ Nữ Tuyệt Vời',
      chipName: 'Đồng Nghiệp / Bạn Bè',
      toCard: 'Bạn bè & Đồng nghiệp duyên dáng',
      title: 'Chúc Mừng Ngày Phụ Nữ Việt Nam 20/10 🌷',
      letter: `Nhân ngày 20 tháng 10, xin gửi lời chúc tốt đẹp và chân thành nhất đến bạn.

Chúc bạn luôn trẻ trung, nhiệt huyết, công việc thuận buồm xuôi gió và gặt hái được thật nhiều thành tựu lớn. Mong bạn mỗi ngày đi làm đều là một ngày vui, tràn đầy năng lượng và luôn được đồng nghiệp yêu mến!

Happy Vietnamese Women's Day! 💐`,
      from: 'Đồng nghiệp & Những người bạn quý mến ♡'
    }
  };

  const urlParams = new URLSearchParams(window.location.search);
  // Link ngắn ?d=id -> lấy dữ liệu từ cards.js
  const cardId = urlParams.get('d');
  const savedCard = cardId && window.CARDS && window.CARDS[cardId];
  if (savedCard) {
    ['to', 'from', 'role', 'msg', 'img'].forEach(k => { if (savedCard[k]) urlParams.set(k, savedCard[k]); });
  }
  const hasRecipientLink = urlParams.has('to');

  // Bắt buộc phải có đúng link của từng người, không được bỏ link!
  if (!hasRecipientLink) {
    const gate = $('noLinkGate');
    if (gate) gate.style.display = 'flex';
    document.body.classList.remove('locked');
    return;
  }

  const initialRole = urlParams.get('role') || 'crush';
  const initialTemplate = PERSONA_TEMPLATES[initialRole] || PERSONA_TEMPLATES.crush;

  const CONFIG = {
    role: initialRole,
    name: (urlParams.get('to') || initialTemplate.name).trim(),
    from: (urlParams.get('from') || initialTemplate.from).trim(),
    letter: urlParams.get('msg') || initialTemplate.letter,
    img: urlParams.get('img') || 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=800&auto=format&fit=crop',
    heartWords: ['Xinh Đẹp', 'Hạnh Phúc', 'Rạng Rỡ', 'Bình An', 'Tự Tin', 'Được Yêu Thương', 'Tuyệt Vời'],
    cards: [
      {
        ico: '🌹',
        tag: 'Vẻ Đẹp Thanh Xuân',
        front: 'Nhan Sắc Tỏa Sáng',
        title: 'Mãi Trẻ Trung & Rạng Ngời',
        text: 'Chúc bạn luôn giữ được vẻ đẹp tươi thắm như những đóa hồng nhung sớm mai, làn da rạng rỡ và nụ cười làm say đắm mọi ánh nhìn.',
        verse: '— "Nụ cười của bạn là ánh nắng sưởi ấm thế gian" —'
      },
      {
        ico: '💖',
        tag: 'Tình Yêu Đích Thực',
        front: 'Hạnh Phúc Đong Đầy',
        title: 'Được Yêu Thương Trọn Vẹn',
        text: 'Mong bạn luôn tìm thấy sự bình yên bên những người thân thương, luôn được nâng niu, trân trọng và bao bọc trong mật ngọt tình yêu.',
        verse: '— "Bạn xứng đáng với mọi sự dịu dàng của cuộc đời" —'
      },
      {
        ico: '💎',
        tag: 'Bản Lĩnh Phái Đẹp',
        front: 'Khí Chất Kiêu Sa',
        title: 'Tự Tin & Bản Lĩnh',
        text: 'Chúc bạn luôn kiêu hãnh và độc lập, tỏa sáng với khí chất riêng biệt của chính mình, tự tin bước đi trên con đường bạn đã chọn.',
        verse: '— "Mạnh mẽ như hoa dại, kiêu sa như đóa hồng" —'
      },
      {
        ico: '🌟',
        tag: 'Công Danh Rực Rỡ',
        front: 'Vạn Sự Như Ý',
        title: 'Sự Nghiệp Thăng Hoa',
        text: 'Chúc công việc thuận lợi, tài lộc dồi dào, mọi kế hoạch và dự định đều đơm hoa kết trái thành công rực rỡ ngoài mong đợi.',
        verse: '— "Mỗi bước đi đều có ánh sao may mắn dẫn lối" —'
      },
      {
        ico: '🍀',
        tag: 'Tâm Hồn Thanh Tịnh',
        front: 'Bình An Thư Thái',
        title: 'An Nhiên Giữa Cuộc Sống',
        text: 'Chúc bạn có một sức khỏe dồi dào, những giấc ngủ ngon lành và một tâm hồn nhẹ nhàng, an vui không vướng bận âu lo.',
        verse: '— "Bình an trong tâm là món quà vô giá nhất" —'
      },
      {
        ico: '🎁',
        tag: 'Ngàn Bất Ngờ',
        front: 'Ngọt Ngào Bất Tận',
        title: 'Mỗi Ngày Đều Là Quà Tặng',
        text: 'Chúc bạn nhận được thật nhiều hoa, quà và những lời chúc yêu thương không chỉ riêng ngày 20/10 mà trong suốt 365 ngày của năm!',
        verse: '— "Mỗi sớm mai thức dậy là một niềm vui mới" —'
      }
    ]
  };

  /* Thiệp người yêu: đổi xưng hô "bạn" -> "em" */
  if (CONFIG.role === 'crush') {
    const toEm = t => t.replace(/(^|[^\p{L}])([Bb])ạn(?![\p{L}])(?! bè)/gu, (m, pre, b) => pre + (b === 'B' ? 'Em' : 'em'));
    CONFIG.cards.forEach(c => Object.keys(c).forEach(k => { if (typeof c[k] === 'string') c[k] = toEm(c[k]); }));
    ['intro', 'main'].forEach(id => {
      const root = document.getElementById(id);
      if (!root) return;
      const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let n;
      while ((n = w.nextNode())) n.nodeValue = toEm(n.nodeValue);
      root.querySelectorAll('[placeholder]').forEach(el => { el.placeholder = toEm(el.placeholder); });
    });
  }

  const $ = id => document.getElementById(id);
  // Điện thoại: giảm độ phân giải canvas & số hạt để tránh hết bộ nhớ (trang bị "sự cố")
  const IS_MOBILE = window.matchMedia('(max-width: 768px), (pointer: coarse)').matches;
  const DPR = IS_MOBILE ? 1 : Math.min(window.devicePixelRatio || 1, 2);
  const MAX_FX = IS_MOBILE ? 350 : 1200;
  const MAX_TRAIL = IS_MOBILE ? 80 : 300;
  const rand = (min, max) => Math.random() * (max - min) + min;
  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  /* Update Initial DOM Elements */
  function updateDOMStrings() {
    if ($('toName')) $('toName').textContent = CONFIG.name;
    if ($('introRecName')) $('introRecName').textContent = CONFIG.name;
    if ($('fromNameDisplay')) $('fromNameDisplay').textContent = CONFIG.from;
    const mImg = $('memoryImg');
    if (mImg && CONFIG.img) mImg.src = CONFIG.img;
  }
  updateDOMStrings();

  /* ================= CANVAS SETUP ================= */
  const starCanvas = $('stars'), sx = starCanvas.getContext('2d');
  const petalCanvas = $('petals'), px = petalCanvas.getContext('2d');
  const lanternCanvas = $('lanterns'), lx = lanternCanvas.getContext('2d');
  const fxCanvas = $('fx'), fx = fxCanvas.getContext('2d');
  const trailCanvas = $('trail'), tx = trailCanvas.getContext('2d');

  let W = window.innerWidth, H = window.innerHeight;

  let lastW = 0;
  function resizeAll() {
    // Trên điện thoại thanh địa chỉ ẩn/hiện khi cuộn làm đổi chiều cao -> không cấp phát lại canvas
    if (IS_MOBILE && lastW === window.innerWidth && W) return;
    lastW = window.innerWidth;
    W = window.innerWidth;
    H = window.innerHeight;
    [starCanvas, petalCanvas, lanternCanvas, fxCanvas, trailCanvas].forEach(c => {
      c.width = W * DPR;
      c.height = H * DPR;
      c.getContext('2d').setTransform(DPR, 0, 0, DPR, 0, 0);
    });
    initStars();
    initHeart();
  }
  window.addEventListener('resize', resizeAll);

  /* ================= 1. STARS & COSMIC NEBULA ================= */
  let stars = [];
  let shootingStars = [];

  function initStars() {
    stars = [];
    const count = Math.min(IS_MOBILE ? 70 : 220, Math.floor((W * H) / 5000));
    for (let i = 0; i < count; i++) {
      stars.push({
        x: rand(0, W),
        y: rand(0, H),
        r: rand(0.5, 2.2),
        alpha: rand(0.35, 1.0),
        speed: rand(0.015, 0.05),
        theta: rand(0, Math.PI * 2),
        gold: Math.random() < 0.45
      });
    }
  }

  function drawStars() {
    sx.clearRect(0, 0, W, H);
    for (let s of stars) {
      s.theta += s.speed;
      const a = s.alpha * (0.45 + 0.55 * Math.sin(s.theta));
      sx.fillStyle = s.gold ? `rgba(255, 235, 160, ${a})` : `rgba(255, 255, 255, ${a})`;
      sx.beginPath();
      sx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      sx.fill();

      // Occasional diamond twinkle for larger stars
      if (s.r > 1.6 && a > 0.6) {
        sx.strokeStyle = `rgba(255, 245, 200, ${a * 0.75})`;
        sx.lineWidth = 0.8;
        sx.beginPath();
        sx.moveTo(s.x - s.r * 2.2, s.y);
        sx.lineTo(s.x + s.r * 2.2, s.y);
        sx.moveTo(s.x, s.y - s.r * 2.2);
        sx.lineTo(s.x, s.y + s.r * 2.2);
        sx.stroke();
      }
    }

    // Shooting stars
    if (shootingStars.length === 0 && Math.random() < 0.008) {
      shootingStars.push({
        x: rand(W * 0.1, W * 0.9),
        y: rand(0, H * 0.35),
        length: rand(140, 260),
        speed: rand(14, 20),
        angle: Math.PI / 4 + rand(-0.1, 0.1),
        life: 1
      });
    }

    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const ss = shootingStars[i];
      const endX = ss.x - Math.cos(ss.angle) * ss.length;
      const endY = ss.y - Math.sin(ss.angle) * ss.length;
      const grad = sx.createLinearGradient(ss.x, ss.y, endX, endY);
      grad.addColorStop(0, `rgba(255, 255, 255, ${ss.life})`);
      grad.addColorStop(0.3, `rgba(255, 230, 150, ${ss.life * 0.9})`);
      grad.addColorStop(1, 'transparent');

      sx.strokeStyle = grad;
      sx.lineWidth = 2.5;
      sx.beginPath();
      sx.moveTo(ss.x, ss.y);
      sx.lineTo(endX, endY);
      sx.stroke();

      ss.x += Math.cos(ss.angle) * ss.speed;
      ss.y += Math.sin(ss.angle) * ss.speed;
      ss.life -= 0.016;
      if (ss.life <= 0) shootingStars.splice(i, 1);
    }
  }

  /* ================= 2. 3D DRIFTING ROSE PETALS ================= */
  const petalColors = ['#ff2d78', '#ff5c9d', '#ff80ab', '#ffb3cc', '#ffd700', '#fff0f5', '#ff94c2'];
  const petals = [];
  const MAX_PETALS = Math.min(45, Math.floor(W / 24));

  function createPetal(randomY) {
    return {
      x: rand(0, W),
      y: randomY ? rand(-H, H) : rand(-60, -20),
      size: rand(9, 18),
      vy: rand(0.9, 2.0),
      sway: rand(0, Math.PI * 2),
      swaySpeed: rand(0.015, 0.035),
      swayDist: rand(1.2, 2.5),
      rot: rand(0, Math.PI * 2),
      rotSpeed: rand(-0.02, 0.02),
      flip: rand(0, Math.PI * 2),
      flipSpeed: rand(0.02, 0.05),
      color: pick(petalColors)
    };
  }

  for (let i = 0; i < MAX_PETALS; i++) {
    petals.push(createPetal(true));
  }

  function drawPetals() {
    px.clearRect(0, 0, W, H);
    px.globalAlpha = 0.85;

    for (let i = 0; i < petals.length; i++) {
      const p = petals[i];
      p.sway += p.swaySpeed;
      p.x += Math.sin(p.sway) * p.swayDist + 0.4;
      p.y += p.vy;
      p.rot += p.rotSpeed;
      p.flip += p.flipSpeed;

      if (p.y > H + 40 || p.x > W + 40) {
        petals[i] = createPetal(false);
      }

      px.save();
      px.translate(p.x, p.y);
      px.rotate(p.rot);
      px.scale(1, Math.abs(Math.cos(p.flip)) * 0.75 + 0.25);

      px.fillStyle = p.color;
      px.beginPath();
      px.moveTo(0, -p.size);
      px.bezierCurveTo(p.size * 1.1, -p.size * 0.9, p.size * 0.9, p.size * 0.7, 0, p.size);
      px.bezierCurveTo(-p.size * 0.9, p.size * 0.7, -p.size * 1.1, -p.size * 0.9, 0, -p.size);
      px.fill();

      // Delicate petal vein highlight
      px.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      px.lineWidth = 1;
      px.beginPath();
      px.moveTo(0, -p.size * 0.7);
      px.lineTo(0, p.size * 0.6);
      px.stroke();

      px.restore();
    }
    px.globalAlpha = 1;
  }

  /* ================= 3. FLOATING SKY LANTERNS ================= */
  const lanterns = [];

  function addLantern(text) {
    lanterns.push({
      x: rand(W * 0.2, W * 0.8),
      y: H + 30,
      vx: rand(-0.3, 0.3),
      vy: rand(-1.0, -1.6),
      size: rand(38, 48),
      sway: rand(0, Math.PI * 2),
      text: text || '20/10 Yêu Thương',
      glow: rand(0.7, 1)
    });
  }

  function drawLanterns() {
    lx.clearRect(0, 0, W, H);
    for (let i = lanterns.length - 1; i >= 0; i--) {
      const l = lanterns[i];
      l.sway += 0.02;
      l.x += l.vx + Math.sin(l.sway) * 0.5;
      l.y += l.vy;

      if (l.y < -100) {
        lanterns.splice(i, 1);
        continue;
      }

      lx.save();
      lx.translate(l.x, l.y);

      // Lantern glow halo
      const halo = lx.createRadialGradient(0, 0, 5, 0, 0, l.size * 1.5);
      halo.addColorStop(0, 'rgba(255, 170, 50, 0.5)');
      halo.addColorStop(1, 'transparent');
      lx.fillStyle = halo;
      lx.beginPath();
      lx.arc(0, 0, l.size * 1.5, 0, Math.PI * 2);
      lx.fill();

      // Lantern body (curved barrel)
      const w = l.size * 0.7, h = l.size;
      const bodyGrad = lx.createLinearGradient(0, -h / 2, 0, h / 2);
      bodyGrad.addColorStop(0, '#ff9800');
      bodyGrad.addColorStop(0.5, '#ff5722');
      bodyGrad.addColorStop(1, '#e91e63');

      lx.fillStyle = bodyGrad;
      lx.beginPath();
      lx.moveTo(-w / 2, -h / 2);
      lx.quadraticCurveTo(-w * 0.8, 0, -w / 2, h / 2);
      lx.lineTo(w / 2, h / 2);
      lx.quadraticCurveTo(w * 0.8, 0, w / 2, -h / 2);
      lx.closePath();
      lx.fill();

      // Top and bottom wooden rims
      lx.fillStyle = '#ffb300';
      lx.fillRect(-w / 2 - 2, -h / 2 - 2, w + 4, 3);
      lx.fillRect(-w / 2 - 2, h / 2 - 1, w + 4, 3);

      // Center flame glow
      lx.fillStyle = '#fff7c2';
      lx.beginPath();
      lx.arc(0, h * 0.25, 4, 0, Math.PI * 2);
      lx.fill();

      // Wish text above lantern
      lx.font = '11px "Be Vietnam Pro", sans-serif';
      lx.fillStyle = 'rgba(255, 235, 180, 0.95)';
      lx.textAlign = 'center';
      lx.fillText(l.text, 0, -h / 2 - 10);

      lx.restore();
    }
  }

  /* ================= 4. FIREWORKS ENGINE ================= */
  const rockets = [];
  const fxParticles = [];
  const fwColors = ['#ff3377', '#ffd27a', '#a855f7', '#00f2fe', '#4facfe', '#ffffff', '#ff9a9e'];

  function launchFirework(targetX, targetY, isHeart) {
    const tx = targetX ?? rand(W * 0.15, W * 0.85);
    const ty = targetY ?? rand(H * 0.12, H * 0.45);
    rockets.push({
      x: tx,
      y: H,
      tx: tx,
      ty: ty,
      color: pick(fwColors),
      isHeart: isHeart || Math.random() < 0.4
    });
  }

  function explodeFirework(x, y, color, isHeart) {
    const count = IS_MOBILE ? (isHeart ? 60 : 40) : (isHeart ? 110 : 90);
    playFireworkBoom();

    for (let i = 0; i < count; i++) {
      let vx, vy;
      if (isHeart) {
        const t = (i / count) * Math.PI * 2;
        vx = (16 * Math.sin(t) ** 3) / 3.8;
        vy = -((13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) / 3.8);
        vx += rand(-0.2, 0.2);
        vy += rand(-0.2, 0.2);
      } else {
        const angle = rand(0, Math.PI * 2);
        const speed = rand(1.5, 8.5);
        vx = Math.cos(angle) * speed;
        vy = Math.sin(angle) * speed;
      }

      if (fxParticles.length > MAX_FX) break;
      fxParticles.push({
        x: x,
        y: y,
        vx: vx,
        vy: vy,
        life: 1,
        decay: rand(0.01, 0.02),
        color: Math.random() < 0.2 ? '#ffffff' : color,
        r: rand(1.4, 2.8)
      });
    }
  }

  function drawFx() {
    fx.globalCompositeOperation = 'destination-out';
    fx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    fx.fillRect(0, 0, W, H);

    fx.globalCompositeOperation = 'lighter';

    // Rockets ascending
    for (let i = rockets.length - 1; i >= 0; i--) {
      const r = rockets[i];
      r.x += (r.tx - r.x) * 0.06;
      r.y += (r.ty - r.y) * 0.06;

      fx.fillStyle = r.color;
      fx.beginPath();
      fx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
      fx.fill();

      // Spark trail
      fxParticles.push({
        x: r.x,
        y: r.y,
        vx: rand(-0.4, 0.4),
        vy: rand(0.5, 1.5),
        life: 0.5,
        decay: 0.05,
        color: '#ffd27a',
        r: 1.2
      });

      if (Math.abs(r.y - r.ty) < 6) {
        explodeFirework(r.x, r.y, r.color, r.isHeart);
        rockets.splice(i, 1);
      }
    }

    // Exploding sparks
    for (let i = fxParticles.length - 1; i >= 0; i--) {
      const p = fxParticles[i];
      p.vx *= 0.97;
      p.vy = p.vy * 0.97 + 0.05;
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;

      if (p.life <= 0) {
        fxParticles.splice(i, 1);
        continue;
      }

      fx.globalAlpha = p.life;
      fx.fillStyle = p.color;
      fx.beginPath();
      fx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      fx.fill();
    }

    fx.globalAlpha = 1;
    fx.globalCompositeOperation = 'source-over';
  }

  /* ================= 5. CURSOR TRAIL & PARTICLE BURSTS ================= */
  const trailParticles = [];
  const spriteCache = {};

  function getSprite(char, color) {
    const key = char + (color || '');
    if (spriteCache[key]) return spriteCache[key];
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    g.font = '48px serif';
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    if (color) g.fillStyle = color;
    g.fillText(char, 32, 34);
    return (spriteCache[key] = c);
  }

  function addTrail(x, y, count = 2) {
    if (trailParticles.length > MAX_TRAIL) return;
    for (let i = 0; i < count; i++) {
      trailParticles.push({
        x: x,
        y: y,
        vx: rand(-1, 1),
        vy: rand(-1.5, 0.5),
        life: 1,
        size: rand(6, 12),
        color: Math.random() < 0.5 ? '#ff9ec7' : '#ffd27a',
        isHeart: Math.random() < 0.35
      });
    }
  }

  if (!IS_MOBILE) {
    window.addEventListener('pointermove', e => {
      addTrail(e.clientX, e.clientY);
    });
  }

  function flowerBurst(x, y, count = 16) {
    const flowers = ['🌸', '🌺', '🌷', '🌼', '🌹', '💖', '✨'];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + rand(-0.2, 0.2);
      const speed = rand(5, 11);
      trailParticles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2,
        life: 1.2,
        size: rand(20, 32),
        emoji: pick(flowers),
        rot: rand(0, Math.PI * 2),
        vRot: rand(-0.08, 0.08)
      });
    }
  }

  function drawTrail() {
    tx.clearRect(0, 0, W, H);
    for (let i = trailParticles.length - 1; i >= 0; i--) {
      const t = trailParticles[i];
      t.x += t.vx;
      t.y += t.vy;
      t.vy += 0.04;
      t.life -= 0.025;

      if (t.life <= 0) {
        trailParticles.splice(i, 1);
        continue;
      }

      tx.globalAlpha = Math.min(1, t.life);
      if (t.emoji) {
        t.rot += t.vRot;
        tx.save();
        tx.translate(t.x, t.y);
        tx.rotate(t.rot);
        tx.drawImage(getSprite(t.emoji), -t.size / 2, -t.size / 2, t.size, t.size);
        tx.restore();
      } else if (t.isHeart) {
        const s = t.size * 1.3;
        tx.drawImage(getSprite('♥', t.color), t.x - s / 2, t.y - s / 2, s, s);
      } else {
        tx.fillStyle = t.color;
        const s = t.size * t.life * 0.5;
        tx.beginPath();
        for (let k = 0; k < 4; k++) {
          const a = (k * Math.PI) / 2;
          tx.lineTo(t.x + Math.cos(a) * s, t.y + Math.sin(a) * s);
          tx.lineTo(t.x + Math.cos(a + Math.PI / 4) * s * 0.35, t.y + Math.sin(a + Math.PI / 4) * s * 0.35);
        }
        tx.fill();
      }
    }
    tx.globalAlpha = 1;
  }

  /* ================= 6. INTERACTIVE PARTICLE HEART ================= */
  const heartCanvas = $('heart'), hx = heartCanvas.getContext('2d');
  let heartSize = 0, heartPoints = [], heartTime = 0;
  let mouseNearHeart = false, mouseX = 0, mouseY = 0;

  function initHeart() {
    heartSize = heartCanvas.clientWidth;
    if (!heartSize) return;
    heartCanvas.width = heartSize * DPR;
    heartCanvas.height = heartSize * DPR;
    hx.setTransform(DPR, 0, 0, DPR, 0, 0);

    heartPoints = [];
    const count = IS_MOBILE ? 380 : (heartSize < 420 ? 900 : 1400);

    for (let i = 0; i < count; i++) {
      const t = rand(0, Math.PI * 2);
      const k = Math.random() < 0.65 ? 1 : Math.pow(Math.random(), 0.38);
      const x = 16 * Math.sin(t) ** 3;
      const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      heartPoints.push({
        baseX: x * k,
        baseY: y * k,
        offsetX: rand(0, Math.PI * 2),
        radius: rand(0.7, 2.2),
        color: Math.random() < 0.15 ? '#ffffff' : Math.random() < 0.55 ? '#ff3377' : '#ffd27a'
      });
    }
  }

  // Chỉ vẽ trái tim khi nó đang hiện trên màn hình
  let heartVisible = true;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(es => { heartVisible = es[0].isIntersecting; }).observe(heartCanvas);
  }

  function drawHeart() {
    if (!heartSize || !heartVisible) return;
    heartTime += 0.04;
    hx.clearRect(0, 0, heartSize, heartSize);

    // Beating curve
    const beat = 1 + 0.09 * Math.pow(Math.sin(heartTime * 1.8), 12) + 0.03 * Math.sin(heartTime * 1.8);
    const scale = (heartSize / 40) * beat;
    const cx = heartSize / 2, cy = heartSize / 2 - heartSize * 0.02;

    hx.globalCompositeOperation = 'lighter';
    for (let p of heartPoints) {
      hx.globalAlpha = 0.5 + 0.5 * Math.sin(heartTime + p.offsetX);
      hx.fillStyle = p.color;

      const px = cx + (p.baseX + Math.sin(heartTime * 2 + p.offsetX) * 0.4) * scale;
      const py = cy + (p.baseY + Math.cos(heartTime * 2 + p.offsetX) * 0.4) * scale;

      if (IS_MOBILE) {
        hx.fillRect(px - p.radius, py - p.radius, p.radius * 2, p.radius * 2);
      } else {
        hx.beginPath();
        hx.arc(px, py, p.radius, 0, Math.PI * 2);
        hx.fill();
      }
    }
    hx.globalCompositeOperation = 'source-over';
    hx.globalAlpha = 1;
  }

  heartCanvas.addEventListener('click', e => {
    const rect = heartCanvas.getBoundingClientRect();
    flowerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 24);
    playChime(880);
    cycleHeartWord();
  });

  let wordIndex = 0;
  function cycleHeartWord() {
    const label = $('heartLabel');
    label.style.opacity = '0';
    label.style.transform = 'scale(0.8)';
    setTimeout(() => {
      wordIndex = (wordIndex + 1) % CONFIG.heartWords.length;
      label.textContent = CONFIG.heartWords[wordIndex];
      label.style.opacity = '1';
      label.style.transform = 'scale(1)';
    }, 400);
  }
  setInterval(cycleHeartWord, 3200);

  /* ================= 7. POLYPHONIC CRYSTAL MUSIC BOX SYNTH ================= */
  let audioCtx = null;
  let isMusicPlaying = false;
  let musicInterval = null;
  let melodyIndex = 0;

  // Chord progression & melody (Canon in D / Romantic Ballad in D major)
  // Notes: D4, F#4, A4, B4, C#5, D5, E5, F#5, G5, A5
  const FREQS = {
    D3: 146.83, Fs3: 185.0, G3: 196.0, A3: 220.0, B3: 246.94,
    D4: 293.66, E4: 329.63, Fs4: 369.99, G4: 392.0, A4: 440.0, B4: 493.88,
    Cs5: 554.37, D5: 587.33, E5: 659.25, Fs5: 739.99, G5: 783.99, A5: 880.0,
    B5: 987.77, Cs6: 1108.73, D6: 1174.66
  };

  const MELODY_SEQUENCE = [
    { note: 'Fs5', bass: 'D3' }, { note: 'A5' }, { note: 'D6' }, { note: 'Cs6' },
    { note: 'B5', bass: 'B3' }, { note: 'D5' }, { note: 'Fs5' }, { note: 'E5' },
    { note: 'D5', bass: 'G3' }, { note: 'Fs5' }, { note: 'B5' }, { note: 'A5' },
    { note: 'G5', bass: 'A3' }, { note: 'B5' }, { note: 'E5' }, { note: 'Cs5' },
    { note: 'D5', bass: 'D3' }, { note: 'Fs5' }, { note: 'A5' }, { note: 'D6' },
    { note: 'E5', bass: 'A3' }, { note: 'G5' }, { note: 'Cs6' }, { note: 'A5' },
    { note: 'Fs5', bass: 'B3' }, { note: 'D5' }, { note: 'B5' }, { note: 'A5' },
    { note: 'G5', bass: 'G3' }, { note: 'E5' }, { note: 'D5' }, { note: 'Cs5' }
  ];

  function playTone(freq, volume = 0.08, duration = 1.8, isBell = true) {
    if (!audioCtx || !isMusicPlaying) return;
    try {
      const now = audioCtx.currentTime;
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();

      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(freq, now);

      gain1.gain.setValueAtTime(0, now);
      gain1.gain.linearRampToValueAtTime(volume, now + 0.015);
      gain1.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + duration);

      if (isBell) {
        // High crystalline overtone
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(freq * 2.76, now); // Bell harmonic ratio
        gain2.gain.setValueAtTime(0, now);
        gain2.gain.linearRampToValueAtTime(volume * 0.35, now + 0.01);
        gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.6);
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);
        osc2.start(now);
        osc2.stop(now + duration);
      }
    } catch (e) {
      // Audio context might be restricted before user gesture
    }
  }

  function playChime(freq = 660, vol = 0.06) {
    if (!audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    } catch (e) { }
  }

  function playFireworkBoom() {
    if (!audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(30, now + 0.35);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) { }
  }

  function startMusic() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    isMusicPlaying = true;
    $('btnMusic').classList.add('playing');

    clearInterval(musicInterval);
    musicInterval = setInterval(() => {
      if (!isMusicPlaying) return;
      const step = MELODY_SEQUENCE[melodyIndex % MELODY_SEQUENCE.length];
      if (step.note && FREQS[step.note]) {
        playTone(FREQS[step.note], 0.075, 1.8, true);
      }
      if (step.bass && FREQS[step.bass]) {
        playTone(FREQS[step.bass], 0.05, 2.2, false);
      }
      melodyIndex++;
    }, 420);
  }

  function stopMusic() {
    isMusicPlaying = false;
    $('btnMusic').classList.remove('playing');
    clearInterval(musicInterval);
  }

  $('btnMusic').addEventListener('click', e => {
    e.stopPropagation();
    isMusicPlaying ? stopMusic() : startMusic();
  });

  /* ================= 8. INTRO DECORATIONS (ORBIT & FLOWERS) ================= */
  function initIntroDecorations() {
    const orbit = $('orbit');
    if (orbit) {
      const flowers = ['🌸', '🌺', '🌷', '🌼', '🌹', '✨', '💐', '💮', '💖', '⭐'];
      const radius = Math.min(280, W * 0.46);
      orbit.innerHTML = flowers.map((fl, i) => {
        const angle = (i / flowers.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * (radius * 0.65);
        return `<span style="transform: translate(${x - 12}px, ${y - 12}px)">${fl}</span>`;
      }).join('');
    }

    const introFlowers = $('introFlowers');
    if (introFlowers) {
      const fl = ['🌸', '🌺', '🌷', '🌼', '🌹', '💐', '🌻', '💮'];
      let html = '';
      const corners = [[0, 0], [1, 0], [0, 1], [1, 1]];
      corners.forEach(([cx, cy], ci) => {
        for (let i = 0; i < 5; i++) {
          const r = rand(15, 150), a = rand(0, Math.PI / 2);
          const x = Math.cos(a) * r, y = Math.sin(a) * r;
          html += `<span class="fl-item" style="${cx ? 'right' : 'left'}:${x - 20}px; ${cy ? 'bottom' : 'top'}:${y - 20}px; font-size:${rand(28, 52)}px; animation-delay:${ci * 0.2 + i * 0.1}s">${pick(fl)}</span>`;
        }
      });
      const bedCount = Math.ceil(W / 65);
      html += '<div class="intro-bed" style="position:absolute;left:0;right:0;bottom:-10px;height:90px;display:flex;justify-content:space-around;align-items:flex-end;pointer-events:none;">';
      for (let i = 0; i < bedCount; i++) {
        html += `<span class="fl-item" style="font-size:${rand(28, 44)}px; animation-delay:${i * 0.08}s">${pick(fl)}</span>`;
      }
      html += '</div>';
      introFlowers.innerHTML = html;
    }
  }
  initIntroDecorations();

  /* ================= 8. SCENE 1: ENVELOPE OPENING CHOREOGRAPHY ================= */
  let isEnvelopeOpened = false;

  function openEnvelope() {
    if (isEnvelopeOpened) return;
    isEnvelopeOpened = true;

    startMusic();

    const env = $('envelope');
    const intro = $('intro');
    intro.classList.add('opening');

    const sealEl = $('seal');
    const rect = sealEl ? sealEl.getBoundingClientRect() : { left: W / 2, top: H / 2, width: 0, height: 0 };
    explodeFirework(rect.left + rect.width / 2, rect.top + rect.height / 2, '#ffd27a', true);
    flowerBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, IS_MOBILE ? 12 : 35);
    playChime(1046, 0.1);

    // Step 1: Flap opens
    env.classList.add('s1');

    // Step 2: Letter slides up
    setTimeout(() => {
      env.classList.add('s2');
      playChime(880, 0.07);
    }, 900);

    // Step 3: Letter expands in 3D
    setTimeout(() => {
      env.classList.add('s3');
      const b = $('paper').getBoundingClientRect();
      for (let k = 0; k < (IS_MOBILE ? 2 : 6); k++) {
        setTimeout(() => {
          explodeFirework(b.left + rand(0, b.width), b.top + rand(0, b.height), pick(fwColors));
        }, k * 180);
      }
    }, 2400);

    // Step 4: Fade to main stage
    setTimeout(() => {
      intro.classList.add('hide');
      $('main').classList.add('show');
      document.body.classList.remove('locked');

      let n = 0;
      const iv = setInterval(() => {
        launchFirework();
        if (++n > (IS_MOBILE ? 2 : 6)) clearInterval(iv);
      }, 350);

      // Giải phóng màn phong bì sau khi mờ hẳn để trả bộ nhớ cho điện thoại
      setTimeout(() => { intro.style.display = 'none'; }, 1500);

      // Start smooth auto-scroll tour automatically after admiring hero
      setTimeout(() => {
        startAutoScroll();
        autoScrollHoldUntil = performance.now() + 4500;
      }, 600);
    }, 4200);
  }

  if ($('seal')) {
    $('seal').addEventListener('click', e => {
      e.stopPropagation();
      openEnvelope();
    });
  }
  if ($('intro')) {
    $('intro').addEventListener('click', openEnvelope);
  }

  /* ================= 9. TYPEWRITER LETTER ================= */
  let typewriterStarted = false;
  let typewriterFinished = false;
  let typewriterTimeout = null;

  function runTypewriter() {
    typewriterStarted = true;
    typewriterFinished = false;
    const typedEl = $('typed');
    typedEl.textContent = '';

    const caret = document.createElement('span');
    caret.className = 'caret';

    const text = CONFIG.letter;
    let i = 0;

    function step() {
      typedEl.textContent = text.slice(0, i);
      typedEl.appendChild(caret);

      if (i < text.length) {
        const char = text[i++];
        let delay = 36;
        if (char === '\n') delay = 280;
        else if (/[.,!—]/.test(char)) delay = 200;

        typewriterTimeout = setTimeout(step, delay);
      } else {
        $('sign').style.opacity = '1';
        typewriterFinished = true;
      }
    }
    step();
  }

  $('btnReplayLetter').addEventListener('click', e => {
    e.stopPropagation();
    clearTimeout(typewriterTimeout);
    $('sign').style.opacity = '0';
    typewriterFinished = false;
    runTypewriter();
  });

  $('btnInstantLetter').addEventListener('click', e => {
    e.stopPropagation();
    clearTimeout(typewriterTimeout);
    const typedEl = $('typed');
    typedEl.textContent = CONFIG.letter;
    $('sign').style.opacity = '1';
    typewriterFinished = true;
  });

  /* ================= 10. INJECT 6 BESPOKE 3D CARDS ================= */
  const cardsContainer = $('cards');
  CONFIG.cards.forEach((c, idx) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'card reveal';
    cardEl.style.transitionDelay = `${idx * 0.1}s`;

    // 8 flower petals rotating smoothly together
    const petalsHtml = Array.from({ length: 8 }, (_, k) =>
      `<i style="transform: rotate(${k * 45}deg); transform-origin: 50% 60px;"></i>`
    ).join('');

    cardEl.innerHTML = `
      <div class="card-inner">
        <div class="face front">
          <div class="front-tag">${c.tag}</div>
          <div class="card-bloom">
            <div class="card-bloom-petals">${petalsHtml}</div>
            <div class="card-bloom-icon">${c.ico}</div>
          </div>
          <h3 class="front-title">${c.front}</h3>
          <div class="front-tap">✨ CHẠM ĐỂ MỞ ✨</div>
        </div>
        <div class="face back">
          <div class="back-header">
            <div class="back-flowers">🌸 ✦ 🌷 ✦ 🌸</div>
            <h3 class="back-title">${c.title}</h3>
          </div>
          <p class="back-body">${c.text}</p>
          <div class="back-footer">
            <div class="back-tagline">${c.verse}</div>
            <div class="back-hint">↩️ Chạm để lật lại</div>
          </div>
        </div>
      </div>
    `;

    const inner = cardEl.querySelector('.card-inner');

    function toggleFlip() {
      const isFlipped = cardEl.classList.toggle('flipped');
      inner.style.transform = isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)';

      const r = cardEl.getBoundingClientRect();
      flowerBurst(r.left + r.width / 2, r.top + r.height / 2, 22);
      playChime(isFlipped ? 880 : 660, 0.08);
    }

    cardEl.addEventListener('click', e => {
      e.stopPropagation();
      toggleFlip();
    });

    // 3D Mouse Parallax Tilt (only when front is active)
    cardEl.addEventListener('pointermove', e => {
      if (cardEl.classList.contains('flipped')) {
        inner.style.transform = 'rotateY(180deg)';
        return;
      }
      const rect = cardEl.getBoundingClientRect();
      const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
      const yRatio = (e.clientY - rect.top) / rect.height - 0.5;
      inner.style.transform = `rotateY(${xRatio * 20}deg) rotateX(${-yRatio * 20}deg)`;
    });

    cardEl.addEventListener('pointerleave', () => {
      if (cardEl.classList.contains('flipped')) {
        inner.style.transform = 'rotateY(180deg)';
      } else {
        inner.style.transform = 'rotateY(0deg)';
      }
    });

    cardsContainer.appendChild(cardEl);
  });

  // Garland decoration
  const garlandFlowers = ['🌸', '🌺', '🌷', '🌼', '🌹', '💐', '✨'];
  $('garland').innerHTML = Array.from({ length: 11 }, (_, i) => {
    return `<span style="animation-delay:${-i * 0.25}s">${garlandFlowers[i % garlandFlowers.length]}</span>`;
  }).join('');

  // Nút mở tất cả / đóng tất cả thiệp
  const btnFlipAll = $('btnFlipAll');
  if (btnFlipAll) {
    btnFlipAll.addEventListener('click', e => {
      e.stopPropagation();
      const allCards = document.querySelectorAll('.card');
      const anyUnflipped = Array.from(allCards).some(c => !c.classList.contains('flipped'));
      allCards.forEach((c, i) => {
        setTimeout(() => {
          if (anyUnflipped) {
            if (!c.classList.contains('flipped')) c.click();
          } else {
            if (c.classList.contains('flipped')) c.click();
          }
        }, i * 140);
      });
      btnFlipAll.innerHTML = anyUnflipped
        ? '<span class="fa-icon">↩️</span> Khép Lại Tất Cả'
        : '<span class="fa-icon">✨</span> Mở Tất Cả 6 Thiệp';
      playChime(anyUnflipped ? 880 : 523, 0.08);
    });
  }

  /* ================= 11. INTERACTIVE 3D GIFT UNBOXING ================= */
  const giftBoxWrap = $('giftBoxWrap');
  const giftBox = $('giftBox');
  const btnGiftAgain = $('btnGiftAgain');

  giftBox.addEventListener('click', e => {
    e.stopPropagation();
    if (giftBoxWrap.classList.contains('opened')) return;

    giftBoxWrap.classList.add('opened');
    const r = giftBox.getBoundingClientRect();
    flowerBurst(r.left + r.width / 2, r.top + r.height / 2, 35);
    explodeFirework(r.left + r.width / 2, r.top + r.height / 2, '#ffd27a');
    playTone(1046.5, 0.12, 2.5);
  });

  btnGiftAgain.addEventListener('click', e => {
    e.stopPropagation();
    giftBoxWrap.classList.remove('opened');
    playChime(587, 0.06);
  });

  /* ================= 12. SKY LANTERN WISHING ================= */
  const wishInput = $('wishInput');
  const btnSendLantern = $('btnSendLantern');

  function sendWishLantern() {
    const text = (wishInput && wishInput.value.trim()) || '20/10 Mãi Hạnh Phúc, Xinh Đẹp & An Nhiên 💖';
    addLantern(text);
    launchFirework(rand(W * 0.3, W * 0.7), rand(H * 0.2, H * 0.4), true);
    flowerBurst(window.innerWidth / 2, window.innerHeight * 0.8, 22);
    playChime(987, 0.08);
    showToast(`Đã thả đèn lồng: "${text}" ✨`);
    if (wishInput) wishInput.value = '';
  }

  if (btnSendLantern) btnSendLantern.addEventListener('click', sendWishLantern);
  if (wishInput) {
    wishInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') sendWishLantern();
    });
  }

  /* Toast Notification */
  let toastTimer = null;
  function showToast(msg) {
    const toast = $('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  /* ================= 17. SCROLL OBSERVER & AUTO-SCROLL ================= */
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          if (entry.target.id === 'letter' && !typewriterStarted) {
            runTypewriter();
          }
          if (entry.target.id === 'heartWrap') {
            initHeart();
          }
        }
      });
    },
    { threshold: 0.18 }
  );
  revealElements.forEach(el => observer.observe(el));

  /* Smooth Auto-Scroll Tour - Tự động cuộn & tự động mở thiệp/quà */
  let isAutoScrolling = false;
  let autoScrollHoldUntil = 0;
  let lastScrollTimestamp = 0;
  let targetScrollY = 0;
  const SCROLL_VELOCITY = 46; // px per second

  let autoLetterHoldDone = false;
  let autoCardsDone = false;
  let autoGiftDone = false;
  let autoFinaleDone = false;

  function isElementInViewZone(el, topRatio = 0.6) {
    if (!el) return false;
    const r = el.getBoundingClientRect();
    return r.top <= window.innerHeight * topRatio && r.bottom >= 0;
  }

  function autoScrollTick(timestamp) {
    if (!isAutoScrolling) return;
    const delta = Math.min(50, timestamp - (lastScrollTimestamp || timestamp));
    lastScrollTimestamp = timestamp;

    // 1. Tự động dừng ở Thư tình cảm cho đến khi gõ xong
    const letterEl = $('letter');
    if (!autoLetterHoldDone && isElementInViewZone(letterEl, 0.55)) {
      if (!typewriterFinished) {
        autoScrollHoldUntil = Math.max(autoScrollHoldUntil, timestamp + 1000);
      } else {
        autoLetterHoldDone = true;
        autoScrollHoldUntil = Math.max(autoScrollHoldUntil, timestamp + 2500);
      }
    }

    // 2. Tự động mở lần lượt từng thiệp khi cuộn tới Vườn hoa lời chúc
    const cardsSec = $('cards');
    if (!autoCardsDone && isElementInViewZone(cardsSec, 0.65)) {
      autoCardsDone = true;
      const allCards = document.querySelectorAll('.card');
      allCards.forEach((card, idx) => {
        setTimeout(() => {
          if (!card.classList.contains('flipped')) {
            card.click();
          }
        }, 400 + idx * 950);
      });
      // Giữ cuộn trong khi 6 thiệp mở lần lượt, rồi cho người dùng ngắm 3.2s
      autoScrollHoldUntil = Math.max(autoScrollHoldUntil, timestamp + 400 + (allCards.length * 950) + 3200);
    }

    // 3. Tự động mở Hộp Quà May Mắn khi cuộn tới
    const giftWrap = $('giftBoxWrap');
    if (!autoGiftDone && isElementInViewZone(giftWrap, 0.6)) {
      autoGiftDone = true;
      setTimeout(() => {
        if (!giftWrap.classList.contains('opened')) {
          $('giftBox').click();
        }
      }, 500);
      autoScrollHoldUntil = Math.max(autoScrollHoldUntil, timestamp + 4500);
    }

    // 4. Tự động thả đèn lồng & bắn pháo hoa khi tới đáy trang
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (!autoFinaleDone && targetScrollY >= maxScroll - 30) {
      autoFinaleDone = true;
      setTimeout(() => {
        sendWishLantern();
        $('boom').click();
      }, 600);
      stopAutoScroll();
      return;
    }

    const isHold = timestamp < autoScrollHoldUntil;
    if (!isHold) {
      targetScrollY += (SCROLL_VELOCITY * delta) / 1000;
      window.scrollTo(0, targetScrollY);

      if (targetScrollY >= maxScroll - 2) {
        stopAutoScroll();
        return;
      }
    }
    requestAnimationFrame(autoScrollTick);
  }

  function startAutoScroll() {
    isAutoScrolling = true;
    if ($('autoIcon')) $('autoIcon').textContent = '⏸';
    targetScrollY = window.scrollY;
    lastScrollTimestamp = 0;

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (window.scrollY >= maxScroll - 40) {
      window.scrollTo(0, 0);
      targetScrollY = 0;
      autoLetterHoldDone = false;
      autoCardsDone = false;
      autoGiftDone = false;
      autoFinaleDone = false;
      document.querySelectorAll('.card.flipped').forEach(c => c.click());
      if ($('giftBoxWrap') && $('giftBoxWrap').classList.contains('opened')) {
        $('btnGiftAgain').click();
      }
      autoScrollHoldUntil = performance.now() + 3500;
    } else if (window.scrollY < 200) {
      autoLetterHoldDone = false;
      autoCardsDone = false;
      autoGiftDone = false;
      autoFinaleDone = false;
    }

    requestAnimationFrame(autoScrollTick);
  }

  function stopAutoScroll() {
    isAutoScrolling = false;
    if ($('autoIcon')) $('autoIcon').textContent = '▶';
  }

  if ($('btnAuto')) {
    $('btnAuto').addEventListener('click', () => {
      isAutoScrolling ? stopAutoScroll() : startAutoScroll();
    });
  }

  ['wheel', 'touchmove', 'keydown'].forEach(evt => {
    window.addEventListener(evt, () => {
      if (isAutoScrolling) stopAutoScroll();
    }, { passive: true });
  });

  /* Touch anywhere to launch fireworks */
  window.addEventListener('click', e => {
    if (!isEnvelopeOpened) return;
    if (e.target.closest('button, input, textarea, .card, .modal-box, .top-nav, .gift-box')) return;
    launchFirework(e.clientX, e.clientY);
  });

  $('boom').addEventListener('click', e => {
    e.stopPropagation();
    let n = 0;
    const iv = setInterval(() => {
      launchFirework();
      if (++n > 12) clearInterval(iv);
    }, 220);
  });

  // Occasional spontaneous background firework
  setInterval(() => {
    if (isEnvelopeOpened && !document.hidden && Math.random() < 0.4) {
      launchFirework();
    }
  }, 3400);

  /* ================= 18. MASTER ANIMATION LOOP ================= */
  // Điện thoại: giới hạn ~30 khung hình/giây để máy không bị nóng & khựng
  let lastFrame = 0;
  function masterLoop(now) {
    requestAnimationFrame(masterLoop);
    if (IS_MOBILE && now - lastFrame < 32) return;
    lastFrame = now || 0;
    drawStars();
    drawPetals();
    drawLanterns();
    drawFx();
    drawTrail();
    drawHeart();
  }

  resizeAll();
  masterLoop();

})();
