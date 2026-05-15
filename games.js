/*
    
  QUICK REFERENCE FOR URLS:
  Iframe: games/loader.html?url=[INSERT URL SITE]
  SWF:    games/loader.html?url=[INSERT FILE NAME].swf
  
*/

const proxy = (url) => `https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=400&fit=inside&output=webp`;

const GAMES_DATA = [
    {
        id: "0",
        title: "Roomer Web | Chatroom (BETA)",
        image: proxy("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpxedpmd8OHf38ZO4A-8piXOUADQuQaVMJaw&s"),
        url: "https://roomer-web.vercel.app",
    },
    {
        id: "1",
        title: "Level Devil",
        image: proxy("https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3242750/header.jpg"),
        url: "games/loader.html?url=https://jasongamesdev.github.io/level-devil/"
    },
    {
        id: "2",
        title: "Hill Climb Racing",
        image: proxy("https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/b87616bb88c0e3cb4c150c59fdc767fa/hill-climb-racing-lite.png"),
        url: "games/loader.html?url=https://zipygames.github.io/g/hill-climb-racing/main.html" 
    },
    {
        id: "3",
        title: "Poly Track",
        image: proxy("https://i.ytimg.com/vi/wXsG1d9TzdI/maxresdefault.jpg"),
        url: "games/loader.html?url=https://smapskajendfjshwbekf-prog.github.io/newcargame/"
    },
    {
        id: "4",
        title: "Geometry Dash",
        image: proxy("https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/322170/capsule_616x353.jpg?t=1775300400"),
        url: "games/loader.html?url=https://wanocapy.github.io/ChickenKingsVault/gamefiles/Geometry%20Dash%20Lite.html"
    },
    {
        id: "5",
        title: "Minecraft Mobile",
        image: proxy("https://static0.howtogeekimages.com/wordpress/wp-content/uploads/2023/05/minecraft-2.jpg?w=1600&h=900&fit=crop"),
        url: "games/loader.html?url=https://irv77.github.io/EaglerPocketMobile/demo/"
    },
    {
        id: "6",
        title: "Subway Surfers",
        image: proxy("https://freefungames.dumbosdiary.com/wp-content/uploads/2024/02/subway-surfers-sanfrancisco.jpg"),
        url: "games/loader.html?url=https://jasongamesdev.github.io/subway-surfers/"
    },
    {
        id: "7",
        title: "Dino Run DX",
        image: proxy("https://cdn15.idcgames.com/storage/image/1243/thumb_slider/default.jpg"),
        url: "games/loader.html?url=dino-run.swf"
    },
    {
        id: "8",
        title: "Bloons TD 5 (BTD 5)",
        image: proxy("https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/306020/header.jpg?t=1770223235"),
        url: "games/loader.html?url=btd5.swf"
    },
    {
        id: "9",
        title: "Cuphead Mobile",
        image: proxy("https://miro.medium.com/1*2-5CpKRHjQUx6AF-LYKY1A.jpeg"),
        url: "games/loader.html?url=https://dwdvil.github.io/cuphead-cdv-web/"
    },
    {
        id: "10",
        title: "SAS: Zombie Assault 3",
        image: proxy("https://i.ibb.co/5hLrZ8Nt/sas3.png"),
        url: "games/loader.html?url=SAS3.swf"
    },
    {
        id: "11",
        title: "Apes VS Helium",
        image: proxy("https://i.ytimg.com/vi/tCEGJgH4Nhc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCyF9-K4-FBaWXDJ4zs12l1w_4CXA"),
        url: "games/loader.html?url=Apes vs Helium.html"
    },
    {
        id: "12",
        title: "Shift At Midnight",
        image: proxy("https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/257204079/8c55402ce6c155cc8212644b158d3b4af95ab98a/movie_232x130.jpg?t=1758557357"),
        url: "games/loader.html?url=https://corescripts.github.io/ShiftAtMidnightPort/"
    },
    {
        id: "13",
        title: "Stick War",
        image: proxy("https://imgs.crazygames.com/games/stick-war/cover-1659084995039.jpg?metadata=none&quality=60&height=4895"),
        url: "games/loader.html?url=stick-war.swf"
    },
    {
        id: "14",
        title: "10 Minutes Till Dawn",
        image: proxy("https://img.itch.zone/aW1nLzg3MTU5NzMucG5n/original/0LqGxb.png"),
        url: "games/loader.html?url=https://10minutestilldawnonline.github.io/a7/10-minutes-till-dawn/"
    },
    {
        id: "15",
        title: "Short Life",
        image: proxy("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX00XIbqzgWApHxtw8oqm4E--TDsQpVFyuXg&s"),
        url: "games/loader.html?url=https://jasongamesdev.github.io/short-life/"
    },
    {
        id: "16",
        title: "Wordle Unlimited",
        image: proxy("https://www.dailyinfo.co.za/wp-content/uploads/2026/01/wordle-logo.webp"),
        url: "games/loader.html?url=https://bosorioo.github.io/wordle-unlimited/"
    },
    {
        id: "17",
        title: "Flappy Bird",
        image: proxy("https://techfrontier.com.au/nitropack_static/qoEzaUnVVMmdfnkgmWKdqPZHmHyfhDwG/assets/images/optimized/rev-7f03b38/techfrontier.com.au/wp-content/uploads/2025/07/Remembering-Flappy-Bird.jpg"),
        url: "games/loader.html?url=https://ghgstore253.github.io/g26/class-434/"
    },
    {
        id: "18",
        title: "Quick Doodle | Online",
        image: proxy("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU0Bdy7yc6tV2mdGEBDvOHPHaq9QwqGL-WqA&s"),
        url: "games/loader.html?url=https://quick-doodle.vercel.app/"
    },
    {
        id: "19",
        title: "Murder",
        image: proxy("https://img.gamepix.com/games/murder-flash/cover/murder-flash.png?w=1200&ar=16:10"),
        url: "games/loader.html?url=https://jasongamesdev.github.io/murder/"
    },
    {
        id: "20",
        title: "Crossy Road",
        image: proxy("https://crossy-road.io/data/image/how-to-play-crossy-road.jpg"),
        url: "games/loader.html?url=https://jasongamesdev.github.io/crossy-road/"
    },
    {
        id: "21",
        title: "They are coming",
        image: proxy("https://img.itch.zone/aW1nLzExMjkzMjQxLnBuZw==/original/YWsiKf.png"),
        url: "games/loader.html?url=https://jasongamesdev.github.io/they-are-coming/"
    },
    {
        id: "22",
        title: "Plants Vs Zombies",
        image: proxy("https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/257227152/d9139c3f0ddd941e7f9d998801a57f4b56731041/movie_232x130.jpg?t=1762352699"),
        url: "games/loader.html?url=pvz.swf"
    },
    {
        id: "23",
        title: "Rocket Soccer",
        image: proxy("https://i.ytimg.com/vi/Qb6BQji66yc/maxresdefault.jpg"),
        url: "games/loader.html?url=https://rocketsoccerderby.bitbucket.io/file/"
    },
    {
        id: "24",
        title: "Scrap Metal 3",
        image: proxy("https://www.drifted.com/wp-content/uploads/2018/10/scrap-metal-3-full-size.jpg"),
        url: "games/loader.html?url=https://scrapmetalgame.github.io/game/"
    },
    {
        id: "25",
        title: "Odd Bot Out",
        image: proxy("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXz1UjJHC2wqZAknLHITt4e94Bf0OQhsajg&s"),
        url: "games/loader.html?url=https://trueedu20.github.io/g22/class-390/"
    },
    {
        id: "26",
        title: "Parking Fury",
        image: proxy("https://www.coolmathgames.com/sites/default/files/ParkingFury_OG-logo.jpg"),
        url: "games/loader.html?url=https://jasongamesdev.github.io/parking-fury/"
    },
    {
        id: "27",
        title: "Drift Hunters",
        image: proxy("https://imgs.crazygames.com/games/drift-hunters/cover-1656950639575.png?metadata=none&quality=100&width=1200&height=630&fit=crop"),
        url: "games/loader.html?url=https://pizza226.github.io/g5/class-447/"
    },
    {
        id: "28",
        title: "Bergentruck",
        image: proxy("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlE59KoYYECg_BnYUzsj63BtgbjW-eBmTsWQ&s"),
        url: "games/loader.html?url=https://wanocapy.github.io/ChickenKingsVault/gamefiles/BERGENTRUCK.html"
    },
    {
        id: "29",
        title: "Brawl Stars",
        image: proxy("https://egw.news/_next/image?url=https%3A%2F%2Fegw.news%2Fuploads%2Fnews%2F1%2F17%2F1749024516847_1749024516847.webp&w=1920&q=75"),
        url: "games/loader.html?url=https://wanocapy.github.io/ChickenKingsVault/gamefiles/Brawl%20Stars.html"
    },
    {
        id: "30",
        title: "Slow roads",
        image: proxy("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2x4e1hUAIyWCezJBi-9WD-rxSzcXuJ6-cg&s"),
        url: "games/loader.html?url=https://hackingschoolwebsites.github.io/slowroads/"
    },
    {
        id: "31",
        title: "Spaceflight Simulator",
        image: proxy("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzoeJmX4F5LkPh0BCf66mzZPU2cfGb4HQDTQ&s"),
        url: "games/loader.html?url=spaceflightsim.html"
    },
    {
        id: "32",
        title: "Super Star Car",
        image: proxy("https://imgs.crazygames.com/super-star-car_16x9/20260318150415/super-star-car_16x9-cover?metadata=none&quality=100&width=1200&height=630&fit=crop"),
        url: "games/loader.html?url=superstar.html"
    },
    {
        id: "33",
        title: "Survivor.io",
        image: proxy("https://static.wikia.nocookie.net/nickelodeon/images/5/54/Survivor-io.png/revision/latest/scale-to-width-down/1200?cb=20241228053110"),
        url: "games/loader.html?url=https://wanocapy.github.io/ChickenKingsVault/gamefiles/Survivor.io.html"
    },
    {
        id: "34",
        title: "Plants vs Zombies 2 Gardenless (no mobile)",
        image: proxy("https://cdn.webgamer.io/games/mine-blocks/mine-blocks.1280x.85pc.webp"),
        url: "games/loader.html?url=pvzgardenless.html"
    },
    {
        id: "35",
        title: "Minecraft Case Simulator",
        image: proxy("https://playgama.com/cdn-cgi/imagedelivery/LN2S-4p3-GgZvEx3IPaKUA/9bddc924-526a-4e52-a117-051258ffcb00/enlarged"),
        url: "games/loader.html?url=https://funny-school.github.io/m1/MinecraftCaseSimulator/"
    },
    {
        id: "36",
        title: "Checkout Frenzy",
        image: proxy("https://play-lh.googleusercontent.com/8EXSe5kOvzugIwjjHsivULU7BZI05ZCYk6Hq1wIoTq3iEQXh_Kw-cpAYBtkP6G-jNkA2yoYKpSZ7G6PM_FhklTg=w526-h296-rw"),
        url: "games/loader.html?url=https://funny-school.github.io/c1/checkout-frenzy/"
    },
    {
        id: "37",
        title: "Hungry Lamu",
        image: proxy("https://preview.redd.it/theory-about-hungry-lamu-v0-wsl9odzdlehf1.jpeg?width=1080&crop=smart&auto=webp&s=1f81f9605e88a3259d3a1dcde1188d261f62b69c"),
        url: "games/loader.html?url=https://funny-school.github.io/h1/hungrylamu/"
    },
    {
        id: "38",
        title: "Backrooms",
        image: proxy("https://static.wikia.nocookie.net/the-indie-horror-game-world/images/f/fe/Ujyuijk.jpg/revision/latest?cb=20240219113658"),
        url: "games/loader.html?url=https://funny-school.github.io/b/backrooms/"
    },
    {
        id: "39",
        title: "Short Life 2",
        image: proxy("https://d.pacogames.com/images/wp/short-life-2.jpg"),
        url: "games/loader.html?url=https://funny-school.github.io/s1/shortlife2/"
    },
    {
        id: "40",
        title: "Drift Boss",
        image: proxy("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROIPlULnN4TadhlZ_R1P-BurRkHs2p7xZOUQ&s"),
        url: "games/loader.html?url=https://drift-boss.gitlab.io/file/"
    },
    {
        id: "41",
        title: "Snow rider",
        image: proxy("https://zapgames.io/data/image/game/snow-rider-3d.jpg"),
        url: "games/loader.html?url=https://funny-school.github.io/s1/snowrider/"
    },
    {
        id: "42",
        title: "Do not take this cat home",
        image: proxy("https://static.tvtropes.org/pmwiki/pub/images/avoidthecat.png"),
        url: "games/loader.html?url=https://funny-school.github.io/donottakethiscathome/"
    },
    {
        id: "43",
        title: "Once Upon a Coma",
        image: proxy("https://i.kickstarter.com/assets/018/258/330/203e0e65214f740f7e8ba8ec15720c02_original.jpg?anim=false&fit=cover&gravity=auto&height=873&origin=ugc&q=92&v=1521290841&width=1552&sig=FmRXFzoxQ75IHmedgXZdcazXgA9qrtLz6fYzjJ5GPPY%3D"),
        url: "games/loader.html?url=https://funny-school.github.io/o1/onceuponacoma/"
    },
    {
        id: "44",
        title: "Monkey Mart",
        image: proxy("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy80bhTRNp0dz0_N19K0E6XMwxaAvKMHUNbQ&s"),
        url: "games/loader.html?url=https://funny-school.github.io/m1/monkeymart/"
    },
    {
        id: "45",
        title: "Brain Test",
        image: proxy("https://i.ytimg.com/vi/ls8w1fvNwW8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAmWZ435EuS_HCHNRUta-nzBUQDZQ"),
        url: "games/loader.html?url=https://funny-school.github.io/b/braintest/"
    },
    {
        id: "46",
        title: "Plague inc.",
        image: proxy("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3kjb_5CElkijzwbOb2xtmlWMZpxIRbzpHA&s"),
        url: "games/loader.html?url=https://wanocapy.github.io/ChickenKingsVault/gamefiles/Plague%20Inc.html"
    },
    {
        id: "47",
        title: "Plants vs Zombies 2 Gardenless (Mobile support but lags)",
        image: proxy("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MAGGPuzLWVOtp3SsuctbFYDQICiwcDcmvQ&s"),
        url: "games/loader.html?url=https://corescripts.github.io/pvzge_web/"
    },
    {
        id: "48",
        title: "Five Nights at Freddy's",
        image: proxy("https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/d/da/FNaF1.jpg/revision/latest?cb=20230410020858"),
        url: "games/loader.html?url=fnaf1.html"
    },
    {
        id: "49",
        title: "Indian Truck Simulator",
        image: proxy("https://m.media-amazon.com/images/I/91LiSen0kuL.jpg"),
        url: "games/loader.html?url=https://ubgwtf.gitlab.io/indian-truck-simulator-3d/"
    },
    {
        id: "50",
        title: "Crazy Cars",
        image: proxy("https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/2bc8004fcbb4387908a636e2a9d9ab4a/crazy-cars-logo.png"),
        url: "games/loader.html?url=https://funny-school.github.io/c2/crazycars/"
    },
    {
        id: "51",
        title: "Tag",
        image: proxy("https://lh3.googleusercontent.com/aGEIWjyHtcDft29MvsLEOWThsfCDntUilOMdBX7I79KBlXkCxiQigFzyw5GlNocGLVNRkxic9_EptOonX3UtXO-hy0I=s1280-w1280-h800"),
        url: "games/loader.html?url=https://funny-school.github.io/t1/tag/"
    },
    {
        id: "52",
        title: "Trees Hate You",
        image: proxy("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHG43IB8WzHpB0A7jZdUZKK5ys16I-L36lEw&s"),
        url: "games/loader.html?url=treeshateyou.html"
    },
    {
        id: "53",
        title: "Friday Night Funkin",
        image: proxy("https://friday-night-funkin-the-funkin-crew-inc.en.aptoide.com/_next/image?url=https%3A%2F%2Fcdn.aptoide.com%2Fimgs%2F7%2F6%2F9%2F769f9db715608f22e9174283d0f050e0_fgraphic.jpg&w=3840&q=60"),
        url: "games/loader.html?url=fnf.html"
    }
];
