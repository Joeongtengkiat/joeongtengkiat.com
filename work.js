/*
 * Projects and hackathons shown on the site.
 * Each entry becomes a card in the sidebar and a page at /work/<slug>.
 *
 * Fields:
 *   kind      'project' (green crater) or 'hackathon' (blue crater)
 *   style     card look: 'inked' (shipped), 'stencil' (coursework), 'solid' (hackathon)
 *   images    [{ src, alt, caption }]   -> real screenshots (first one is the hero)
 *   ascii     fallback hero drawing when there are no images
 *   links     [{ label, url }]          -> buttons on the page (repo, live site, model...)
 *   noLinks   text shown when there are no links
 */
window.WORK = [
  /* ------------------------------ PROJECTS ------------------------------ */
  {
    slug: 'ink-and-orbit',
    kind: 'project', style: 'inked', crater: 'G-01',
    title: 'Ink & Orbit',
    meta: 'PERSONAL · WEB · 2026',
    oneLiner: 'This portfolio — a spinning ASCII planet you explore by catching satellites.',
    summary: [
      "I wanted a portfolio that felt like mine instead of a template, so it's half tattoo flash sheet, half space: halftone nebulas, ASCII and binary linework, and a planet you can actually explore.",
      'Every crater on the planet is something I\'ve built — green for projects, blue for hackathons, yellow for internships.'
    ],
    how: [
      'The planet is redrawn about 14 times a second as plain text. Each character cell is a point on a sphere, shaded with an ordered-dither halftone ramp.',
      'Craters are stored as latitude/longitude circles, so they turn with the surface. The ring is about 1,400 symbol particles, depth-sorted against the planet.',
      'Satellites orbit on a tilted path that never crosses the planet, and the orbit pauses on hover so they\'re easy to catch.',
      'Plain HTML, CSS and JavaScript — no framework, no build step — deployed on Vercel.'
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    links: [
      { label: 'Repo', url: 'https://github.com/Joeongtengkiat/joeongtengkiat.com' },
      { label: 'Live site', url: 'https://joeongtengkiat.com' }
    ],
    ascii: String.raw`
        .   *        .-""""-.        +      .
     +          .  /  O   o  \  .        *
   ~ x * ~ # @ ~ :   .  O     : ~ $ & % ~ { } ~
         *         \  o    .  /         .
     .        +     '-.____.-'    *          +
                  [ PLANET OTK-29 ]`
  },
  {
    slug: 'sportsbash26',
    kind: 'project', style: 'inked', crater: 'G-02',
    title: 'SportsBash26',
    meta: 'EVENT · WEB · 2026',
    oneLiner: "Website and sign-ups for the NTU Sports Club Ball 2026 — 'A Never Ending Summer'.",
    summary: [
      "I'm on the organising team for the NTU Sports Club's annual ball. This year's theme is 'A Never Ending Summer': beaches, Bali, sea-and-sand blues and golden yellow.",
      'The website is the one link everyone gets — the event details, a photo wall of the featured couples, and the sign-up forms.'
    ],
    how: [
      "Designed around the ball's look book: pale seafoam grounds, a golden-yellow accent and playful handwritten type.",
      'Three separate sign-up forms: freshies, seniors (including retired members and alumni), and friends & family.',
      "Event night: 30 September 2026 at Yang, Clarke Quay. Dress code: 'club fit'."
    ],
    stack: ['Web design', 'Google Forms', 'Canva'],
    links: [],
    noLinks: 'The site was shared privately with club members.',
    ascii: String.raw`
           \   |   /
         -- .-"""-. --        a  n e v e r
        -- (   *   ) --         e n d i n g
         -- '-...-' --        s u m m e r
           /   |   \
   ~~~^~~~~~~~^~~~~~~~~^~~~~~~~~^~~~~~~~^~~~~~
     ~~^~~~~~~~^~~~~~~~~~^~~~~~~~^~~~~~~~^~~~
   . . . . . .  sportsbash 26  . . . . . . . .`
  },
  {
    slug: 'estonian-pos-tagging',
    kind: 'project', style: 'stencil', crater: 'G-03',
    title: 'Estonian POS Tagging',
    meta: 'HG2051 · NLP',
    oneLiner: 'NLTK vs a fine-tuned transformer: which one tags Estonian parts of speech better?',
    summary: [
      'A course project comparing two ways to label the part of speech of every word in Estonian sentences: a classic NLTK tagger, and a fine-tuned transformer.',
      'Both were trained on Universal Dependencies treebanks and scored on accuracy, precision, recall and F1. The transformer came out ahead.'
    ],
    how: [
      'Training data: the Estonian Dependency Treebank (EDT) and the Estonian Web Treebank (EWT) from Universal Dependencies.',
      'The NLTK tagger was trained with cross-validation and saved as a reusable model.',
      'The transformer is XLM-RoBERTa fine-tuned for token classification with Hugging Face Transformers.',
      'The final model was then used to tag a partially annotated Estonian Bible corpus (TaggedPBC).'
    ],
    stack: ['Python', 'NLTK', 'PyTorch', 'Hugging Face Transformers', 'scikit-learn'],
    links: [
      { label: 'Repo', url: 'https://github.com/Joeongtengkiat/Projects/tree/main/HG2051_NLTKandBERT' },
      { label: 'Model on Hugging Face', url: 'https://huggingface.co/PitchayaS/xlm-roberta-estonian-pos' }
    ],
    ascii: String.raw`
     "  Tere ,   kuidas   läheb  ? "
          |          |        |
        INTJ        ADV      VERB

     NLTK  [##############--------]
     BERT  [####################--]   <- winner`
  },
  {
    slug: 'hybrid-sort',
    kind: 'project', style: 'stencil', crater: 'G-04',
    title: 'Hybrid Sort',
    meta: 'SC2001 · ALGORITHMS',
    oneLiner: 'Merge sort meets insertion sort — finding the threshold where switching pays off.',
    summary: [
      'For SC2001 (Algorithm Design & Analysis), our group built a hybrid sort in Java: merge sort that hands small subarrays to insertion sort once they shrink below a threshold S.',
      'Merge sort wins on big inputs, insertion sort wins on tiny ones. The project was about finding where that crossover sits — in theory, and in measured key comparisons.'
    ],
    how: [
      'Counted key comparisons instead of only timing, so the results don\'t depend on the machine.',
      'Fixed S and varied the input size n, then fixed n and varied S, to find the best threshold.',
      'Compared the tuned hybrid against plain merge sort.'
    ],
    stack: ['Java', 'Algorithm analysis'],
    links: [],
    noLinks: 'Group coursework — the code is private, but I\'m happy to walk through it.',
    ascii: String.raw`
            [ 9  3  7  1 | 8  2  6  4 ]
                /               \
        [ 9  3  7  1 ]     [ 8  2  6  4 ]
          size <= S ?        size <= S ?
        insertion sort     insertion sort
        [ 1  3  7  9 ]     [ 2  4  6  8 ]
                \               /
            [ 1  2  3  4  6  7  8  9 ]   merged`
  },
  {
    slug: 'dijkstra',
    kind: 'project', style: 'stencil', crater: 'G-05',
    title: 'Dijkstra, Two Ways',
    meta: 'SC2001 · GRAPHS',
    oneLiner: 'Shortest paths with an array vs a heap — and when each one wins.',
    summary: [
      'Same algorithm, two implementations: an adjacency matrix with an array as the priority queue, versus adjacency lists with a min-heap.',
      'The array version runs in O(V²) and the heap version in O((V + E) log V). The project measured when each one actually wins, depending on how dense the graph is.'
    ],
    how: [
      'Generated random graphs while varying the number of vertices and the number of edges.',
      'Ran both versions on the same graphs so the comparison is fair.',
      'Dense graphs favour the matrix + array; sparse graphs favour lists + heap.'
    ],
    stack: ['Algorithms', 'Graphs', 'Complexity analysis'],
    links: [],
    noLinks: 'Group coursework — the code is private, but I\'m happy to walk through it.',
    ascii: String.raw`
        (A)-----4-----(B)
         | \           |
         2   7         1
         |     \       |
        (C)--3--------(D)-----5-----(E)

     dist   A=0   C=2   B=4   D=5   E=10
     heap   [ (2,C)  (4,B)  (7,D) ]  -> pop min`
  },
  {
    slug: 'unbounded-knapsack',
    kind: 'project', style: 'stencil', crater: 'G-06',
    title: 'Unbounded Knapsack',
    meta: 'SC2001 · DP',
    oneLiner: 'Dynamic programming: packing the most value into a bag you can refill forever.',
    summary: [
      'Dynamic programming for the unbounded knapsack problem: every item can be packed as many times as you like, and the goal is the most profit for a given capacity.',
      'The recurrence P(C) = max over items of P(C − wᵢ) + pᵢ builds the answer bottom-up, from capacity 0 to C.'
    ],
    how: [
      'Started from the recursive definition, then turned it into a bottom-up table so each capacity is solved only once.',
      'Worked example: items (4, 7), (6, 6) and (8, 9) with capacity 14. The best profit is 21 — three of the first item.',
      'Runs in O(n·C) time and O(C) space for n items and capacity C.'
    ],
    stack: ['Dynamic programming', 'Algorithm analysis'],
    links: [],
    noLinks: 'Group coursework — the code is private, but I\'m happy to walk through it.',
    ascii: String.raw`
      capacity C = 14            items  (w, p)
      +------------------+       A      (4, 7)
      | [ A ][ A ][ A ]  |       B      (6, 6)
      +------------------+       C      (8, 9)

      P(c) = max over i { P(c - w_i) + p_i }
      c :  0 1 2 3 4 5 6 7 8  9 10 11 12 13 14
      P :  0 0 0 0 7 7 7 7 14 14 14 14 21 21 21`
  },

  /* ----------------------------- HACKATHONS ----------------------------- */
  {
    slug: 'systemearth',
    kind: 'hackathon', style: 'solid', crater: 'B-01',
    title: 'SystemEarth',
    meta: 'HACK & HIRE · 2026',
    event: 'SystemEarth Hack & Hire 2026',
    result: '1ST PLACE · 13 TEAMS',
    oneLiner: 'Fast, faithful EU deforestation checks for rubber plots, straight from satellite layers.',
    summary: [
      'The EU Deforestation Regulation (EUDR) says a farm plot passes if its land wasn\'t forest on 31 December 2020, or if that forest hasn\'t been cleared since. Checking that means reading about 20 satellite layers from 2000 to 2026.',
      'We squeezed those 21 layers — 234.5 MB for a single half-degree box — into one 32-bit number per pixel, stored it in Neon (cloud PostgreSQL), and checked whole batches of plots in one query, with exactly the answer the original layers give.',
      'Our showcase was natural rubber in Jambi, Sumatra: 36 million pixels at 10 m. Rubber is tricky — plantations look like forest and replanting looks like clearing — so clearing on rubber land is flagged "needs review", not failed.'
    ],
    how: [
      'Step 1 — compaction: one 10 m grid, only the facts the EUDR rule reads, with time stored as event years instead of yearly maps.',
      'Step 2 — storage in Neon, compared two ways: "stencils" (8×8 bitmaps zipped per 256×256 page, answered on your computer) vs "outlines" (PostGIS polygons, answered inside the database).',
      'A desktop app shows the map, lets you draw or load farms, and gives each one a verdict: compliant, not compliant, or needs review — including whether it sits in a protected area.',
      'A built-in benchmark compares the two approaches on batches of 1, 10, 100 and 1,000 farms.'
    ],
    stack: ['Python', 'PostgreSQL + PostGIS (Neon)', 'rasterio', 'GeoPandas', 'PyQt5', 'Leaflet'],
    images: [
      { src: '/img/work/systemearth-app.jpg', alt: 'The desktop app: a satellite map of Jambi coloured by forest, deforestation and needs-review areas, with farm outlines labelled compliant or not compliant, and a results panel comparing the two storage approaches.', caption: 'The farm checker: every plot gets a verdict, and the panel on the right compares the two storage approaches.' },
      { src: '/img/work/systemearth-overview.jpg', alt: 'System overview diagram: 21 satellite layers are compacted by eudr_layers.py, stored in Neon PostgreSQL with PostGIS, then farm plots are checked in one batched query.', caption: 'From about 20 satellite layers to a plot verdict.' }
    ],
    links: [
      { label: 'Repo', url: 'https://github.com/Joeongtengkiat/Hackathons/tree/main/HackNhire_2026_First_place_Submission' }
    ]
  },
  {
    slug: 'naisc-singtel',
    kind: 'hackathon', style: 'solid', crater: 'B-02',
    title: 'Churn Under Drift',
    meta: 'NAISC × SINGTEL · 2026',
    event: 'National AI Student Challenge × Singtel 2026 · team Shaun-Coders',
    oneLiner: 'Predicting which customers will leave, when the data keeps shifting under you.',
    summary: [
      'Singtel\'s challenge: predict the probability that each customer churns — when the test period doesn\'t look like the months the model was trained on.',
      'Our pipeline measures that drift first, then reweights the training data towards the test period before training the model, so it learns from the customers that look most like today\'s.'
    ],
    how: [
      'Drift detection, one feature at a time: Kolmogorov–Smirnov, PSI and Wasserstein distance for numbers; chi-square or total variation distance for categories; Benjamini–Hochberg correction across all the tests.',
      'Drift detection across features: a classifier that tries to tell train from test, Maximum Mean Discrepancy, PCA-based tests, covariance shift, and leave-one-month-out scores to catch concept drift.',
      'Mitigation: every training row gets a weight — from feature proximity, category frequencies, month similarity and a density-ratio correction — combined and normalised before training a LightGBM model.',
      'Output: a churn probability for every customer.'
    ],
    stack: ['Python', 'LightGBM', 'scikit-learn', 'SciPy', 'pandas', 'Streamlit', 'Plotly'],
    images: [
      { src: '/img/work/naisc-drift.jpg', alt: 'Heatmap of the top 15 features\' importance per month from January to October 2025. Contract dominates until July, then internet type, tenure and number of referrals take over from August.', caption: 'Why drift matters: "Contract" drives the model until July, then tenure and referrals take over.' }
    ],
    links: [
      { label: 'Repo', url: 'https://github.com/Joeongtengkiat/Hackathons/tree/main/Singtel%27s_National_AI_Challenge_2026' }
    ]
  },
  {
    slug: 'aigc-detector',
    kind: 'hackathon', style: 'solid', crater: 'B-03',
    title: 'AIGC Image Detector',
    meta: 'TIKTOK TECHJAM · 2026',
    event: 'TikTok TechJam 2026',
    oneLiner: 'Spotting AI-generated images — even after they\'ve been compressed, blurred and reposted.',
    summary: [
      'A tool that flags AI-generated images, and measures how well that holds up after the things that happen to images online: JPEG compression, blurring, resizing and social-media reposts.',
      'On a sample of 100 real and 100 AI-generated images it scored an AUC of 0.921, catching 78% of AI images with a 6% false-positive rate. It\'s tuned to avoid false alarms, because wrongly flagging a real photo is the costlier mistake.'
    ],
    how: [
      'CLIP ViT-L/14 is used as a frozen feature extractor, with a small trained head on top.',
      'Every image is re-encoded as JPEG before it\'s analysed, so the model can\'t cheat by learning "real = JPEG, AI = PNG".',
      'Training images are put through compression, blur, noise, downscaling and repost chains, and the model is scored on its worst-case version of each image.',
      'Reports AUC rather than accuracy, since the best threshold shifts between image sets. Comes with a desktop app.'
    ],
    stack: ['Python', 'PyTorch', 'CLIP ViT-L/14', 'Hugging Face', 'scikit-learn', 'PyQt6'],
    links: [
      { label: 'Repo', url: 'https://github.com/Joeongtengkiat/Hackathons/tree/main/Tik-Tok_TechJam2026' }
    ],
    ascii: String.raw`
     +-------------+     +--------------+     +-------+
     |  .--.  /\   | --> |  CLIP  ViT   | --> |  MLP  | --> real / AI ?
     | ( oo )/  \  |     |  (frozen)    |     | head  |
     +-------------+     +--------------+     +-------+
        jpeg  >  blur  >  resize  >  repost  >  still caught

        AUC 0.921   ·   recall 78%   ·   false positives 6%`
  },
  {
    slug: 'adapt',
    kind: 'hackathon', style: 'solid', crater: 'B-04',
    title: 'ADAPT',
    meta: 'IGNITE AGENTIC AI · 2026',
    event: 'IGNITE Agentic AI Hackathon 2026 (SimplifyNext)',
    oneLiner: 'An AI that adapts with you, not for you.',
    summary: [
      'An agent for students juggling classes, a part-time job, club commitments and an internship search. When something changes — a moved deadline, a cancelled meeting — it works out which of your existing commitments that actually ripples into.',
      'It weighs a few ways to respond, shows the numbers behind each one, and proposes the best move. It never acts silently: anything that touches your calendar or messages waits for your go-ahead.'
    ],
    how: [
      'The loop: sense → reason → predict → decide → act → learn.',
      'A tool-using agent on Amazon Bedrock, with tools like detect_conflicts, find_free_slots and score_option.',
      'The model never makes up a probability: the server re-runs the scoring tools on the exact options it proposes.',
      'FastAPI backend and a plain JavaScript front end, built inside an AWS sandbox with a hard budget cap.'
    ],
    stack: ['Python', 'FastAPI', 'Amazon Bedrock', 'boto3', 'JavaScript'],
    links: [
      { label: 'Repo', url: 'https://github.com/Joeongtengkiat/SimplifyNext2026' }
    ],
    ascii: String.raw`
      sense --> reason --> predict --> decide --> act
        ^                                          |
        +----------------- learn <-----------------+

      "deadline moved up to Tuesday"
         -> checks what it collides with
         -> scores the options, shows the numbers
         -> proposes. you decide.`
  }
];
