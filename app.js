const MOVIES = [
  {"id":1,"posterUrl":"./posters/movie1.jpg","title":"Moonlight","year":2016,"director":"Barry Jenkins","runtime":"1h 51m","genres":["Drama","Coming of age"],"rating":"8.0","logline":"A tender triptych about identity, intimacy, and finding a language for love.","note":"For a quiet night that still wants to leave a mark.","color":"#111111","ink":"#111111"},
  {"id":2,"posterUrl":"./posters/movie2.webp","title":"In the Mood for Love","year":2000,"director":"Wong Kar-wai","runtime":"1h 38m","genres":["Romance","Drama"],"rating":"8.1","logline":"Two neighbors make a beautiful, impossible world out of what they do not say.","note":"A film of hallways, rain, and sentences left unfinished.","color":"#111111","ink":"#111111"},
  {"id":3,"posterUrl":"./posters/movie3.webp","title":"The Godfather","year":1972,"director":"Francis Ford Coppola","runtime":"2h 55m","genres":["Crime","Drama"],"rating":"9.2","logline":"Power changes hands inside a family that confuses devotion with destiny.","note":"The rare epic that feels intimate even at its most operatic.","color":"#111111","ink":"#111111"},
  {"id":4,"posterUrl":"./posters/movie4.jpg","title":"Spirited Away","year":2001,"director":"Hayao Miyazaki","runtime":"2h 5m","genres":["Animation","Fantasy"],"rating":"8.6","logline":"A lost child learns the names of things in a bathhouse built for spirits.","note":"A doorway into wonder, with just enough strangeness to feel true.","color":"#111111","ink":"#111111"},
  {"id":5,"posterUrl":"./posters/movie5.jpg","title":"Portrait of a Lady on Fire","year":2019,"director":"Céline Sciamma","runtime":"2h 2m","genres":["Romance","Drama"],"rating":"8.1","logline":"A painter and her subject fall in love in the space between looking and being seen.","note":"Every glance is edited like a close-up.","color":"#111111","ink":"#111111"},
  {"id":6,"posterUrl":"./posters/movie6.jpg","title":"The Grand Budapest Hotel","year":2014,"director":"Wes Anderson","runtime":"1h 39m","genres":["Comedy","Adventure"],"rating":"8.1","logline":"A lobby boy and a legendary concierge race through a confection of old Europe.","note":"Precision comedy with a bruised, beating heart.","color":"#111111","ink":"#111111"},
  {"id":7,"posterUrl":"./posters/movie7.webp","title":"Do the Right Thing","year":1989,"director":"Spike Lee","runtime":"2h","genres":["Drama","Comedy"],"rating":"8.0","logline":"One blistering Brooklyn day gathers every neighborhood pressure into a single point.","note":"The colors are hot. The questions are hotter.","color":"#111111","ink":"#111111"},
  {"id":8,"posterUrl":"./posters/movie8.webp","title":"Arrival","year":2016,"director":"Denis Villeneuve","runtime":"1h 56m","genres":["Sci-fi","Drama"],"rating":"7.9","logline":"A linguist learns that understanding an alien language may mean changing time itself.","note":"Science fiction as a meditation on choosing love anyway.","color":"#111111","ink":"#111111"},
  {"id":9,"posterUrl":"./posters/movie9.webp","title":"The Apartment","year":1960,"director":"Billy Wilder","runtime":"2h 5m","genres":["Romance","Comedy"],"rating":"8.3","logline":"A lonely office worker lends out his apartment and accidentally finds a life.","note":"Cynicism softens at the exact right moment.","color":"#72705a","ink":"#111111"},
  {"id":10,"posterUrl":"./posters/movie10.jpg","title":"Parasite","year":2019,"director":"Bong Joon-ho","runtime":"2h 12m","genres":["Thriller","Drama"],"rating":"8.5","logline":"Two families meet at the fault line between aspiration and architecture.","note":"Do not read another word. Let the stairs surprise you.","color":"#536657","ink":"#e5c26e"},
  {"id":11,"posterUrl":"./posters/movie11.webp","title":"The Thing","year":1982,"director":"John Carpenter","runtime":"1h 49m","genres":["Horror","Sci-fi"],"rating":"8.2","logline":"Paranoia freezes over when an Antarctic crew realizes nobody is what they seem.","note":"Cold, practical, and still impossibly tense.","color":"#4a606b","ink":"#d8c78d"},
  {"id":12,"posterUrl":"./posters/movie12.webp","title":"Before Sunrise","year":1995,"director":"Richard Linklater","runtime":"1h 41m","genres":["Romance","Drama"],"rating":"8.1","logline":"Two strangers in Vienna take a walk that becomes a temporary lifetime.","note":"The movie equivalent of missing your train on purpose.","color":"#9d6a4f","ink":"#f3d6a6"},
  {"id":13,"posterUrl":"./posters/movie13.jpg","title":"Mad Max: Fury Road","year":2015,"director":"George Miller","runtime":"2h","genres":["Action","Adventure"],"rating":"8.1","logline":"A convoy tears across the wasteland toward a future it can finally imagine.","note":"A kinetic masterpiece with a genuinely humane engine.","color":"#070706","ink":"#f2d77e"},
  {"id":14,"posterUrl":"./posters/movie14.jpg","title":"Get Out","year":2017,"director":"Jordan Peele","runtime":"1h 44m","genres":["Horror","Thriller"],"rating":"7.8","logline":"A weekend in the country reveals the polite face of something monstrous.","note":"The smile is the scariest special effect.","color":"#704b55","ink":"#f2cf87"},
  {"id":15,"posterUrl":"./posters/movie15.webp","title":"The Florida Project","year":2017,"director":"Sean Baker","runtime":"1h 51m","genres":["Drama","Coming of age"],"rating":"7.6","logline":"A child turns a budget motel on the edge of Disney World into a kingdom.","note":"A candy-colored film about the cost of growing up.","color":"#b36f68","ink":"#f4e3ae"},
  {"id":16,"posterUrl":"./posters/movie16.webp","title":"Seven Samurai","year":1954,"director":"Akira Kurosawa","runtime":"3h 27m","genres":["Action","Drama"],"rating":"8.6","logline":"A village hires seven wandering swordsmen to defend a harvest from raiders.","note":"Long, generous, and endlessly copied for good reason.","color":"#5c6a5d","ink":"#dfbf75"},
  {"id":17,"posterUrl":"./posters/movie17.webp","title":"The Silence of the Lambs","year":1991,"director":"Jonathan Demme","runtime":"1h 58m","genres":["Thriller","Crime"],"rating":"8.6","logline":"A young investigator seeks a killer's mind through a more dangerous man's eyes.","note":"An immaculate procedural with a pulse under every frame.","color":"#6a5450","ink":"#e8c884"},
  {"id":18,"posterUrl":"./posters/movie18.webp","title":"The Worst Person in the World","year":2021,"director":"Joachim Trier","runtime":"2h 8m","genres":["Romance","Comedy"],"rating":"7.7","logline":"Four years in the life of a woman trying to choose a life before it chooses her.","note":"For when your twenties feel both over and barely started.","color":"#9a6457","ink":"#f2dda7"},
  {"id":19,"posterUrl":"./posters/movie19.webp","title":"The Shining","year":1980,"director":"Stanley Kubrick","runtime":"2h 26m","genres":["Horror","Drama"],"rating":"8.4","logline":"An isolated hotel turns a winter caretaker's writerly ambition into a maze.","note":"Symmetry, dread, and one hallway you will never forget.","color":"#6d4f58","ink":"#eecb7b"},
  {"id":20,"posterUrl":"./posters/movie20.webp","title":"Singin' in the Rain","year":1952,"director":"Gene Kelly, Stanley Donen","runtime":"1h 43m","genres":["Musical","Comedy"],"rating":"8.3","logline":"Hollywood reinvents itself with tap shoes, charm, and one inconvenient new technology.","note":"Pure joy, meticulously choreographed.","color":"#52807e","ink":"#f5d475"},
  {"id":21,"posterUrl":"./posters/movie21.webp","title":"A Separation","year":2011,"director":"Asghar Farhadi","runtime":"2h 3m","genres":["Drama","Thriller"],"rating":"8.3","logline":"A family's impossible decision reveals how every truth has a point of view.","note":"A moral knot that tightens without ever feeling engineered.","color":"#777063","ink":"#e6c87e"},
  {"id":22,"posterUrl":"./posters/movie22.webp","title":"The Red Shoes","year":1948,"director":"Michael Powell, Emeric Pressburger","runtime":"2h 13m","genres":["Musical","Drama"],"rating":"8.1","logline":"A ballerina is torn between the demands of art and the demands of a life.","note":"Technicolor turned into a fever dream.","color":"#9d413d","ink":"#f4d58e"},
  {"id":23,"posterUrl":"./posters/movie23.webp","title":"Her","year":2013,"director":"Spike Jonze","runtime":"2h 6m","genres":["Sci-fi","Romance"],"rating":"8.0","logline":"A lonely letter writer falls in love with an operating system that is learning to feel.","note":"Soft futurism for tender people.","color":"#c77c72","ink":"#f4e5bc"},
  {"id":24,"posterUrl":"./posters/movie24.webp","title":"Goodfellas","year":1990,"director":"Martin Scorsese","runtime":"2h 25m","genres":["Crime","Drama"],"rating":"8.7","logline":"A young man climbs the ladder of organized crime and discovers the view is temporary.","note":"Fast, funny, and morally corrosive in the best way.","color":"#694d45","ink":"#f1c86a"},
  {"id":25,"posterUrl":"./posters/movie25.jpg","title":"Ratatouille","year":2007,"director":"Brad Bird","runtime":"1h 51m","genres":["Animation","Comedy"],"rating":"8.1","logline":"A rat with taste and a kitchen hand with nerve make an unlikely culinary team.","note":"The case for taking your own talent seriously.","color":"#a65c4f","ink":"#f4db8e"},
  {"id":26,"posterUrl":"./posters/movie26.webp","title":"The Lighthouse","year":2019,"director":"Robert Eggers","runtime":"1h 49m","genres":["Horror","Drama"],"rating":"7.4","logline":"Two lighthouse keepers descend into myth, weather, and a very bad working relationship.","note":"A salt-stained hallucination in a boxy frame.","color":"#596b6c","ink":"#e9c978"},
  {"id":27,"posterUrl":"./posters/movie27.webp","title":"The Lives of Others","year":2006,"director":"Florian Henckel von Donnersmarck","runtime":"2h 17m","genres":["Drama","Thriller"],"rating":"8.4","logline":"A surveillance officer in East Berlin begins to hear the humanity inside his assignment.","note":"Quiet suspense, enormous emotional payoff.","color":"#64716b","ink":"#e9cf91"},
  {"id":28,"posterUrl":"./posters/movie28.jpg","title":"Kiki's Delivery Service","year":1989,"director":"Hayao Miyazaki","runtime":"1h 43m","genres":["Animation","Fantasy"],"rating":"7.8","logline":"A young witch finds her footing, her friends, and her own rhythm in a seaside city.","note":"A warm cup of confidence when you need one.","color":"#62808a","ink":"#f0d48c"},
  {"id":29,"posterUrl":"./posters/movie29.webp","title":"The Handmaiden","year":2016,"director":"Park Chan-wook","runtime":"2h 25m","genres":["Thriller","Romance"],"rating":"8.1","logline":"A con, a house, and a love story keep changing shape as the women take control.","note":"Lush, wicked, and built for a second viewing.","color":"#754d59","ink":"#eed08e"},
  {"id":30,"posterUrl":"./posters/movie30.webp","title":"The Social Network","year":2010,"director":"David Fincher","runtime":"2h","genres":["Drama","Biography"],"rating":"7.8","logline":"A digital empire is built out of friendship, ambition, and a very fast legal deposition.","note":"Cold surfaces, hot dialogue.","color":"#4e6875","ink":"#e4c678"},
  {"id":31,"posterUrl":"./posters/movie31.webp","title":"The Before Trilogy","year":1995,"director":"Richard Linklater","runtime":"4h 46m","genres":["Romance","Drama"],"rating":"8.4","logline":"A conversation keeps returning across decades, changing as the people inside it do.","note":"Three films about time that make time disappear.","color":"#967158","ink":"#f0d49b"},
  {"id":32,"posterUrl":"./posters/movie32.webp","title":"This Is Spinal Tap","year":1984,"director":"Rob Reiner","runtime":"1h 22m","genres":["Comedy","Music"],"rating":"7.9","logline":"A documentary crew follows a rock band whose volume is exceeded only by its confidence.","note":"Turn it up to eleven. Then enjoy the consequences.","color":"#746a56","ink":"#efd17a"},
  {"id":33,"posterUrl":"./posters/movie33.webp","title":"Whiplash","year":2014,"director":"Damien Chazelle","runtime":"1h 46m","genres":["Drama","Music"],"rating":"8.5","logline":"A drummer enters a conservatory where the line between discipline and abuse vanishes.","note":"A pressure cooker scored with cymbals.","color":"#7a5145","ink":"#f0ce70"},
  {"id":34,"posterUrl":"./posters/movie34.webp","title":"The Green Mile","year":1999,"director":"Frank Darabont","runtime":"3h 9m","genres":["Drama","Fantasy"],"rating":"8.6","logline":"A prison guard meets a mysterious inmate whose gifts make the world harder to bear.","note":"Earnest, supernatural, and quietly devastating.","color":"#587069","ink":"#e4c982"},
  {"id":35,"posterUrl":"./posters/movie35.webp","title":"The Princess Bride","year":1987,"director":"Rob Reiner","runtime":"1h 38m","genres":["Adventure","Comedy"],"rating":"8.0","logline":"A storybook romance gets sword fights, giants, revenge, and just the right amount of kissing.","note":"A reliable charm machine.","color":"#68745d","ink":"#f3d57f"},
  {"id":36,"posterUrl":"./posters/movie36.webp","title":"Nightcrawler","year":2014,"director":"Dan Gilroy","runtime":"1h 57m","genres":["Thriller","Crime"],"rating":"7.8","logline":"A driven freelancer discovers a lucrative market in the city's most terrible moments.","note":"Los Angeles at 3 a.m., lit like a bad idea.","color":"#394f5c","ink":"#ebc56a"},
  {"id":37,"posterUrl":"./posters/movie37.webp","title":"The Piano","year":1993,"director":"Jane Campion","runtime":"2h 1m","genres":["Romance","Drama"],"rating":"7.5","logline":"A mute pianist arrives in New Zealand with a daughter, a piano, and a will of her own.","note":"Wild landscape, precise interior weather.","color":"#596d69","ink":"#d8bb72"},
  {"id":38,"posterUrl":"./posters/movie38.jpg","title":"Fantastic Mr. Fox","year":2009,"director":"Wes Anderson","runtime":"1h 27m","genres":["Animation","Comedy"],"rating":"7.9","logline":"A reformed thief returns to old habits when three farmers threaten his family's home.","note":"Handmade mischief with a very good soundtrack.","color":"#ad6547","ink":"#f2da8d"},
  {"id":39,"posterUrl":"./posters/movie39.webp","title":"The Exorcist","year":1973,"director":"William Friedkin","runtime":"2h 12m","genres":["Horror","Drama"],"rating":"8.1","logline":"A mother seeks help when her daughter's illness becomes something no doctor can explain.","note":"A procedural that happens to concern the impossible.","color":"#62665c","ink":"#e4c87b"},
  {"id":40,"posterUrl":"./posters/movie40.webp","title":"Amélie","year":2001,"director":"Jean-Pierre Jeunet","runtime":"2h 2m","genres":["Romance","Comedy"],"rating":"8.3","logline":"A shy Parisian decides to improve the lives of strangers while avoiding her own heart.","note":"A little whimsy, carefully dosed.","color":"#a34d4b","ink":"#f5d99a"},
  {"id":41,"posterUrl":"./posters/movie41.webp","title":"The Royal Tenenbaums","year":2001,"director":"Wes Anderson","runtime":"1h 50m","genres":["Comedy","Drama"],"rating":"7.6","logline":"A family of former prodigies reunites under one roof, along with every old wound.","note":"The funniest possible way to be melancholy.","color":"#b66c58","ink":"#f2dda2"},
  {"id":42,"posterUrl":"./posters/movie42.webp","title":"Memories of Murder","year":2003,"director":"Bong Joon-ho","runtime":"2h 11m","genres":["Crime","Thriller"],"rating":"8.1","logline":"Two detectives investigate a string of murders in a case that refuses to resolve.","note":"The landscape remembers what the evidence cannot.","color":"#6b6554","ink":"#e5c472"},
  {"id":43,"posterUrl":"./posters/movie43.webp","title":"Lady Bird","year":2017,"director":"Greta Gerwig","runtime":"1h 34m","genres":["Comedy","Coming of age"],"rating":"7.4","logline":"A Sacramento senior wants a bigger life and keeps running into the small ways she is loved.","note":"The ache of becoming yourself, in a bright sweater.","color":"#9a6159","ink":"#f2d69b"},
  {"id":44,"posterUrl":"./posters/movie44.webp","title":"Alien","year":1979,"director":"Ridley Scott","runtime":"1h 57m","genres":["Horror","Sci-fi"],"rating":"8.5","logline":"A crew answering a distress signal brings a perfect organism aboard their ship.","note":"Industrial design has never felt so hostile.","color":"#546c68","ink":"#d8c979"},
  {"id":45,"posterUrl":"./posters/movie45.webp","title":"The Lobster","year":2015,"director":"Yorgos Lanthimos","runtime":"1h 59m","genres":["Comedy","Drama"],"rating":"7.1","logline":"In a world where single people have 45 days to pair up, one man chooses the woods.","note":"Deadpan romance for people suspicious of romance.","color":"#66736b","ink":"#e6c476"},
  {"id":46,"posterUrl":"./posters/movie46.webp","title":"The Farewell","year":2019,"director":"Lulu Wang","runtime":"1h 40m","genres":["Drama","Comedy"],"rating":"7.5","logline":"A family gathers in China around a grandmother while keeping one life-changing secret.","note":"Funny, specific, and generous about the stories families tell.","color":"#a26a4e","ink":"#f2d798"},
  {"id":47,"posterUrl":"./posters/movie47.webp","title":"The Wailing","year":2016,"director":"Na Hong-jin","runtime":"2h 36m","genres":["Horror","Mystery"],"rating":"7.4","logline":"A rural detective follows a string of illnesses toward a mystery that will not hold still.","note":"Three genres in a trench coat, and all of them work.","color":"#5b6659","ink":"#dfc773"},
  {"id":48,"posterUrl":"./posters/movie48.webp","title":"Roma","year":2018,"director":"Alfonso Cuarón","runtime":"2h 15m","genres":["Drama","Biography"],"rating":"7.7","logline":"A domestic worker navigates family change and political unrest in 1970s Mexico City.","note":"Memory rendered in beautiful, patient black and white.","color":"#77807a","ink":"#e4c884"},
  {"id":49,"posterUrl":"./posters/movie49.jpg","title":"My Neighbor Totoro","year":1988,"director":"Hayao Miyazaki","runtime":"1h 26m","genres":["Animation","Fantasy"],"rating":"8.1","logline":"Two sisters discover a gentle forest spirit while their mother recovers in the country.","note":"The comfort movie before comfort movies had a name.","color":"#668878","ink":"#f0d383"},
   {"id":50,"posterUrl":"./posters/movie50.webp","title":"Paris, Texas","year":1984,"director":"Wim Wenders","runtime":"2h 25m","genres":["Drama","Road movie"],"rating":"8.1","logline":"A vanished man walks back into his family's life and toward a difficult kind of repair.","note":"Neon skies and a humane distance.","color":"#946451","ink":"#efd185"},
 
];
let activeGenre = 'All';
let searchQuery = '';
let showingSavedOnly = false;
let currentModalMovie = null;
let savedMovieIds = new Set(JSON.parse(localStorage.getItem('projectx_saved') || '[]'));
let movieRatings = JSON.parse(localStorage.getItem('px_ratings') || '{}');
const catalogGrid = document.getElementById('catalogGrid');
const catalogCount = document.getElementById('catalogCount');
const searchInput = document.getElementById('searchInput');
const genreFilters = document.getElementById('genreFilters');
const savedButton = document.getElementById('savedButton');
const savedCountEl = document.getElementById('savedCount');

const featureCard = document.getElementById('featureCard');
const featurePoster = document.getElementById('featurePoster');
const featureTitle = document.getElementById('featureTitle');
const featureMeta = document.getElementById('featureMeta');
const featureLogline = document.getElementById('featureLogline');
const featureDetails = document.getElementById('featureDetails');
const surpriseHero = document.getElementById('surpriseHero');
const browseButton = document.getElementById('browseButton');

const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalPoster = document.getElementById('modalPoster');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const modalDirector = document.getElementById('modalDirector');
const modalLogline = document.getElementById('modalLogline');
const modalNote = document.getElementById('modalNote');
const modalSave = document.getElementById('modalSave');
const modalDone = document.getElementById('modalDone');

const toast = document.getElementById('toast');
const toastTitle = document.getElementById('toastTitle');
const toastMessage = document.getElementById('toastMessage');
const toastClose = document.getElementById('toastClose');

function buildPosterHTML(movie, isSaved = false) {
  if (movie.posterUrl) {
    return `<div class="poster-wrap"><img class="poster-img" src="${movie.posterUrl}" alt="${movie.title} poster" loading="lazy" /></div>`;
  }
  return `<span class="poster-title">${movie.title}</span>${isSaved ? '<span class="saved-badge" aria-label="Saved">★</span>' : ''}`;
}

document.addEventListener('DOMContentLoaded', () => {
  initGenreFilters();
  updateSavedCount();
  renderHeroFeature(MOVIES[0]);
  renderCatalog();
  setupEventListeners();
});

function setupEventListeners() {
  const stars = document.querySelectorAll('#modalStarRating .star');
  stars.forEach(star => {
    
    star.addEventListener('mouseenter', (e) => {
      const hoverVal = parseInt(e.target.dataset.value, 10);
      stars.forEach(s => {
        if (parseInt(s.dataset.value, 10) <= hoverVal) {
          s.classList.add('hover');
        } else {
          s.classList.remove('hover');
        }
      });
    });

    
    star.addEventListener('mouseleave', () => {
      stars.forEach(s => s.classList.remove('hover'));
    });

    
    star.addEventListener('click', (e) => {
      if (!currentModalMovie) return;
      const ratingValue = parseInt(e.target.dataset.value, 10);
      
      movieRatings[currentModalMovie.id] = ratingValue;
      localStorage.setItem('px_ratings', JSON.stringify(movieRatings));
      
      updateStarRatingUI(ratingValue);
      showToast('Rating Saved!', `You rated "${currentModalMovie.title}" ${ratingValue} stars.`);
    });
  });
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderCatalog();
  });

  savedButton.addEventListener('click', () => {
    showingSavedOnly = !showingSavedOnly;
    savedButton.classList.toggle('active', showingSavedOnly);
    renderCatalog();
  });

  surpriseHero.addEventListener('click', () => {
    const randomMovie = MOVIES[Math.floor(Math.random() * MOVIES.length)];
    openModal(randomMovie);
    showToast(`Tonight's Suggestion: ${randomMovie.title}`, randomMovie.note);
  });

  browseButton.addEventListener('click', () => {
    document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
  });

  featureDetails.addEventListener('click', () => {
    if (featureCard.dataset.movieId) {
      const movie = MOVIES.find(m => m.id === parseInt(featureCard.dataset.movieId, 10));
      if (movie) openModal(movie);
    }
  });

  modalClose.addEventListener('click', closeModal);
  modalDone.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  modalSave.addEventListener('click', () => {
    if (!currentModalMovie) return;
    toggleSaveMovie(currentModalMovie.id);
    updateModalSaveButton();
  });

  toastClose.addEventListener('click', () => {
    toast.hidden = true;
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modalBackdrop.hidden) {
      closeModal();
    }
  });
}

function initGenreFilters() {
  const genres = new Set();
  MOVIES.forEach(m => m.genres.forEach(g => genres.add(g)));
  const genreList = ['All', ...Array.from(genres).sort()].slice(0,10);
  genreFilters.innerHTML = '';

  genreList.forEach(genre => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `filter-btn ${genre === 'All' ? 'active' : ''}`;
    btn.textContent = genre;
    btn.addEventListener('click', () => {
      activeGenre = genre;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCatalog();
    });
    genreFilters.appendChild(btn);
  });
}

function renderCatalog() {
  const filtered = MOVIES.filter(movie => {
    const matchesSearch = !searchQuery ||
      movie.title.toLowerCase().includes(searchQuery) ||
      movie.director.toLowerCase().includes(searchQuery) ||
      movie.logline.toLowerCase().includes(searchQuery) ||
      movie.note.toLowerCase().includes(searchQuery) ||
      movie.genres.some(g => g.toLowerCase().includes(searchQuery));

    const matchesGenre = activeGenre === 'All' || movie.genres.includes(activeGenre);
    const matchesSaved = !showingSavedOnly || savedMovieIds.has(movie.id);

    return matchesSearch && matchesGenre && matchesSaved;
  });

  catalogCount.textContent = showingSavedOnly
    ? `${filtered.length} saved film${filtered.length === 1 ? '' : 's'}`
    : `${filtered.length} of ${MOVIES.length} films showing`;

  catalogGrid.innerHTML = '';

  if (filtered.length === 0) {
    catalogGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem;">
        <p style="font-style: italic; opacity: 0.8;">No films matched your search in the atlas.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(movie => {
    const isSaved = savedMovieIds.has(movie.id);
    const card = document.createElement('article');
    card.className = 'movie-card';
    card.setAttribute('tabindex', '0');

    card.innerHTML = `
      <div class="card-poster poster" style="background-color: ${movie.color}; color: ${movie.ink};">
        ${buildPosterHTML(movie, isSaved)}
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span>${movie.year}</span> · <span>${movie.runtime}</span> · <span>★ ${movie.rating}</span>
        </div>
        <h3 class="card-title">${movie.title}</h3>
        <p class="card-director">Dir. ${movie.director}</p>
        <p class="card-logline">${movie.logline}</p>
        <div class="card-tags">
          ${movie.genres.map(g => `<span class="tag">${g}</span>`).join('')}
        </div>
      </div>
    `;

    card.addEventListener('click', () => openModal(movie));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(movie);
      }
    });

    catalogGrid.appendChild(card);
  });
}

function renderHeroFeature(movie) {
  featureCard.dataset.movieId = movie.id;
  featurePoster.style.backgroundColor = movie.color;
  featurePoster.style.color = movie.ink;
  featurePoster.innerHTML = buildPosterHTML(movie);
  featureTitle.textContent = movie.title;
  featureMeta.textContent = `${movie.year} · ${movie.director} · ${movie.runtime} · ${movie.genres.join(', ')}`;
  featureLogline.textContent = movie.logline;
}

function openModal(movie) {
  const savedRating = movieRatings[movie.id] || 0;
updateStarRatingUI(savedRating);

  currentModalMovie = movie;
  modalTitle.textContent = movie.title;
  modalDirector.textContent = `Directed by ${movie.director}`;
  modalMeta.textContent = `${movie.year} · ${movie.runtime} · ★ ${movie.rating} · ${movie.genres.join(', ')}`;
  modalLogline.textContent = movie.logline;
  modalNote.textContent = `“${movie.note}”`;

  modalPoster.style.backgroundColor = movie.color;
  modalPoster.style.color = movie.ink;
  modalPoster.innerHTML = buildPosterHTML(movie);

  updateModalSaveButton();
  modalBackdrop.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modalBackdrop.hidden = true;
  document.body.style.overflow = '';
  currentModalMovie = null;
}

function updateModalSaveButton() {
  if (!currentModalMovie) return;
  const isSaved = savedMovieIds.has(currentModalMovie.id);
  modalSave.textContent = isSaved ? 'Remove from Saved' : 'Save to My device';
  modalSave.classList.toggle('button-secondary', isSaved);
  modalSave.classList.toggle('button-primary', !isSaved);
}

function toggleSaveMovie(id) {
  if (savedMovieIds.has(id)) {
    savedMovieIds.delete(id);
  } else {
    savedMovieIds.add(id);
  }
  localStorage.setItem('lantern_saved', JSON.stringify(Array.from(savedMovieIds)));
  updateSavedCount();
  renderCatalog();
}

function updateSavedCount() {
  savedCountEl.textContent = savedMovieIds.size;
}

function showToast(title, message) {
  toastTitle.textContent = title;
  toastMessage.textContent = message;
  toast.hidden = false;

  setTimeout(() => {
    toast.hidden = true;
  }, 5000);
}
function updateStarRatingUI(rating) {
  const stars = document.querySelectorAll('#modalStarRating .star');
  stars.forEach(star => {
    const val = parseInt(star.dataset.value, 10);
    if (val <= rating) {
      star.classList.add('filled');
    } else {
      star.classList.remove('filled');
    }
  });
}
// Select the new UI elements
const historyButton = document.getElementById('historyButton');
const historyModalBackdrop = document.getElementById('historyModalBackdrop');
const historyClose = document.getElementById('historyClose');
const historyList = document.getElementById('historyList');

// Render and open the history modal
function openHistoryModal() {
  const currentRatings = JSON.parse(localStorage.getItem('px_ratings') || '{}');
  const ratedMovieIds = Object.keys(currentRatings);
  
  historyList.innerHTML = '';

  if (ratedMovieIds.length === 0) {
    historyList.innerHTML = '<p class="modal-note">You haven\'t rated any films yet.</p>';
  } else {
    ratedMovieIds.forEach(id => {
      const movie = MOVIES.find(m => m.id === parseInt(id, 10));
      if (movie) {
        const rating = currentRatings[id];
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.justifyContent = 'space-between';
        row.style.borderBottom = '1px solid var(--line)';
        row.style.paddingBottom = '8px';
        
        row.innerHTML = `
          <strong style="color: var(--ink); font-family: var(--serif);">${movie.title}</strong>
          <span style="color: #f59e0b; font-size: 18px;">${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}</span>
        `;
        historyList.appendChild(row);
      }
    });
  }
  
  historyModalBackdrop.hidden = false;
  document.body.style.overflow = 'hidden';
}

// Attach event listeners
historyButton.addEventListener('click', openHistoryModal);
historyClose.addEventListener('click', () => {
  historyModalBackdrop.hidden = true;
  document.body.style.overflow = '';
});

// Close history modal when clicking the backdrop
historyModalBackdrop.addEventListener('click', (e) => {
  if (e.target === historyModalBackdrop) {
    historyModalBackdrop.hidden = true;
    document.body.style.overflow = '';
  }
});