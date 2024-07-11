import express from "express";
import dotenv from "dotenv"
import cors from "cors"

dotenv.config({
  path: "./.env"
})

const app = express();

const port = process.env.port|| 6000;
const movies = [
  {
    id: 1,
    name: "hereditary(2018)",
    rating:"7.2",
    image: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg",
    desc: "After her mother passes away, Annie and the rest of the family are grief-stricken. Soon, strange things start occurring and the horrifying truth about Annie's ancestry begins to come to light",
    genre: "horror",
    title : "  Download Hereditary, Esq. (2018) BluRay 1080p 720p 480p Dual Audio [Hindi Dubbed & English], Watch Hereditary Esq. Full Movie in Hindi Online Free on KatMovieHD.",
    bgimg: "https://imgurworld.top/images/2023/01/14/4b13a071f8bf63012f0223f93353d100.jpg",
  
          
    short:"Hereditary Esq. (2018) Hindi Dubbed (DD 5.1) & English [Dual Audio] BluRay 1080p 720p 480p HD [Full Movie]",
  },
  {
    id: 2,
    name: "Dark knight(2008)",
    rating:"9.1",
    image: "https://w0.peakpx.com/wallpaper/611/61/HD-wallpaper-dark-knight-batman-batman-dark-knight-dark-knight-thumbnail.jpg",
    desc: "Batman has a new foe, the Joker, who is an accomplished criminal hell-bent on decimating Gotham City. Together with Gordon and Harvey Dent, Batman struggles to thwart the Joker before it is too late.",
    genre: "Action",
    short:"   Dark knight Esq. (2008) Hindi Dubbed (DD 5.1) & English [Dual Audio] BluRay 1080p 720p 480p HD [Full Movie]",
    title: "Download Dark knight, Esq. (2008) BluRay 1080p 720p 480p Dual Audio [Hindi Dubbed & English], Watch Dark knight Esq. Full Movie in Hindi Online Free on KatMovieHD.",
    bgimg: "https://imgurworld.top/images/2020/10/06/b84f3b145a8ddc9c6e1e2c523f0a4f1d.jpg"
  },
  {
    id: 3,
    name: "Avengers Endgame(2019)",
    rating:"8.3",
    image: "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg",
    genre: "Action",
    desc: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
   bgimg : "https://imgurworld.top/images/2022/01/12/87179be94f764ef46852273f97b2b45b.jpg",
    short:"   Avengers Endgame Esq. (2019) Hindi Dubbed (DD 5.1) & English [Dual Audio] BluRay 1080p 720p 480p HD [Full Movie]",
    title: "Download Avengers Endgame, Esq. (2008) BluRay 1080p 720p 480p Dual Audio [Hindi Dubbed & English], Watch Dark knight Esq. Full Movie in Hindi Online Free on KatMovieHD.",
  },
  {
    id: 4,
    name: "Kingdom of the Planet of the Apes",
    rating:"7.2",
    image: "https://imgurworld.top/images/2024/07/08/46291320a9bcfa67b76d39a112d73c0a.jpg",
    genre: "  Sci-Fi",
    desc: "Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he’s been taught about the past and make choices that will define a future for apes and humans alike",
   bgimg : "https://imgurworld.top/images/2024/07/08/d28be527cd0bdf45a893889fe097a673.jpg",
    short:"   Kingdom of the Planet of the Apes 2024 English (ORG 5.1) 1080p 720p 480p WEB-DL x264 Multi Subs [Full Movie]",
    title: "Download Kingdom of the Planet of the Apes 2024 English (ORG 5.1) 1080p 720p 480p WEB-DL x264 Multi Subs [Hindi Dubbed & English].",
  },
  {
    id: 5,
    name: "Kill Craft 2024",
    rating:"2.6",
    image: "https://imgurworld.top/images/2024/06/09/a9cc32f291e5ee462be33a28c10cb847.jpg",
    genre: "Action",
    desc: "Marina lives with her disabled mother and her hit man father. When he dies at work, she must take charge of the family business and take care of her mother. Marked to die, Marina must navigate the world of assassins to survive.",
   bgimg : "https://imgurworld.top/images/2024/06/09/769da797754d53026937ea5b7819bfe5.jpg",
    short:"   Kill Craft 2024 English (ORG 5.1) 1080p 720p 480p WEB-DL x264 ESubs",
    title: "Kill Craft full movie free download and watch online in 480p 720p and 1080p WEB-DL x264 best HD quality. Kill Craft is available in English (ORG 5.1) audio track(s)",
  },
  {
    id: 6,
    name: "The First Omen 2024",
    rating:"6.9",
    image: "https://imgurworld.top/images/2024/06/03/600bb9aea3947a594e42b8cf249936e7.jpg",
    genre: "Horror",
    desc: "A young American woman is sent to Rome to begin a life of service to the church, but encounters a darkness that causes her to question her faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil inca…",
   bgimg : "https://imgurworld.top/images/2024/06/03/5b83894ce7a0bf4080603ddc64206adb.jpg",
    short:"   The First Omen 2024 English (ORG 5.1) 1080p 720p 480p WEB-DL x264 ESubs",
    title: "The First Omen full movie free download and watch online in 480p 720p and 1080p WEB-DL x264 best HD quality. The First Omen is available in English (ORG 5.1) audio track(s) ",
  },
  {
    id: 7,
    name: "Immaculate 2024",
    rating:"6.3",
    image: "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg",
    genre: "Horror",
    desc: "Cecilia, a woman of devout faith, is warmly welcomed to the picture-perfect Italian countryside where she is offered a new role at an illustrious convent. But it becomes clear to Cecilia that her new home harbors dark and horrifyi…",
   bgimg : "https://imgurworld.top/images/2024/04/17/90c82c99dab33d747e9b74a3415b0676.jpg",
    short:"   Immaculate 2024 English (ORG 5.1) 1080p 720p 480p WEB-DL x264 6CH ESubs",
    title: "Immaculate full movie free download and watch online in 480p 720p and 1080p WEB-DL x264 best HD quality. Immaculate is available in English (ORG 5.1) audio track(s)",
  },
  {
    id: 8,
    name: "Kalahari (Prey) 2024",
    rating:"5",
    image: "https://imgurworld.top/images/2024/03/26/a59e05764f4d600fe282f64a62c9b02c.jpg",
    genre: "Action",
    desc: "A young couple is compelled to leave their Christian missionary station in the Kalahari Desert after being threatened with death by an extremist militant gang. After crashing their aircraft they must battle man and beast for their…",
   bgimg : "https://imgurworld.top/images/2024/03/27/870c4c05c388d8d006a524fe5d46953d.jpg",
    short:"Kalahari (Prey) 2024 English (ORG 5.1) 1080p 720p 480p WEB-DL x264 ESubs",
    title: "Prey full movie free download and watch online in 480p 720p and 1080p WEB-DL x264 best HD quality. Prey is available in English (ORG 5.1) audio track(s)",
  },
  {
    id: 9,
    name: "Gods of the Deep 2023",
    rating:"3.2",
    image: "https://imgurworld.top/images/2024/02/09/4cbce24ee0374fdb6de0ef4037700204.jpg",
    genre: "Horror",
    desc: "When a daring mission leads a deep sea submarine team into a mysterious opening on the ocean floor, they uncover a lost underwater world and awaken its ancient race of otherworldly beings.",
   bgimg : "https://imgurworld.top/images/2024/02/09/b8bd6aab122943d91ad36ce561a805f1.jpg",
    short:"   Gods of the Deep 2023 AMZN English (ORG 5.1) 1080p 720p 480p WEB-DL x264 ESubs",
    title: "Gods of the Deep full movie free download and watch online in 480p 720p and 1080p WEB-DL x264 best HD quality. Gods of the Deep is available in English (ORG 5.1) audio track(s)",
  },
  {
    id: 10,
    name: "The Jester 2023 English",
    rating:"4.2",
    image: "https://imgurworld.top/images/2024/02/13/1856df10caa643ae1309cd5f9aa109cf.jpg",
    genre: "Horror",
    desc: "A malevolent being known as The Jester terrorizes the inhabitants of a small town on Halloween night, including two estranged sisters who must come together to find a way to defeat this evil entity.",
   bgimg : "https://imgurworld.top/images/2022/01/12/87179be94f764ef46852273f97b2b45b.jpg",
    short:"   The Jester 2023 English (ORG 5.1) 1080p 720p 480p WEB-DL x264 6CH ESubs",
    title: "The Jester full movie free download and watch online in 480p 720p and 1080p WEB-DL x264 best HD quality. The Jester is available in English (ORG 5.1) audio track(s)",
  },
  {
    id: 11,
    name: "Anyone But You 2023",
    rating:"6.7",
    image: "https://imgurworld.top/images/2024/02/09/54f55bcca88aebd02491e0c77fdda6c8.jpg",
    genre: "Comedy",
    desc: "After an amazing first date, Bea and Ben’s fiery attraction turns ice-cold–until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a co…",
   bgimg : "https://imgurworld.top/images/2024/02/09/d635ebe4a111e41f3b110918d872c637.jpg",
    short:"  Anyone But You 2023 AMZN English (ORG 5.1) 1080p 720p 480p WEB-DL x264 ESubs",
    title: "Anyone But You full movie free download and watch online in 480p 720p and 1080p WEB-DL x264 best HD quality. Anyone But You is available in English (ORG 5.1) audio track(s)",
  },
  {
    id: 1,
    name: "hereditary(2018)",
    rating:"7.2",
    image: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg",
    desc: "After her mother passes away, Annie and the rest of the family are grief-stricken. Soon, strange things start occurring and the horrifying truth about Annie's ancestry begins to come to light",
    genre: "horror",
    title : "  Download Hereditary, Esq. (2018) BluRay 1080p 720p 480p Dual Audio [Hindi Dubbed & English], Watch Hereditary Esq. Full Movie in Hindi Online Free on KatMovieHD.",
    bgimg: "https://imgurworld.top/images/2023/01/14/4b13a071f8bf63012f0223f93353d100.jpg",
  
          
    short:"Hereditary Esq. (2018) Hindi Dubbed (DD 5.1) & English [Dual Audio] BluRay 1080p 720p 480p HD [Full Movie]",
  },
  {
    id: 2,
    name: "Dark knight(2008)",
    rating:"9.1",
    image: "https://w0.peakpx.com/wallpaper/611/61/HD-wallpaper-dark-knight-batman-batman-dark-knight-dark-knight-thumbnail.jpg",
    desc: "Batman has a new foe, the Joker, who is an accomplished criminal hell-bent on decimating Gotham City. Together with Gordon and Harvey Dent, Batman struggles to thwart the Joker before it is too late.",
    genre: "Action",
    short:"   Dark knight Esq. (2008) Hindi Dubbed (DD 5.1) & English [Dual Audio] BluRay 1080p 720p 480p HD [Full Movie]",
    title: "Download Dark knight, Esq. (2008) BluRay 1080p 720p 480p Dual Audio [Hindi Dubbed & English], Watch Dark knight Esq. Full Movie in Hindi Online Free on KatMovieHD.",
    bgimg: "https://imgurworld.top/images/2020/10/06/b84f3b145a8ddc9c6e1e2c523f0a4f1d.jpg"
  },
  {
    id: 3,
    name: "Avengers Endgame(2019)",
    rating:"8.3",
    image: "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg",
    genre: "Action",
    desc: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
   bgimg : "https://imgurworld.top/images/2022/01/12/87179be94f764ef46852273f97b2b45b.jpg",
    short:"   Avengers Endgame Esq. (2019) Hindi Dubbed (DD 5.1) & English [Dual Audio] BluRay 1080p 720p 480p HD [Full Movie]",
    title: "Download Avengers Endgame, Esq. (2008) BluRay 1080p 720p 480p Dual Audio [Hindi Dubbed & English], Watch Dark knight Esq. Full Movie in Hindi Online Free on KatMovieHD.",
  },
  {
    id: 4,
    name: "Kingdom of the Planet of the Apes",
    rating:"7.2",
    image: "https://imgurworld.top/images/2024/07/08/46291320a9bcfa67b76d39a112d73c0a.jpg",
    genre: "  Sci-Fi",
    desc: "Many years after the reign of Caesar, a young ape goes on a journey that will lead him to question everything he’s been taught about the past and make choices that will define a future for apes and humans alike",
   bgimg : "https://imgurworld.top/images/2024/07/08/d28be527cd0bdf45a893889fe097a673.jpg",
    short:"   Kingdom of the Planet of the Apes 2024 English (ORG 5.1) 1080p 720p 480p WEB-DL x264 Multi Subs [Full Movie]",
    title: "Download Kingdom of the Planet of the Apes 2024 English (ORG 5.1) 1080p 720p 480p WEB-DL x264 Multi Subs [Hindi Dubbed & English].",
  },
  {
    id: 5,
    name: "Kill Craft 2024",
    rating:"2.6",
    image: "https://imgurworld.top/images/2024/06/09/a9cc32f291e5ee462be33a28c10cb847.jpg",
    genre: "Action",
    desc: "Marina lives with her disabled mother and her hit man father. When he dies at work, she must take charge of the family business and take care of her mother. Marked to die, Marina must navigate the world of assassins to survive.",
   bgimg : "https://imgurworld.top/images/2024/06/09/769da797754d53026937ea5b7819bfe5.jpg",
    short:"   Kill Craft 2024 English (ORG 5.1) 1080p 720p 480p WEB-DL x264 ESubs",
    title: "Kill Craft full movie free download and watch online in 480p 720p and 1080p WEB-DL x264 best HD quality. Kill Craft is available in English (ORG 5.1) audio track(s)",
  },
  {
    id: 6,
    name: "The First Omen 2024",
    rating:"6.9",
    image: "https://imgurworld.top/images/2024/06/03/600bb9aea3947a594e42b8cf249936e7.jpg",
    genre: "Horror",
    desc: "A young American woman is sent to Rome to begin a life of service to the church, but encounters a darkness that causes her to question her faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil inca…",
   bgimg : "https://imgurworld.top/images/2024/06/03/5b83894ce7a0bf4080603ddc64206adb.jpg",
    short:"   The First Omen 2024 English (ORG 5.1) 1080p 720p 480p WEB-DL x264 ESubs",
    title: "The First Omen full movie free download and watch online in 480p 720p and 1080p WEB-DL x264 best HD quality. The First Omen is available in English (ORG 5.1) audio track(s) ",
  },
  {
    id: 7,
    name: "Immaculate 2024",
    rating:"6.3",
    image: "https://cdn.vox-cdn.com/thumbor/TAzotU1RnNkUJ7RwFtu7Rn1Ntcw=/0x0:1688x2500/1200x0/filters:focal(0x0:1688x2500):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/11614195/InfinityWar5aabd55fed5fa.jpg",
    genre: "Horror",
    desc: "Cecilia, a woman of devout faith, is warmly welcomed to the picture-perfect Italian countryside where she is offered a new role at an illustrious convent. But it becomes clear to Cecilia that her new home harbors dark and horrifyi…",
   bgimg : "https://imgurworld.top/images/2024/04/17/90c82c99dab33d747e9b74a3415b0676.jpg",
    short:"   Immaculate 2024 English (ORG 5.1) 1080p 720p 480p WEB-DL x264 6CH ESubs",
    title: "Immaculate full movie free download and watch online in 480p 720p and 1080p WEB-DL x264 best HD quality. Immaculate is available in English (ORG 5.1) audio track(s)",
  },
  {
    id: 8,
    name: "Kalahari (Prey) 2024",
    rating:"5",
    image: "https://imgurworld.top/images/2024/03/26/a59e05764f4d600fe282f64a62c9b02c.jpg",
    genre: "Action",
    desc: "A young couple is compelled to leave their Christian missionary station in the Kalahari Desert after being threatened with death by an extremist militant gang. After crashing their aircraft they must battle man and beast for their…",
   bgimg : "https://imgurworld.top/images/2024/03/27/870c4c05c388d8d006a524fe5d46953d.jpg",
    short:"Kalahari (Prey) 2024 English (ORG 5.1) 1080p 720p 480p WEB-DL x264 ESubs",
    title: "Prey full movie free download and watch online in 480p 720p and 1080p WEB-DL x264 best HD quality. Prey is available in English (ORG 5.1) audio track(s)",
  },
  {
    id: 9,
    name: "Gods of the Deep 2023",
    rating:"3.2",
    image: "https://imgurworld.top/images/2024/02/09/4cbce24ee0374fdb6de0ef4037700204.jpg",
    genre: "Horror",
    desc: "When a daring mission leads a deep sea submarine team into a mysterious opening on the ocean floor, they uncover a lost underwater world and awaken its ancient race of otherworldly beings.",
   bgimg : "https://imgurworld.top/images/2024/02/09/b8bd6aab122943d91ad36ce561a805f1.jpg",
    short:"   Gods of the Deep 2023 AMZN English (ORG 5.1) 1080p 720p 480p WEB-DL x264 ESubs",
    title: "Gods of the Deep full movie free download and watch online in 480p 720p and 1080p WEB-DL x264 best HD quality. Gods of the Deep is available in English (ORG 5.1) audio track(s)",
  },
  {
    id: 10,
    name: "The Jester 2023 English",
    rating:"4.2",
    image: "https://imgurworld.top/images/2024/02/13/1856df10caa643ae1309cd5f9aa109cf.jpg",
    genre: "Horror",
    desc: "A malevolent being known as The Jester terrorizes the inhabitants of a small town on Halloween night, including two estranged sisters who must come together to find a way to defeat this evil entity.",
   bgimg : "https://imgurworld.top/images/2022/01/12/87179be94f764ef46852273f97b2b45b.jpg",
    short:"   The Jester 2023 English (ORG 5.1) 1080p 720p 480p WEB-DL x264 6CH ESubs",
    title: "The Jester full movie free download and watch online in 480p 720p and 1080p WEB-DL x264 best HD quality. The Jester is available in English (ORG 5.1) audio track(s)",
  },
  

  // ...add other movies here
];

// Route to fetch paginated list of movies
app.get("/api/movies", (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedMovies = movies.slice(startIndex, endIndex);
  

  res.json(paginatedMovies);
});

// Route to fetch specific movie by id
app.get("/api/movies/:id", (req, res) => {
  const { id } = req.params;
  const movie = movies.find(movie => movie.id === parseInt(id));
  if (!movie) {
    return res.status(404).json({ message: 'Movie not found' });
  }
  res.json(movie);
});

app.use(cors());
// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});