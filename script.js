/**
 * ==========================================================================
 * ORANGE CAT JOURNEY — JAVASCRIPT ENGINE
 * Complete Implementation: Scenes 1-4, Canvas Minigame, Envelope & Letter,
 * Typewriter Engine, and Two-Step Document Download Verification
 * ==========================================================================
 */

'use strict';

/* --------------------------------------------------------------------------
   1. GLOBAL CONFIGURATION (CENTRALIZED & EASILY EDITABLE)
   -------------------------------------------------------------------------- */
const CONFIG = {
  // Default Recipient Name
  defaultUsername: "Ezra",

  // Friendly Validation Text (Welcome Scene)
  validationMsg: "Please enter your name so the orange cat knows who you are! 🐾",

  // Collectibles Popup Messages (Minigame)
  collectiblesMessages: {
    flower: "warmth.",
    star: "little moments.",
    yarn: "comfort.",
    fish: "a tiny reward."
  },

  // ================= LETTER CONFIGURATION (PHASE 3) =================
  letter: {
    salutation: "Dear Ezra,",
    date: "September 2026",
    // Multi-paragraph dummy content (Lorem Ipsum) to test long letters
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi."
    ],
    closingPhrase: "With all my warmest thoughts,",
    closingSignature: "Forever rooting for you. 🧡",
    typingSpeedMs: 16 // Natural typewriter speed
  },

  // ================= DOCUMENT DOWNLOAD CONFIGURATION =================
  download: {
    cardTitle: "A little something to keep",
    cardSubtitle: "Microsoft Word Document • .docx",
    buttonText: "Download the Document",
    buttonTextDownloading: "Downloading...",
    buttonTextDownloaded: "Downloaded ✔",
    documentName: "For You Ezra.docx",
    documentPath: "assets/Document/For You Ezra.docx"
  },

  // ================= VERIFICATION MODAL CONFIGURATION =================
  verification: {
    question: "Lu Ezra bukan?",
    subtext: "Eh kalau bukan Ezra jangan dibuka yaa !",
    yesButton: "Ya",
    noButton: "Tidak",
    yesSuccessMessage: "okei, silahkan. ",
    noDeniedMessage: "jangan dibuka pls, demi gua. ",
    closeButtonText: "Kembali ke Surat"
  },

  // ================= FRIENDS MESSAGES CONFIGURATION (PHASE 3) =================
  // Edit name, avatar, and message here. HTML is generated dynamically.
  friends: {
    sectionTitle: "Messages from the people rooting for us",
    sectionSubtitle: "A little something from the people who are happy to see us together.",
    cards: [
      { name: "Aikel", avatar: "assets/Profil/6152184289953518540.jpg", message: `Oi Ezra, Morvent tuh beneran sayang, cinta, love love banget banget lah sama lu. Lu pasti udah tau juga ye, secara dia tipe orang yang gokil, ga ada gengsi sama sekali buat nunjukin rasa sayangnya dia ke lu. He really wears his heart on his sleeve.

    Kelihatan banget gimana kalian saling support, paham satu sama lain. Semoga lu berdua bisa terus jadi home buat satu sama lain. Tempat yang paling aman buat pulang, buat saling cerita hal random, dan buat bertumbuh bareng jadi pribadi yang lebih baik lagi.

    Semoga rasa sayang, sabar, dan bercandaan kalian engga pernah pudar. Keep growing together, tetap saling melengkapi, dan langgeng terus sampai nanti. Gua yakin lu berdua bisa lewatin ini bareng². Honestly, you guys deserve all the happiness in the world✌🏻` },
      { name: "Mei", avatar: "assets/Profil/6152184289953518539.jpg", message: `hi there! i heard your name is ezra ya, i really dont know what im supposed to talk about here, but i just wanted you know that morvent loves you somuch, maybe you already knew it cause he's such a kind hearted man yg ga malu buat nunjukin rasa sayangnya, but i still wanna tell you that he loves you :>🩷

    i dunno why you guys have so many children but what i know is you guys are super full of love =] APAYA KORELASINYA tp i always thinking in that way :D💘

    hopefully you guys can become a home buat satu sama lain 🏡<3 jadi tempat buat smsm bertumbuh for being a better person 🏩 i know you guys can do it! i hope you guys attacked by happiness yap yap 🎇💛` },
      { name: "Wiccie", avatar: "assets/Profil/6152184289953518538.jpg", message: "OMG GUYS INIYA COTY 2026???🫣. teruntuk ezra congrats yah udah dapet morvent, lu hoki banget kata gua. but, kalian sama sama beruntung sih:). morvent kali ini serius dia pilih lu, and lu jadi the one and only yg dipilih morvent😆😆. long without last yaa for both💕" },
      { name: "Jejes", avatar: "assets/Profil/6152184289953518537.jpg", message: "ngga semua hubungan bisa selucu kalian, idk yaps gua ngeliat kalian lucu banget suerr ✌🏻✌🏻 dari gua untuk kalian berdua, ‘hubungan yang indah bukan tentang siapa yang paling sempurna, tapi tentang dua orang yang nggak pernah berhenti buat nge usahain satu sama lain.’ gua harap, semoga kalian bisa selalu ada satu sama lain, apapun badai nya.. selesain masalahnya jangan hubungannyaa yaa😉😉BE HAPPY ALWAYS MORVENT & EZRA 💕 ‼️" },
      { name: "Mourisse", avatar: "assets/Profil/6152184289953518544.jpg", message: `just wanted to drop this message to say that you two are literally the best match! semoga kalian berdua tetep saling nemenin di kondisi apapun, semakin lama semakin erat hubungannya dan saling jaga satu sama lain.

    buat ezra, tolong jagain my femboy ntik gheemeey ini yaa, dia sayang banget tuh sama lu, jagain baik baik loh ya! awas aja lu nyakitin my ghemey ini, gua yang marah 😠😠

    may your love keep finding new reasons to grow and making ordinary days feel a little less ordinary and may both of you always be surrounded by good health, good energy, dan selalu bisa jadi tempat pulang satu sama lain. long without last, lovebirds! 💞💞` },
      { name: "Nancy", avatar: "assets/Profil/6152184289953518542.jpg", message: `anyway, i just wanna say that i'm really happy for you guys!! <33 semoga hubungan kalian kedepannya selalu dipenuhi hal-hal baik. saling jaga, saling ngerti, dan bisa jadi tempat nyaman satu sama lain. ga harus selalu sempurna, yang penting tetap mau ngobrol, ngerti, dan tumbuh bareng okeee, jangan lupa juga buat appreciate each other even in the smallest things yapp. i hope molvent & ezra can keep choosing each other every day. wishing you both nothing but happiness 🤍 dikabarkan couple ini disetujui dari segala pihak di dunia, couple ini approved by nensi lohya ✌️🏻` },
      { name: "Shakael", avatar: "assets/Profil/6158869350715168085.jpg", message: `Semoga aa sama fwa aa kedepannya tetap bisa saling ngerti, saling jaga, dan nggak gampang nyerah kalau ada masalah. Gua juga berharap fwa aa bisa terus berjalan dengan baik dan kalian tetap punya alasan buat bertahan satu sama lain, bukan cuma pas semuanya lagi baik-baik aja, tapi juga pas lagi ada masalah atau keadaan yang nggak sesuai harapan. Semoga kalian bisa terus jadi tempat nyaman buat satu sama lain, bisa saling dengerin tanpa ngerasa dihakimi, dan tetap menghargai perasaan masing-masing.

    Gua berharap juga apa pun yang terjadi nanti, kalian nggak lupa sama hal-hal baik yang udah kalian lewatin bareng sampai sekarang. Jangan sampai masalah kecil bikin semua hal baik yang udah dibangun jadi sia-sia. Kalau memang ada salah paham, semoga bisa dibicarain baik-baik dan nggak dipendem sendiri. Gua juga berharap aa selalu ngerasa dihargai dan disayang sama fwa aa.

    Pokoknya semoga apa yang sekarang lu jalanin bisa terus bikin lu bahagia, Aa. Gua seneng kalau liat aa punya seseorang yang bikin aa nyaman dan bisa nemenin aa sejauh ini. Gua dukung aa terus, apa pun yang terjadi, dan semoga aa sama fwa aa bisa awet, langgeng, makin nyaman satu sama lain, dan punya banyak cerita baik kedepannya. Semoga yang awalnya cuma sekrit-sekrit begini malah bisa jadi salah satu hubungan yang paling berkesan buat aa` },
      { name: "Alastair", avatar: "assets/Profil/6152184289953518543.jpg", message: "longlive, longlast" },
      { name: "Berbinar", avatar: "assets/Profil/6156687889580887829.jpg", message: "kiukiu apakah ini adalah hari yang spesial???\n\neyyy, kalian berdua sangat lucuu, gemas sekali. jalaninya semua sama-sama yaa, kalau ada masalah coba diomongin baik-baik. seneng deh my sahabat sekarang punya seseorang yang spesial. i hope your relationship berjalan dengan mulus yaa. ngga ada hal yang membuat salah paham satu sama lain. bisa saling mengerti dan jadi sandaran satu sama lain. i hope you are always surrounded by happiness. longlast yaa💗💗💗🫶🏻🫶🏻🫶🏻" },
      { name: "Dyro", avatar: "assets/Profil/6156687889580887828.jpg", message: `"gua liat juhoon sebagai ash" and of course "ezra adalah martin" sesimpel ini udah bikin gua mikir, dunia bakal indah karena liat kalian berdua😏😏😏
    lucunya kalian itu beda tau, kayak ada aura penyemangat satu sama lain asli,

    "hubungan yang kuat kuncinya cuma komunikasi, klo komunikasinya bagus pasti gada yg miskom gada salah faham" so baik' kalian ya, gua gulung dunia klo kalian asing❌❌❌

    LONG WITHOUT LAST ASH❤️❤️EZRA` },
      { name: "Chiestally", avatar: "assets/Profil/6156687889580887769.jpg", message: "warmest wishes for both of you! semoga ke depannya perjalanan kalian makin seru, banyak momen manisnya, dan bisa makin saling ngerti satu sama lain. semoga apa yang disemogakan selalu dilancarkan, dan kalian berdua bisa terus jadi support system dan tempat 'pulang' untuk satu sama lain. may your journey together be full of love and endless happiness! 💕" },
      { name: "Junno", avatar: "assets/Profil/6156687889580887765.jpg", message: "hope you two stay solid and keep thriving together! longlast ya kalian berduaaa, lancar terus pls demi aku demi suami istri favorite aku ⭐️____⭐️" }
    ]
  },

  // Final Quote (Phase 5 preview)
  finalQuote: "If I had to choose again,\nI'd still choose meeting you."
};

// ================= MUSIC PLAYLIST CONFIGURATION =================
CONFIG.music = {
  heading: "A little song for you",
  subtitle: "Maybe listen to this while you read the messages below.",
  artworks: [
    "assets/Background/Manips widget 1.jpg",
    "assets/Background/Manips widget 2.jpg",
    "assets/Background/Manips widget 3.jpg",
    "assets/Background/Manips widget 4.jpg",
    "assets/Background/Manips widget 5.jpg"
  ],
  playlist: [
    { title: "Futile Devices", artist: "Sufjan Stevens", audio: "assets/Music/call_me_by_your_name_09_Sufjan_Stevens_Futile_Devices_Doveman_Remix.mp3" },
    { title: "Mystery of Love", artist: "Sufjan Stevens", audio: "assets/Music/Sufjan Stevens - Mystery of Love (Lyrics on Screen) [1Igbi9jPGm4].mp3" },
    { title: "Membasuh", artist: "Hindia", audio: "assets/Music/hindia-membasuh.m4a" },
    { title: "Purple Rain", artist: "Prince", audio: "assets/Music/Purple Rain - Prince and the Revolution _ Lirik Terjemahan Indonesia [GuQ-XpMFm8c].mp3" },
    { title: "Earrings", artist: "Malcolm Todd", audio: "assets/Music/01 - Malcolm Todd - Earrings.mp3" },
    { title: "Sienna", artist: "The Marías", audio: "assets/Music/The Marías - Sienna.flac" },
    { title: "Risk It All", artist: "Bruno Mars", audio: "assets/Music/Risk It All - Bruno Mars.mp3" },
    { title: "Evergreen", artist: "Omar Apollo", audio: "assets/Music/Omar_Apollo_Evergreen_You_Didn_t_Deserve_Me_At_All_Lyrics.mp3" },
    { title: "Last Night on Earth", artist: "Green Day", audio: "assets/Music/[Sub Thai] Last Night on Earth - Green Day.mp3" },
    { title: "Snakelike", artist: "whatsaheart", audio: "assets/Music/Whatsaheart - snakelike.mp3" }
  ]
};

/* --------------------------------------------------------------------------
   2. APPLICATION STATE MANAGEMENT
   -------------------------------------------------------------------------- */
const AppState = {
  username: "",
  currentScene: "welcome-scene",
  collectiblesFound: 0,
  totalCollectibles: 4,
  isGameFinished: false,
  isLetterOpened: false,
  isTypewriterFinished: false,
  isVerified: false
};

/* --------------------------------------------------------------------------
   3. AUDIO MANAGER (PLACEHOLDER FOR SOUND EFFECTS & BGM)
   -------------------------------------------------------------------------- */
const AudioManager = {
  bgmPlaying: false,

  playBGM() {
    // Placeholder method for ambient background music
  },

  playCollect() {
    // Placeholder method for soft chime effect on collectible touch
  },

  playFinish() {
    // Placeholder method for warm completion melody
  },

  playPaper() {
    // Placeholder method for gentle paper rustle effect
  }
};

/* --------------------------------------------------------------------------
   4. DOM ELEMENTS REFERENCE
   -------------------------------------------------------------------------- */
const DOM = {
  // Welcome Scene
  welcomeScene: document.getElementById('welcome-scene'),
  welcomeForm: document.getElementById('welcome-form'),
  usernameInput: document.getElementById('username-input'),
  validationMsg: document.getElementById('validation-msg'),
  btnContinue: document.getElementById('btn-continue'),

  // Intro Scene
  introScene: document.getElementById('intro-scene'),
  displayUsername: document.getElementById('display-username'),
  btnStartJourney: document.getElementById('btn-start-journey'),

  // Game Scene
  gameScene: document.getElementById('game-scene'),
  gameCanvas: document.getElementById('game-canvas'),
  gameViewport: document.getElementById('game-viewport'),
  gameLoadingOverlay: document.getElementById('game-loading-overlay'),
  gameFadeOverlay: document.getElementById('game-fade-overlay'),
  endJourneyCard: document.getElementById('end-journey-card'),
  endJourneyText: document.getElementById('end-journey-text'),
  btnToLetter: document.getElementById('btn-to-letter'),
  collectibleCount: document.getElementById('collectible-count'),
  floatingMsgContainer: document.getElementById('floating-msg-container'),

  // Letter Scene (Scene 4)
  letterScene: document.getElementById('letter-scene'),
  envelopeStage: document.getElementById('envelope-stage'),
  envelopeWrapper: document.getElementById('envelope-wrapper'),
  letterCardContainer: document.getElementById('letter-card-container'),
  letterPaper: document.getElementById('letter-paper'),
  letterSalutation: document.getElementById('letter-salutation'),
  letterDate: document.getElementById('letter-date'),
  letterContentScroll: document.getElementById('letter-content-scroll'),
  letterBodyText: document.getElementById('letter-body-text'),
  typewriterCursor: document.getElementById('typewriter-cursor'),
  letterClosing: document.getElementById('letter-closing'),
  btnSkipTyping: document.getElementById('btn-skip-typing'),

  // Document Download Section
  downloadSection: document.getElementById('download-section'),
  btnOpenDownloadModal: document.getElementById('btn-open-download-modal'),
  downloadBtnText: document.getElementById('download-btn-text'),

  // Verification Modal
  verificationModal: document.getElementById('verification-modal'),
  modalBackdrop: document.getElementById('modal-backdrop'),
  modalDialog: document.getElementById('modal-dialog'),
  modalQuestion: document.getElementById('modal-question'),
  modalSubtext: document.getElementById('modal-subtext'),
  modalFeedbackBox: document.getElementById('modal-feedback-box'),
  modalFeedbackText: document.getElementById('modal-feedback-text'),
  modalActions: document.getElementById('modal-actions'),
  btnVerifyYes: document.getElementById('btn-verify-yes'),
  btnVerifyNo: document.getElementById('btn-verify-no'),
  btnModalClose: document.getElementById('btn-modal-close'),

  // Friends Messages Section
  friendsSection: document.getElementById('friends-section'),
  friendsHeading: document.getElementById('friends-heading'),
  friendsSubheading: document.getElementById('friends-subheading'),
  friendsGrid: document.getElementById('friends-grid'),

  // Background Elements
  ambientBg: document.getElementById('ambient-bg'),
  postLetterBg: document.getElementById('post-letter-bg')
};

/* --------------------------------------------------------------------------
   5. SCENE CONTROLLER MODULE
   -------------------------------------------------------------------------- */
const SceneController = {
  switchScene(targetSceneId) {
    const targetSceneElem = document.getElementById(targetSceneId);
    if (!targetSceneElem) return;

    // Deactivate previous scene (if any) to avoid leaving interactive layers active
    const prevSceneId = AppState.currentScene;
    if (prevSceneId && prevSceneId !== targetSceneId) {
      const prevElem = document.getElementById(prevSceneId);
      if (prevElem) {
        prevElem.classList.remove('active');
        prevElem.classList.add('hidden');
      }

      // If we are leaving the game scene, perform cleanup: stop engine, remove input handlers,
      // and ensure game overlays / d-pad are not interactive any more.
      if (prevSceneId === 'game-scene') {
        try {
          GameEngine.stop();
        } catch (err) {
          // swallow - defensive
        }
        try {
          InputManager.destroy();
        } catch (err) {}

        // hide mobile dpad if present inside previous scene
        if (prevElem) {
          const dpad = prevElem.querySelector('.mobile-dpad');
          if (dpad) dpad.style.display = 'none';
        }

        // Restore document scrolling after leaving the game (mobile rule may have locked it)
        try {
          document.documentElement.style.overflow = '';
          document.body.style.overflow = '';
        } catch (err) {}
      }
    }

    // Activate target scene
    targetSceneElem.classList.remove('hidden');
    targetSceneElem.classList.add('active');
    AppState.currentScene = targetSceneId;

    if (targetSceneId === 'game-scene') {
      // Ensure game scene UI is visible and interactive, then start engine
      // make mobile dpad visible when entering game
      const dpad = targetSceneElem.querySelector('.mobile-dpad');
      if (dpad) dpad.style.display = '';

      // Temporarily lock document scrolling while the game is active (mobile)
      try {
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
      } catch (err) {}

      GameEngine.start();
    } else if (targetSceneId === 'letter-scene') {
      LetterModule.startEnvelopeReveal();
    }

    // Smoothly scroll down to the newly unlocked section
    setTimeout(() => {
      targetSceneElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }
};

/* --------------------------------------------------------------------------
   6. WELCOME & INTRO SCENE MANAGERS
   -------------------------------------------------------------------------- */
const WelcomeModule = {
  init() {
    if (!DOM.welcomeForm || !DOM.usernameInput) return;

    DOM.welcomeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleContinue();
    });

    DOM.usernameInput.addEventListener('input', () => {
      this.hideValidationError();
    });

    setTimeout(() => DOM.usernameInput.focus(), 300);
  },

  handleContinue() {
    const rawValue = DOM.usernameInput.value.trim();

    if (rawValue.length === 0) {
      this.showValidationError();
      return;
    }

    const formattedName = rawValue.charAt(0).toUpperCase() + rawValue.slice(1);
    AppState.username = formattedName;

    if (DOM.displayUsername) {
      DOM.displayUsername.textContent = formattedName;
    }

    SceneController.switchScene('intro-scene');
  },

  showValidationError() {
    if (!DOM.validationMsg) return;
    DOM.validationMsg.classList.remove('hidden');
    DOM.usernameInput.focus();

    DOM.usernameInput.parentElement.classList.remove('shake-input');
    void DOM.usernameInput.parentElement.offsetWidth;
    DOM.usernameInput.parentElement.classList.add('shake-input');
  },

  hideValidationError() {
    if (!DOM.validationMsg) return;
    DOM.validationMsg.classList.add('hidden');
  }
};

const IntroModule = {
  init() {
    if (!DOM.btnStartJourney) return;

    DOM.btnStartJourney.addEventListener('click', () => {
      SceneController.switchScene('game-scene');
    });
  }
};

/* --------------------------------------------------------------------------
   7. INPUT MANAGER MODULE (KEYBOARD & TOUCH DPAD)
   -------------------------------------------------------------------------- */
const InputManager = {
  keys: {
    up: false,
    down: false,
    left: false,
    right: false
  },
  _inited: false,
  _keydownHandler: null,
  _keyupHandler: null,
  _dpadListeners: [],

  init() {
    if (this._inited) return;
    this._inited = true;
    // Keyboard listeners
    this._keydownHandler = (e) => this.handleKey(e, true);
    this._keyupHandler = (e) => this.handleKey(e, false);
    window.addEventListener('keydown', this._keydownHandler);
    window.addEventListener('keyup', this._keyupHandler);

    // Touch D-Pad listeners
    const dpadBtns = document.querySelectorAll('.dpad-btn');
    dpadBtns.forEach(btn => {
      const dir = btn.getAttribute('data-dir');
      if (!dir) return;

      const setDir = (state) => {
        if (dir in this.keys) this.keys[dir] = state;
      };

      const touchStart = (e) => { e.preventDefault(); setDir(true); };
      const touchEnd = (e) => { e.preventDefault(); setDir(false); };
      const mouseDown = () => setDir(true);
      const mouseUp = () => setDir(false);
      const mouseLeave = () => setDir(false);

      btn.addEventListener('touchstart', touchStart);
      btn.addEventListener('touchend', touchEnd);
      btn.addEventListener('mousedown', mouseDown);
      btn.addEventListener('mouseup', mouseUp);
      btn.addEventListener('mouseleave', mouseLeave);

      this._dpadListeners.push({ btn, handlers: { touchStart, touchEnd, mouseDown, mouseUp, mouseLeave } });
    });
  },

  destroy() {
    // Remove keyboard handlers
    if (this._keydownHandler) {
      window.removeEventListener('keydown', this._keydownHandler);
      this._keydownHandler = null;
    }
    if (this._keyupHandler) {
      window.removeEventListener('keyup', this._keyupHandler);
      this._keyupHandler = null;
    }

    // Remove dpad handlers
    if (this._dpadListeners && this._dpadListeners.length) {
      this._dpadListeners.forEach(item => {
        const { btn, handlers } = item;
        if (!btn || !handlers) return;
        btn.removeEventListener('touchstart', handlers.touchStart);
        btn.removeEventListener('touchend', handlers.touchEnd);
        btn.removeEventListener('mousedown', handlers.mouseDown);
        btn.removeEventListener('mouseup', handlers.mouseUp);
        btn.removeEventListener('mouseleave', handlers.mouseLeave);
      });
      this._dpadListeners = [];
    }

    // Reset keys
    this.keys.up = this.keys.down = this.keys.left = this.keys.right = false;
    this._inited = false;
  },

  handleKey(e, isPressed) {
    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.keys.up = isPressed;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.keys.down = isPressed;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.keys.left = isPressed;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.keys.right = isPressed;
        break;
    }
  },

  getVector() {
    let dx = 0;
    let dy = 0;
    if (this.keys.up) dy -= 1;
    if (this.keys.down) dy += 1;
    if (this.keys.left) dx -= 1;
    if (this.keys.right) dx += 1;

    if (dx !== 0 && dy !== 0) {
      dx *= 0.7071;
      dy *= 0.7071;
    }
    return { dx, dy };
  }
};

/* --------------------------------------------------------------------------
   8. CAMERA MODULE (SMOOTH LERP FOLLOW)
   -------------------------------------------------------------------------- */
class Camera {
  constructor(viewportWidth, viewportHeight, mapWidth, mapHeight) {
    this.viewportWidth = viewportWidth;
    this.viewportHeight = viewportHeight;
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.x = 0;
    this.y = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.lerpSpeed = 0.08;
  }

  follow(targetX, targetY) {
    this.targetX = targetX - this.viewportWidth / 2;
    this.targetY = targetY - this.viewportHeight / 2;

    this.targetX = Math.max(0, Math.min(this.targetX, this.mapWidth - this.viewportWidth));
    this.targetY = Math.max(0, Math.min(this.targetY, this.mapHeight - this.viewportHeight));

    this.x += (this.targetX - this.x) * this.lerpSpeed;
    this.y += (this.targetY - this.y) * this.lerpSpeed;
  }
}

/* --------------------------------------------------------------------------
   9. PLAYER MODULE (CUTE VECTOR ORANGE CAT)
   -------------------------------------------------------------------------- */
class OrangeCat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 16;
    this.vx = 0;
    this.vy = 0;
    this.maxSpeed = 2.8;
    this.accel = 0.35;
    this.friction = 0.82;

    this.direction = 'down';
    this.isMoving = false;
    this.animTime = 0;
    this.tailAngle = 0;
    this.isControlsDisabled = false;
  }

  update(dt, inputVector, mapWidth, mapHeight) {
    if (this.isControlsDisabled) {
      this.vx *= 0.5;
      this.vy *= 0.5;
      this.isMoving = false;
      this.animTime += dt;
      this.tailAngle = Math.sin(this.animTime * 3) * 0.2;
      return;
    }

    const { dx, dy } = inputVector;

    if (dx !== 0 || dy !== 0) {
      this.vx += dx * this.accel;
      this.vy += dy * this.accel;
      this.isMoving = true;

      if (Math.abs(dx) > Math.abs(dy)) {
        this.direction = dx > 0 ? 'right' : 'left';
      } else {
        this.direction = dy > 0 ? 'down' : 'up';
      }
    } else {
      this.isMoving = false;
    }

    this.vx *= this.friction;
    this.vy *= this.friction;

    const speed = Math.hypot(this.vx, this.vy);
    if (speed > this.maxSpeed) {
      this.vx = (this.vx / speed) * this.maxSpeed;
      this.vy = (this.vy / speed) * this.maxSpeed;
    }

    this.x += this.vx;
    this.y += this.vy;

    this.x = Math.max(30, Math.min(mapWidth - 30, this.x));
    this.y = Math.max(30, Math.min(mapHeight - 30, this.y));

    this.animTime += dt * (this.isMoving ? 10 : 3);
    this.tailAngle = Math.sin(this.animTime) * (this.isMoving ? 0.35 : 0.15);
  }

  draw(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);

    // 1. Soft Shadow
    ctx.fillStyle = "rgba(92, 67, 52, 0.22)";
    ctx.beginPath();
    ctx.ellipse(0, 14, 15, 7, 0, 0, Math.PI * 2);
    ctx.fill();

    const bounceY = this.isMoving ? Math.sin(this.animTime * 2) * 2.5 : 0;
    const legOffset = this.isMoving ? Math.sin(this.animTime * 2) * 4 : 0;

    ctx.translate(0, bounceY);

    // 2. Tail
    ctx.save();
    ctx.translate(this.direction === 'left' ? 10 : (this.direction === 'right' ? -10 : 0), 6);
    ctx.rotate(this.tailAngle);
    ctx.strokeStyle = "#E78A53";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.quadraticCurveTo(-6, 12, -4, 20);
    ctx.stroke();

    ctx.strokeStyle = "#FFF5EB";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-4, 16);
    ctx.lineTo(-4, 20);
    ctx.stroke();
    ctx.restore();

    // 3. Cute Paws
    ctx.fillStyle = "#E78A53";
    ctx.beginPath();
    ctx.arc(-8 + legOffset, 12, 4, 0, Math.PI * 2);
    ctx.arc(8 - legOffset, 12, 4, 0, Math.PI * 2);
    ctx.arc(-9 - legOffset, 4, 4, 0, Math.PI * 2);
    ctx.arc(9 + legOffset, 4, 4, 0, Math.PI * 2);
    ctx.fill();

    // 4. Cat Body & Belly
    ctx.fillStyle = "#E78A53";
    ctx.beginPath();
    ctx.arc(0, 4, 15, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#FFF5EB";
    ctx.beginPath();
    ctx.arc(0, 6, 9, 0, Math.PI * 2);
    ctx.fill();

    // 5. Head & Ears
    ctx.fillStyle = "#E78A53";
    ctx.beginPath();
    ctx.arc(0, -6, 13, 0, Math.PI * 2);
    ctx.fill();

    // Left Ear
    ctx.beginPath();
    ctx.moveTo(-12, -12);
    ctx.lineTo(-6, -20);
    ctx.lineTo(-2, -12);
    ctx.fill();
    // Right Ear
    ctx.beginPath();
    ctx.moveTo(12, -12);
    ctx.lineTo(6, -20);
    ctx.lineTo(2, -12);
    ctx.fill();

    // Inner Ears
    ctx.fillStyle = "#F6AD7B";
    ctx.beginPath();
    ctx.moveTo(-10, -13);
    ctx.lineTo(-6, -18);
    ctx.lineTo(-3, -13);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(10, -13);
    ctx.lineTo(6, -18);
    ctx.lineTo(3, -13);
    ctx.fill();

    // 6. Facial Features
    let eyeOffsetX = 0;
    let eyeOffsetY = 0;
    if (this.direction === 'left') eyeOffsetX = -3;
    if (this.direction === 'right') eyeOffsetX = 3;
    if (this.direction === 'up') eyeOffsetY = -4;
    if (this.direction === 'down') eyeOffsetY = 1;

    if (this.direction !== 'up') {
      ctx.fillStyle = "#5C4334";
      ctx.beginPath();
      ctx.arc(-5 + eyeOffsetX, -6 + eyeOffsetY, 2.5, 0, Math.PI * 2);
      ctx.arc(5 + eyeOffsetX, -6 + eyeOffsetY, 2.5, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#FFFFFF";
      ctx.beginPath();
      ctx.arc(-6 + eyeOffsetX, -7 + eyeOffsetY, 0.8, 0, Math.PI * 2);
      ctx.arc(4 + eyeOffsetX, -7 + eyeOffsetY, 0.8, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#D3753E";
      ctx.beginPath();
      ctx.ellipse(0 + eyeOffsetX, -3 + eyeOffsetY, 1.5, 1, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "rgba(246, 173, 123, 0.5)";
      ctx.beginPath();
      ctx.arc(-7 + eyeOffsetX, -2 + eyeOffsetY, 2.5, 0, Math.PI * 2);
      ctx.arc(7 + eyeOffsetX, -2 + eyeOffsetY, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}

/* --------------------------------------------------------------------------
   10. GARDEN MAP & ENVIRONMENT MODULE
   -------------------------------------------------------------------------- */
class GardenMap {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.pathPoints = [
      { x: 80, y: 350 },
      { x: 260, y: 350 },
      { x: 420, y: 220 },
      { x: 640, y: 220 },
      { x: 820, y: 440 },
      { x: 1040, y: 440 },
      { x: 1240, y: 440 }
    ];

    this.trees = [
      { x: 140, y: 120, r: 42 },
      { x: 380, y: 90, r: 48 },
      { x: 740, y: 110, r: 52 },
      { x: 980, y: 140, r: 46 },
      { x: 1280, y: 180, r: 55 },
      { x: 180, y: 640, r: 50 },
      { x: 520, y: 680, r: 54 },
      { x: 900, y: 650, r: 48 },
      { x: 1180, y: 670, r: 52 }
    ];

    this.flowers = [];
    this.initFlowers();

    this.particles = [];
    this.initParticles();
  }

  initFlowers() {
    const colors = ["#FFF0E6", "#FEE8B0", "#F6AD7B", "#E8C5E5", "#D8E2DC"];
    for (let i = 0; i < 60; i++) {
      this.flowers.push({
        x: Math.random() * (this.width - 100) + 50,
        y: Math.random() * (this.height - 100) + 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 5 + Math.random() * 4,
        swayPhase: Math.random() * Math.PI * 2
      });
    }
  }

  initParticles() {
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: 3 + Math.random() * 3,
        speedX: 0.4 + Math.random() * 0.6,
        speedY: 0.2 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.4
      });
    }
  }

  update(dt) {
    this.particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      if (p.x > this.width) p.x = -10;
      if (p.y > this.height) p.y = -10;
    });
  }

  draw(ctx, camera, time) {
    // 1. Soft Grass
    ctx.fillStyle = "#A3C9A8";
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.fillStyle = "rgba(141, 184, 146, 0.4)";
    for (let x = 40; x < this.width; x += 120) {
      for (let y = 40; y < this.height; y += 100) {
        ctx.beginPath();
        ctx.arc(x, y, 35, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 2. Wooden Cobblestone Path
    ctx.lineWidth = 64;
    ctx.strokeStyle = "#EBE3D5";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(this.pathPoints[0].x, this.pathPoints[0].y);
    for (let i = 1; i < this.pathPoints.length; i++) {
      ctx.lineTo(this.pathPoints[i].x, this.pathPoints[i].y);
    }
    ctx.stroke();

    ctx.lineWidth = 52;
    ctx.strokeStyle = "#F5EFE4";
    ctx.stroke();

    ctx.strokeStyle = "#D6C7B2";
    ctx.lineWidth = 4;
    for (let i = 0; i < this.pathPoints.length - 1; i++) {
      const p1 = this.pathPoints[i];
      const p2 = this.pathPoints[i + 1];
      const steps = 4;
      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const sx = p1.x + (p2.x - p1.x) * t;
        const sy = p1.y + (p2.y - p1.y) * t;
        ctx.beginPath();
        ctx.moveTo(sx - 15, sy - 10);
        ctx.lineTo(sx + 15, sy + 10);
        ctx.stroke();
      }
    }

    // 3. Swaying Flowers
    this.flowers.forEach(f => {
      const sway = Math.sin(time * 2 + f.swayPhase) * 2;
      ctx.fillStyle = f.color;
      ctx.beginPath();
      ctx.arc(f.x + sway, f.y, f.size, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#F7D070";
      ctx.beginPath();
      ctx.arc(f.x + sway, f.y, f.size * 0.4, 0, Math.PI * 2);
      ctx.fill();
    });

    // 4. Decorative Trees
    this.trees.forEach(t => {
      ctx.fillStyle = "rgba(92, 67, 52, 0.18)";
      ctx.beginPath();
      ctx.ellipse(t.x, t.y + t.r * 0.7, t.r * 0.9, t.r * 0.4, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#8C6D58";
      ctx.fillRect(t.x - 8, t.y, 16, t.r * 0.7);

      const sway = Math.sin(time * 1.5 + t.x) * 3;
      ctx.fillStyle = "#7FA985";
      ctx.beginPath();
      ctx.arc(t.x + sway, t.y - 10, t.r, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#95BF9B";
      ctx.beginPath();
      ctx.arc(t.x + sway - 6, t.y - 18, t.r * 0.75, 0, Math.PI * 2);
      ctx.fill();
    });

    // 5. Drifting Petals
    ctx.fillStyle = "#FFF0E6";
    this.particles.forEach(p => {
      ctx.globalAlpha = p.opacity;
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, p.size, p.size * 0.5, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.globalAlpha = 1.0;
  }
}

/* --------------------------------------------------------------------------
   11. COLLECTIBLE ITEM MODULE
   -------------------------------------------------------------------------- */
class Collectible {
  constructor(x, y, type, message) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.message = message;
    this.radius = 18;
    this.isCollected = false;
    this.floatOffset = Math.random() * Math.PI * 2;
  }

  update(dt, time) {
    this.floatY = Math.sin(time * 3 + this.floatOffset) * 5;
  }

  draw(ctx) {
    if (this.isCollected) return;

    ctx.save();
    ctx.translate(this.x, this.y + this.floatY);

    ctx.fillStyle = "rgba(247, 208, 112, 0.25)";
    ctx.beginPath();
    ctx.arc(0, 0, 24, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "rgba(92, 67, 52, 0.15)";
    ctx.beginPath();
    ctx.ellipse(0, 18, 12, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    switch (this.type) {
      case 'flower':
        ctx.fillStyle = "#F6AD7B";
        for (let i = 0; i < 5; i++) {
          const angle = (i * Math.PI * 2) / 5;
          ctx.beginPath();
          ctx.arc(Math.cos(angle) * 8, Math.sin(angle) * 8, 6, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = "#F7D070";
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI * 2);
        ctx.fill();
        break;

      case 'star':
        ctx.fillStyle = "#F7D070";
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          const a1 = (i * Math.PI * 2) / 5 - Math.PI / 2;
          const a2 = a1 + Math.PI / 5;
          ctx.lineTo(Math.cos(a1) * 12, Math.sin(a1) * 12);
          ctx.lineTo(Math.cos(a2) * 5, Math.sin(a2) * 5);
        }
        ctx.closePath();
        ctx.fill();
        break;

      case 'yarn':
        ctx.fillStyle = "#E8C5E5";
        ctx.beginPath();
        ctx.arc(0, 0, 11, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, 7, 0, Math.PI);
        ctx.stroke();
        break;

      case 'fish':
        ctx.fillStyle = "#A3C9A8";
        ctx.beginPath();
        ctx.ellipse(0, 0, 10, 6, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(8, 0);
        ctx.lineTo(14, -6);
        ctx.lineTo(14, 6);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = "#5C4334";
        ctx.beginPath();
        ctx.arc(-5, -2, 1.5, 0, Math.PI * 2);
        ctx.fill();
        break;
    }

    ctx.restore();
  }
}

/* --------------------------------------------------------------------------
   12. GOAL ENVELOPE MODULE
   -------------------------------------------------------------------------- */
class GoalEnvelope {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 24;
    this.isReached = false;
  }

  draw(ctx, time) {
    ctx.save();
    ctx.translate(this.x, this.y);

    ctx.fillStyle = "#FFF0E6";
    ctx.beginPath();
    ctx.ellipse(0, 10, 36, 20, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#F6AD7B";
    ctx.lineWidth = 2;
    ctx.stroke();

    const pulse = Math.sin(time * 4) * 4;
    ctx.fillStyle = "rgba(246, 173, 123, 0.25)";
    ctx.beginPath();
    ctx.arc(0, 0, 26 + pulse, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#FFFFFF";
    ctx.strokeStyle = "#E78A53";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.rect(-18, -12, 36, 24);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(-18, -12);
    ctx.lineTo(0, 2);
    ctx.lineTo(18, -12);
    ctx.stroke();

    ctx.fillStyle = "#E78A53";
    ctx.beginPath();
    ctx.arc(0, 2, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

/* --------------------------------------------------------------------------
   13. GAME ENGINE MAIN MODULE
   -------------------------------------------------------------------------- */
const GameEngine = {
  canvas: null,
  ctx: null,
  isRunning: false,
  lastTime: 0,
  timeSec: 0,

  map: null,
  player: null,
  camera: null,
  collectibles: [],
  goalEnvelope: null,

  start() {
    this.canvas = DOM.gameCanvas;
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    InputManager.init();

    const mapW = 1400;
    const mapH = 850;
    this.map = new GardenMap(mapW, mapH);
    this.player = new OrangeCat(100, 350);
    this.camera = new Camera(this.canvas.width, this.canvas.height, mapW, mapH);

    this.collectibles = [
      new Collectible(320, 330, 'yarn', CONFIG.collectiblesMessages.yarn),
      new Collectible(550, 200, 'flower', CONFIG.collectiblesMessages.flower),
      new Collectible(750, 320, 'star', CONFIG.collectiblesMessages.star),
      new Collectible(1000, 420, 'fish', CONFIG.collectiblesMessages.fish)
    ];

    this.goalEnvelope = new GoalEnvelope(1240, 440);

    setTimeout(() => {
      if (DOM.gameLoadingOverlay) {
        DOM.gameLoadingOverlay.style.opacity = '0';
        setTimeout(() => DOM.gameLoadingOverlay.style.display = 'none', 500);
      }
    }, 600);

    this.isRunning = true;
    this.lastTime = performance.now();
    requestAnimationFrame((t) => this.loop(t));
  },

  stop() {
    // Stop the game loop
    this.isRunning = false;

    // Ensure the game fade overlay is not interactive or visible
    if (DOM.gameFadeOverlay) {
      DOM.gameFadeOverlay.classList.remove('active');
      DOM.gameFadeOverlay.classList.add('hidden');
      // also ensure pointer-events is not blocking (CSS default for non-active overlay)
      DOM.gameFadeOverlay.style.pointerEvents = '';
    }

    // Hide end journey card and letter trigger inside game overlay
    if (DOM.endJourneyCard) DOM.endJourneyCard.classList.add('hidden');
    if (DOM.btnToLetter) DOM.btnToLetter.classList.add('hidden');

    // Re-enable controls on player if present
    if (this.player) this.player.isControlsDisabled = false;
  },

  loop(currentTime) {
    if (!this.isRunning) return;

    const dt = Math.min((currentTime - this.lastTime) / 1000, 0.1);
    this.lastTime = currentTime;
    this.timeSec += dt;

    const inputVector = InputManager.getVector();
    this.player.update(dt, inputVector, this.map.width, this.map.height);
    this.camera.follow(this.player.x, this.player.y);
    this.map.update(dt);
    this.collectibles.forEach(c => c.update(dt, this.timeSec));

    this.collectibles.forEach(c => {
      if (!c.isCollected) {
        const dist = Math.hypot(this.player.x - c.x, this.player.y - c.y);
        if (dist < this.player.radius + c.radius) {
          c.isCollected = true;
          AppState.collectiblesFound++;
          AudioManager.playCollect();

          if (DOM.collectibleCount) {
            DOM.collectibleCount.textContent = `${AppState.collectiblesFound} / ${AppState.totalCollectibles}`;
          }

          this.showFloatingToast(c.message);
        }
      }
    });

    if (!this.goalEnvelope.isReached) {
      const goalDist = Math.hypot(this.player.x - this.goalEnvelope.x, this.player.y - this.goalEnvelope.y);
      if (goalDist < 36) {
        this.triggerGoalSequence();
      }
    }

    this.render();

    requestAnimationFrame((t) => this.loop(t));
  },

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.save();
    this.ctx.translate(-Math.round(this.camera.x), -Math.round(this.camera.y));

    this.map.draw(this.ctx, this.camera, this.timeSec);
    this.collectibles.forEach(c => c.draw(this.ctx));
    this.goalEnvelope.draw(this.ctx, this.timeSec);
    this.player.draw(this.ctx);

    this.ctx.restore();
  },

  showFloatingToast(text) {
    if (!DOM.gameViewport) return;

    const toast = document.createElement('div');
    toast.className = 'floating-toast';
    toast.textContent = text;

    const screenX = this.player.x - this.camera.x;
    const screenY = this.player.y - this.camera.y - 30;

    toast.style.left = `${(screenX / this.canvas.width) * 100}%`;
    toast.style.top = `${(screenY / this.canvas.height) * 100}%`;

    DOM.gameViewport.appendChild(toast);

    setTimeout(() => {
      if (toast.parentElement) toast.parentElement.removeChild(toast);
    }, 1600);
  },

  triggerGoalSequence() {
    this.goalEnvelope.isReached = true;
    this.player.isControlsDisabled = true;
    AppState.isGameFinished = true;
    AudioManager.playFinish();

    setTimeout(() => {
      if (DOM.gameFadeOverlay) {
        DOM.gameFadeOverlay.classList.remove('hidden');
        DOM.gameFadeOverlay.classList.add('active');
      }

      setTimeout(() => {
        if (DOM.endJourneyCard) {
          DOM.endJourneyCard.classList.remove('hidden');
        }
        if (DOM.btnToLetter) {
          DOM.btnToLetter.classList.remove('hidden');
        }
      }, 800);
    }, 1000);
  }
};

/* --------------------------------------------------------------------------
   14. LETTER MODULE (PHASE 3: ENVELOPE OPENING & TYPEWRITER ENGINE)
   -------------------------------------------------------------------------- */
const LetterModule = {
  typewriterTimeout: null,
  isTyping: false,
  currentParaIndex: 0,
  currentCharIndex: 0,

  init() {
    if (DOM.btnToLetter) {
      DOM.btnToLetter.addEventListener('click', () => {
        SceneController.switchScene('letter-scene');
        if (typeof MusicModule !== 'undefined' && MusicModule.startFromLetterOpen) {
          MusicModule.startFromLetterOpen();
        }
      });
    }

    if (DOM.btnSkipTyping) {
      DOM.btnSkipTyping.addEventListener('click', (e) => {
        e.stopPropagation();
        this.skipTypewriter();
      });
    }

    if (DOM.letterPaper) {
      DOM.letterPaper.addEventListener('click', () => {
        if (this.isTyping) {
          this.skipTypewriter();
        }
      });
    }
  },

  startEnvelopeReveal() {
    if (!DOM.envelopeStage || !DOM.envelopeWrapper) return;

    // Reset components
    DOM.envelopeStage.style.display = 'flex';
    DOM.envelopeStage.style.opacity = '1';
    DOM.envelopeWrapper.classList.remove('opening');
    if (DOM.letterCardContainer) DOM.letterCardContainer.classList.add('hidden');

    if (DOM.letterSalutation) {
      DOM.letterSalutation.textContent = CONFIG.letter.salutation;
    }
    if (DOM.letterDate) {
      DOM.letterDate.textContent = CONFIG.letter.date;
    }

    // Scroll to letter scene
    if (DOM.letterScene) {
      DOM.letterScene.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Step 1: Flap opening + Paper slide upward animation
    setTimeout(() => {
      DOM.envelopeWrapper.classList.add('opening');
      AudioManager.playPaper();

      // Step 2: Smooth transition from Envelope to Full Letter Paper view & Cinematic Background
      setTimeout(() => {
        DOM.envelopeStage.style.opacity = '0';
        setTimeout(() => {
          DOM.envelopeStage.style.display = 'none';
          if (DOM.letterCardContainer) {
            DOM.letterCardContainer.classList.remove('hidden');
            DOM.letterCardContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          // Activate Cinematic Background (assets/Background/Manips.jpg)
          if (DOM.postLetterBg) {
            DOM.postLetterBg.classList.add('active');
          }
          this.startTypewriter();
        }, 500);
      }, 1600);
    }, 400);
  },

  startTypewriter() {
    if (!DOM.letterBodyText) return;

    this.isTyping = true;
    AppState.isTypewriterFinished = false;
    this.currentParaIndex = 0;
    this.currentCharIndex = 0;
    DOM.letterBodyText.innerHTML = '';

    if (DOM.typewriterCursor) DOM.typewriterCursor.style.display = 'inline-block';
    if (DOM.letterClosing) DOM.letterClosing.classList.add('hidden');
    if (DOM.downloadSection) DOM.downloadSection.classList.add('hidden');
    const musicSec = document.getElementById('music-section');
    if (musicSec) musicSec.classList.add('hidden');

    const paragraphs = CONFIG.letter.paragraphs;
    let currentPElement = document.createElement('p');
    DOM.letterBodyText.appendChild(currentPElement);

    const typeNextChar = () => {
      if (!this.isTyping) return;

      if (this.currentParaIndex < paragraphs.length) {
        const currentParaText = paragraphs[this.currentParaIndex];

        if (this.currentCharIndex < currentParaText.length) {
          currentPElement.textContent += currentParaText.charAt(this.currentCharIndex);
          this.currentCharIndex++;

          this.typewriterTimeout = setTimeout(typeNextChar, CONFIG.letter.typingSpeedMs);
        } else {
          // Finished current paragraph, move to next
          this.currentParaIndex++;
          this.currentCharIndex = 0;

          if (this.currentParaIndex < paragraphs.length) {
            currentPElement = document.createElement('p');
            DOM.letterBodyText.appendChild(currentPElement);
            this.typewriterTimeout = setTimeout(typeNextChar, 180); // brief natural pause between paragraphs
          } else {
            this.finishTypewriter();
          }
        }
      } else {
        this.finishTypewriter();
      }
    };

    typeNextChar();
  },

  skipTypewriter() {
    if (!this.isTyping) return;
    this.isTyping = false;
    clearTimeout(this.typewriterTimeout);

    if (!DOM.letterBodyText) return;
    DOM.letterBodyText.innerHTML = '';

    CONFIG.letter.paragraphs.forEach(para => {
      const p = document.createElement('p');
      p.textContent = para;
      DOM.letterBodyText.appendChild(p);
    });

    this.finishTypewriter();
  },

  finishTypewriter() {
    this.isTyping = false;
    AppState.isTypewriterFinished = true;

    // Remove blinking cursor
    if (DOM.typewriterCursor) {
      DOM.typewriterCursor.style.display = 'none';
    }

    // Reveal Closing Signature
    if (DOM.letterClosing) {
      DOM.letterClosing.classList.remove('hidden');
    }

    // Hide skip button smoothly
    if (DOM.btnSkipTyping) {
      DOM.btnSkipTyping.style.opacity = '0';
      DOM.btnSkipTyping.style.pointerEvents = 'none';
    }

    // Reveal Document Download section below letter
    setTimeout(() => {
      if (DOM.downloadSection) {
        DOM.downloadSection.classList.remove('hidden');
      }
    }, 400);

    // Reveal Music Player section
    setTimeout(() => {
      const musicSec = document.getElementById('music-section');
      if (musicSec) {
        musicSec.classList.remove('hidden');
      }
    }, 650);

    // Reveal Friends Messages section after download card is visible
    setTimeout(() => {
      FriendsModule.reveal();
    }, 900);
  }
};

/* --------------------------------------------------------------------------
   15. DOCUMENT DOWNLOAD & TWO-STEP VERIFICATION MODULE
   -------------------------------------------------------------------------- */
const DownloadModule = {
  init() {
    if (DOM.btnOpenDownloadModal) {
      DOM.btnOpenDownloadModal.addEventListener('click', () => {
        this.openModal();
      });
    }

    if (DOM.modalBackdrop) {
      DOM.modalBackdrop.addEventListener('click', () => {
        this.closeModal();
      });
    }

    if (DOM.btnVerifyYes) {
      DOM.btnVerifyYes.addEventListener('click', () => {
        this.handleVerifyYes();
      });
    }

    if (DOM.btnVerifyNo) {
      DOM.btnVerifyNo.addEventListener('click', () => {
        this.handleVerifyNo();
      });
    }

    if (DOM.btnModalClose) {
      DOM.btnModalClose.addEventListener('click', () => {
        this.closeModal();
      });
    }
  },

  openModal() {
    if (!DOM.verificationModal) return;

    // Reset Modal UI State
    if (DOM.modalQuestion) DOM.modalQuestion.textContent = CONFIG.verification.question;
    if (DOM.modalSubtext) {
      DOM.modalSubtext.textContent = CONFIG.verification.subtext;
      DOM.modalSubtext.classList.remove('hidden');
    }
    if (DOM.modalFeedbackBox) {
      DOM.modalFeedbackBox.classList.add('hidden');
      DOM.modalFeedbackBox.classList.remove('denied');
    }
    if (DOM.modalActions) DOM.modalActions.classList.remove('hidden');
    if (DOM.btnModalClose) DOM.btnModalClose.classList.add('hidden');

    DOM.verificationModal.classList.remove('hidden');
  },

  closeModal() {
    if (!DOM.verificationModal) return;
    DOM.verificationModal.classList.add('hidden');
  },

  handleVerifyYes() {
    AppState.isVerified = true;

    // 1. Show Friendly Success Feedback
    if (DOM.modalFeedbackBox && DOM.modalFeedbackText) {
      DOM.modalFeedbackText.textContent = CONFIG.verification.yesSuccessMessage;
      DOM.modalFeedbackBox.classList.remove('hidden');
      DOM.modalFeedbackBox.classList.remove('denied');
    }
    if (DOM.modalActions) DOM.modalActions.classList.add('hidden');
    if (DOM.modalSubtext) DOM.modalSubtext.classList.add('hidden');

    // 2. Automatically close modal and trigger download after brief pause
    setTimeout(() => {
      this.closeModal();
      this.triggerDownloadSequence();
    }, 850);
  },

  handleVerifyNo() {
    AppState.isVerified = false;

    // 1. Show Friendly Playful Locked Message
    if (DOM.modalFeedbackBox && DOM.modalFeedbackText) {
      DOM.modalFeedbackText.textContent = CONFIG.verification.noDeniedMessage;
      DOM.modalFeedbackBox.classList.remove('hidden');
      DOM.modalFeedbackBox.classList.add('denied');
    }
    if (DOM.modalActions) DOM.modalActions.classList.add('hidden');
    if (DOM.modalSubtext) DOM.modalSubtext.classList.add('hidden');
    if (DOM.btnModalClose) DOM.btnModalClose.classList.remove('hidden');
  },

  triggerDownloadSequence() {
    if (!DOM.downloadBtnText) return;

    // State 1: Downloading...
    DOM.downloadBtnText.textContent = CONFIG.download.buttonTextDownloading;

    setTimeout(() => {
      // Trigger actual document download pointing to CONFIG.download.documentPath
      this.downloadDocumentFile();

      // State 2: Downloaded ✔
      DOM.downloadBtnText.textContent = CONFIG.download.buttonTextDownloaded;
    }, 600);
  },

  downloadDocumentFile() {
    const filePath = CONFIG.download.documentPath || "assets/Document/For You Ezra.docx";
    const filename = CONFIG.download.documentName || "For You Ezra.docx";

    const downloadLink = document.createElement('a');
    downloadLink.href = encodeURI(filePath);
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();

    setTimeout(() => {
      if (downloadLink.parentNode) {
        document.body.removeChild(downloadLink);
      }
    }, 200);
  }
};

/* --------------------------------------------------------------------------
   16. FRIENDS MESSAGES MODULE
   -------------------------------------------------------------------------- */
const FriendsModule = {
  _observer: null,

  init() {
    // Populate section heading text from CONFIG (easy to edit)
    if (DOM.friendsHeading) {
      DOM.friendsHeading.textContent = CONFIG.friends.sectionTitle;
    }
    if (DOM.friendsSubheading) {
      DOM.friendsSubheading.textContent = CONFIG.friends.sectionSubtitle;
    }

    // Pre-render all cards into the DOM (hidden until reveal() is called)
    this.renderCards();
  },

  /**
   * Build one friend card element from a data object.
   * @param {{ name: string, avatar: string, message: string }} person
   * @param {number} index  0-based card index for stagger delay
   * @returns {HTMLElement}
   */
  createFriendCard(person, index) {
    const STAGGER_MS = 80; // delay increment per card
    const delay = index * STAGGER_MS;

    const card = document.createElement('article');
    card.className = 'friend-card';
    card.setAttribute('role', 'listitem');
    card.setAttribute('aria-label', `Message from ${person.name}`);
    card.style.setProperty('--card-delay', `${delay}ms`);

    // Decorative quote mark
    const quote = document.createElement('span');
    quote.className = 'quote-mark';
    quote.setAttribute('aria-hidden', 'true');
    quote.textContent = '\u201C';

    // Friend Header Container (Avatar on Left, Name on Right)
    const header = document.createElement('div');
    header.className = 'friend-header';

    // Avatar wrapper — gracefully falls back to initials if image fails to load or not provided
    const avatarWrapper = document.createElement('div');
    avatarWrapper.className = 'friend-avatar-wrapper';

    if (person.avatar) {
      const img = document.createElement('img');
      img.className = 'friend-avatar';
      img.src = encodeURI(person.avatar);
      img.alt = `${person.name}'s profile picture`;
      img.loading = 'lazy';
      img.width = 52;
      img.height = 52;

      // Fallback: show initial letter if image fails
      img.onerror = () => {
        avatarWrapper.innerHTML = '';
        const placeholder = document.createElement('div');
        placeholder.className = 'friend-avatar-placeholder';
        placeholder.setAttribute('aria-hidden', 'true');
        placeholder.textContent = person.name.charAt(0).toUpperCase();
        avatarWrapper.appendChild(placeholder);
      };

      avatarWrapper.appendChild(img);
    } else {
      const placeholder = document.createElement('div');
      placeholder.className = 'friend-avatar-placeholder';
      placeholder.setAttribute('aria-hidden', 'true');
      placeholder.textContent = person.name.charAt(0).toUpperCase();
      avatarWrapper.appendChild(placeholder);
    }

    // Friend Info (Name aligned with avatar)
    const info = document.createElement('div');
    info.className = 'friend-info';

    const name = document.createElement('h3');
    name.className = 'friend-name';
    name.textContent = person.name;
    info.appendChild(name);

    header.appendChild(avatarWrapper);
    header.appendChild(info);

    // Message text underneath the header
    const message = document.createElement('p');
    message.className = 'friend-message';
    message.textContent = person.message;

    card.appendChild(quote);
    card.appendChild(header);
    card.appendChild(message);

    return card;
  },

  /**
   * Render all cards from CONFIG into the friends grid.
   * Cards start invisible; scroll animation is handled by reveal().
   */
  renderCards() {
    if (!DOM.friendsGrid) return;
    DOM.friendsGrid.innerHTML = '';

    CONFIG.friends.cards.forEach((person, index) => {
      const card = this.createFriendCard(person, index);
      DOM.friendsGrid.appendChild(card);
    });
  },

  /**
   * Make the friends section visible and start staggered scroll-reveal
   * animations using IntersectionObserver.
   */
  reveal() {
    if (!DOM.friendsSection) return;

    DOM.friendsSection.classList.remove('hidden');

    const cards = DOM.friendsGrid.querySelectorAll('.friend-card');

    if (!('IntersectionObserver' in window)) {
      // Fallback: instantly show all cards if observer not supported
      cards.forEach(card => {
        card.style.opacity = '1';
        card.style.transform = 'none';
        card.classList.add('is-visible');
      });
      return;
    }

    // Disconnect previous observer if re-triggered
    if (this._observer) this._observer.disconnect();

    this._observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this._observer.unobserve(entry.target); // only animate once
          }
        });
      },
      {
        root: null,        // observe relative to viewport
        threshold: 0.12,   // trigger when 12% of card is visible
        rootMargin: '0px 0px -20px 0px'
      }
    );

    cards.forEach(card => {
      this._observer.observe(card);
    });
  }
};

/* --------------------------------------------------------------------------
   17. APPLICATION INITIALIZATION ENTRY POINT
   -------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------
   18. MUSIC PLAYER MODULE
   Single Audio instance, phone-widget style, driven from CONFIG.music
   -------------------------------------------------------------------------- */
const MusicModule = {
  audio: null,
  currentIndex: 0,
  isPlaying: false,

  init() {
    if (!CONFIG.music || !Array.isArray(CONFIG.music.playlist) || CONFIG.music.playlist.length === 0) return;

    // Single source of truth Audio instance
    this.audio = new Audio();
    this.audio.preload = 'metadata';

    // DOM Elements
    this.section = document.getElementById('music-section');
    this.headingEl = document.getElementById('music-heading');
    this.subtitleEl = document.getElementById('music-subtitle');
    this.coverWrapper = document.getElementById('music-cover-wrapper');
    this.coverImg = document.getElementById('music-cover-img');
    this.coverFallback = document.getElementById('music-cover');
    this.titleEl = document.getElementById('music-title');
    this.artistEl = document.getElementById('music-artist');
    this.playBtn = document.getElementById('music-play');
    this.playIcon = document.getElementById('music-play-icon');
    this.pauseIcon = document.getElementById('music-pause-icon');
    this.prevBtn = document.getElementById('music-prev');
    this.nextBtn = document.getElementById('music-next');
    this.progress = document.getElementById('music-progress');
    this.progressBar = document.getElementById('music-progress-bar');
    this.currentTimeEl = document.getElementById('music-current-time');
    this.durationEl = document.getElementById('music-duration');
    this.playlistEl = document.getElementById('music-playlist');

    // Text Header
    if (this.headingEl && CONFIG.music.heading) this.headingEl.textContent = CONFIG.music.heading;
    if (this.subtitleEl && CONFIG.music.subtitle) this.subtitleEl.textContent = CONFIG.music.subtitle;

    // Assign stable random artwork from the 5 available images to each song in this session
    const pool = (CONFIG.music.artworks && CONFIG.music.artworks.length > 0)
      ? [...CONFIG.music.artworks]
      : [
          "assets/Background/Manips widget 1.jpg",
          "assets/Background/Manips widget 2.jpg",
          "assets/Background/Manips widget 3.jpg",
          "assets/Background/Manips widget 4.jpg",
          "assets/Background/Manips widget 5.jpg"
        ];

    // Create a randomized pool to assign artwork evenly across songs
    const shuffled = [...pool, ...pool].sort(() => Math.random() - 0.5);
    CONFIG.music.playlist.forEach((track, idx) => {
      track.cover = shuffled[idx % shuffled.length];
    });

    // Button Listeners
    if (this.playBtn) {
      this.playBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.togglePlay();
      });
    }

    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.prev();
      });
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.next();
      });
    }

    // Audio Event Listeners
    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('loadedmetadata', () => this.updateDuration());
    this.audio.addEventListener('durationchange', () => this.updateDuration());
    this.audio.addEventListener('ended', () => this.handleEnded());
    this.audio.addEventListener('play', () => this.onPlayStateChange(true));
    this.audio.addEventListener('pause', () => this.onPlayStateChange(false));

    // Progress Bar Seeking (Click & Drag/Touch)
    if (this.progress) {
      let isDragging = false;

      const handleSeek = (e) => {
        const rect = this.progress.getBoundingClientRect();
        const clientX = e.clientX ?? (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
        const x = clientX - rect.left;
        const pct = Math.max(0, Math.min(1, x / rect.width));

        if (this.progressBar) this.progressBar.style.width = `${pct * 100}%`;
        this.progress.style.setProperty('--progress', `${pct * 100}%`);

        if (this.audio.duration && isFinite(this.audio.duration)) {
          const seekTime = pct * this.audio.duration;
          if (this.currentTimeEl) this.currentTimeEl.textContent = this.formatTime(seekTime);
          if (!isDragging) {
            this.audio.currentTime = seekTime;
          }
        }
      };

      this.progress.addEventListener('click', (e) => {
        handleSeek(e);
      });

      this.progress.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
          e.preventDefault();
          this.seekRelative(5);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
          e.preventDefault();
          this.seekRelative(-5);
        } else if (e.key === 'Home') {
          e.preventDefault();
          this.audio.currentTime = 0;
        } else if (e.key === 'End') {
          e.preventDefault();
          if (this.audio.duration) this.audio.currentTime = this.audio.duration;
        }
      });
    }

    // Hide any visible playlist leftovers
    if (this.playlistEl) {
      this.playlistEl.innerHTML = '';
      this.playlistEl.classList.add('hidden');
      this.playlistEl.setAttribute('aria-hidden', 'true');
    }

    // Initialize First Track (Futile Devices, Paused on initial load)
    this.currentIndex = 0;
    this.loadTrack(0, false);
  },

  startFromLetterOpen() {
    // Starts playing Futile Devices immediately when user opens the letter
    if (this.currentIndex !== 0 || !this.audio.src) {
      this.loadTrack(0, true);
    } else {
      this.play();
    }
  },

  loadTrack(index, autoPlay = false) {
    const playlist = CONFIG.music.playlist;
    if (!playlist || index < 0 || index >= playlist.length) return;

    this.currentIndex = index;
    const track = playlist[index];

    // Audio Source with safe URL encoding
    if (track.audio) {
      this.audio.src = encodeURI(track.audio);
      try {
        this.audio.load();
      } catch (err) {}
    }

    // Track Title and Artist
    if (this.titleEl) this.titleEl.textContent = track.title || 'Untitled';
    if (this.artistEl) this.artistEl.textContent = track.artist || 'Unknown Artist';

    // Album Artwork with soft transition & proper encoding
    const coverUrl = track.cover ? encodeURI(track.cover) : '';
    if (this.coverImg) {
      this.coverImg.classList.add('is-transitioning');
      this.coverImg.src = coverUrl;
      this.coverImg.alt = `${track.title} album artwork`;
      setTimeout(() => {
        if (this.coverImg) this.coverImg.classList.remove('is-transitioning');
      }, 150);
    }

    if (this.coverFallback) {
      if (coverUrl) {
        this.coverFallback.style.backgroundImage = `url("${coverUrl}")`;
      } else {
        this.coverFallback.style.backgroundImage = 'none';
      }
    }

    // Reset Progress Bar and Time displays
    if (this.progressBar) this.progressBar.style.width = '0%';
    if (this.progress) {
      this.progress.style.setProperty('--progress', '0%');
      this.progress.setAttribute('aria-valuenow', '0');
    }
    if (this.currentTimeEl) this.currentTimeEl.textContent = '0:00';
    if (this.durationEl) this.durationEl.textContent = '--:--';

    // Playback state
    if (autoPlay) {
      this.play();
    } else {
      this.pause();
    }
  },

  togglePlay() {
    if (this.audio.paused) {
      this.play();
    } else {
      this.pause();
    }
  },

  play() {
    if (!this.audio.src) return;
    const playPromise = this.audio.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        this.onPlayStateChange(true);
      }).catch(() => {
        this.onPlayStateChange(false);
      });
    }
  },

  pause() {
    try {
      this.audio.pause();
    } catch (err) {}
    this.onPlayStateChange(false);
  },

  onPlayStateChange(isPlaying) {
    this.isPlaying = isPlaying;

    if (this.playBtn) {
      this.playBtn.setAttribute('aria-label', isPlaying ? 'Pause song' : 'Play song');
    }

    if (this.playIcon && this.pauseIcon) {
      if (isPlaying) {
        this.playIcon.classList.add('hidden');
        this.pauseIcon.classList.remove('hidden');
      } else {
        this.playIcon.classList.remove('hidden');
        this.pauseIcon.classList.add('hidden');
      }
    }

    if (this.coverWrapper) {
      if (isPlaying) {
        this.coverWrapper.classList.add('is-playing');
      } else {
        this.coverWrapper.classList.remove('is-playing');
      }
    }
  },

  prev() {
    const playlist = CONFIG.music.playlist;
    if (!playlist || playlist.length === 0) return;

    // If playing for more than 2 seconds, restart current track
    if (this.audio.currentTime > 2) {
      this.audio.currentTime = 0;
      this.updateProgress();
      if (!this.isPlaying) this.play();
      return;
    }

    // Move to previous track with loop: 1 -> 10, 10 -> 9 ...
    const prevIndex = (this.currentIndex - 1 + playlist.length) % playlist.length;
    this.loadTrack(prevIndex, true);
  },

  next() {
    const playlist = CONFIG.music.playlist;
    if (!playlist || playlist.length === 0) return;

    // Move to next track with continuous loop: 1 -> 2 ... 10 -> 1 ...
    const nextIndex = (this.currentIndex + 1) % playlist.length;
    this.loadTrack(nextIndex, true);
  },

  handleEnded() {
    const playlist = CONFIG.music.playlist;
    if (!playlist || playlist.length === 0) return;

    // Auto-advance with continuous loop: Snakelike (10) -> Futile Devices (1)
    const nextIndex = (this.currentIndex + 1) % playlist.length;
    this.loadTrack(nextIndex, true);
  },

  updateProgress() {
    if (!this.audio) return;
    const cur = this.audio.currentTime || 0;
    const dur = this.audio.duration || 0;
    const pct = (dur > 0 && isFinite(dur)) ? (cur / dur) * 100 : 0;

    if (this.progressBar) this.progressBar.style.width = `${pct}%`;
    if (this.progress) {
      this.progress.style.setProperty('--progress', `${pct}%`);
      this.progress.setAttribute('aria-valuenow', String(Math.round(pct)));
    }

    if (this.currentTimeEl) this.currentTimeEl.textContent = this.formatTime(cur);
    if (this.durationEl) {
      this.durationEl.textContent = (dur > 0 && isFinite(dur)) ? this.formatTime(dur) : '--:--';
    }
  },

  updateDuration() {
    const dur = this.audio ? this.audio.duration : 0;
    if (this.durationEl) {
      this.durationEl.textContent = (dur > 0 && isFinite(dur)) ? this.formatTime(dur) : '--:--';
    }
    this.updateProgress();
  },

  seekRelative(deltaSeconds) {
    if (!this.audio || !isFinite(this.audio.duration) || this.audio.duration <= 0) return;
    const target = Math.max(0, Math.min(this.audio.duration, (this.audio.currentTime || 0) + deltaSeconds));
    this.audio.currentTime = target;
    this.updateProgress();
  },

  formatTime(seconds) {
    if (!isFinite(seconds) || isNaN(seconds) || seconds === null || seconds === undefined) return '--:--';
    const safeSeconds = Math.max(0, Number(seconds) || 0);
    const s = Math.floor(safeSeconds % 60).toString().padStart(2, '0');
    const m = Math.floor(safeSeconds / 60);
    return `${m}:${s}`;
  }
};
document.addEventListener('DOMContentLoaded', () => {
  WelcomeModule.init();
  IntroModule.init();
  LetterModule.init();
  DownloadModule.init();
  FriendsModule.init();
  MusicModule.init();
});
