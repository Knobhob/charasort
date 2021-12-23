dataSetVersion = "2021-12-22"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options= [
    {
        name: "Select genders",
        key: "gender",
        tooltip: "Select the genders you want to rank.",
        checked: false,
        sub: [
            { name: "Female", key: "female" },
            { name: "Male", key: "male"}
        ]
    },
    {
        name: "Remove lolis/shotas",
        key: "loli",
        tooltip: "Check this if you don't want to include loli/shota characters.",
        checked: false
    }
];

dataSet[dataSetVersion].characterData = [
    {
        name: "A-37",
        img: "a37.png",
        opts: {
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Akagi Shigeru",
        img: "akagi.png",
        opts: {
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Anju Suzumiya",
        img: "anju.png",
        opts: {
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Nana Shiraishi",
        img: "banana.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Ichihime",
        img: "cat.png",
        opts: {
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Chihori Terasaki",
        img: "chihori.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Chiori Mikami",
        img: "chiori.png",
        opts: {
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Miki Nikaidou",
        img: "miki.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kana Fujita",
        img: "kana.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Mai Aihara",
        img: "mai.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nadeshiko",
        img: "nadeshiko.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yui Yagi",
        img: "yui.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Riu Kujou",
        img: "riu.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Xenia",
        img: "xenia.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaavi",
        img: "kaavi.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sara",
        img: "sara.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hana Ninomiya",
        img: "hana.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Keikumusume",
        img: "hat.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hinata Takanashi",
        img: "hinata.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Haruna Igarashi",
        img: "haruna.png",
        opts: {
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Sawako Kitami",
        img: "mamako.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Momo Hina",
        img: "hinamomo.png",
        opts: {
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Kaguyahime",
        img: "kaguya.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirara Fujimoto",
        img: "jk.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Eliisa",
        img: "eliisa.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Saki Miyanaga",
        img: "saki.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nodoka Haramura",
        img: "nodo.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Koromo Amae",
        img: "koromo.png",
        opts: {
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Teru Miyanaga",
        img: "teru.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Fu Ji",
        img: "fuji.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yumeko Jabami",
        img: "jabami.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Mary Saotome",
        img: "mary.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Midari Ikishima",
        img: "midari.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirari Momobami",
        img: "momobami.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Reina Nanami",
        img: "reina.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hibiki Himekawa",
        img: "hibiki.png",
        opts: {
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Ayako Morikawa",
        img: "morikawa.png",
        opts: {
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Kazuha Saionji",
        img: "kazuha.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nian",
        img: "nian.png",
        opts: {
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Wanjirou",
        img: "wanjirou.png",
        opts: {
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Natsuki Shinomiya",
        img: "natsuki.png",
        opts: {
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Sora Ichinose",
        img: "sora.png",
        opts: {
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Hideki Akechi",
        img: "hideki.png",
        opts: {
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Osamu Saitou",
        img: "samu.png",
        opts: {
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Joseph",
        img: "joseph.png",
        opts: {
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ein",
        img: "ein.png",
        opts: {
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Zan Tsukimi",
        img: "zan.png",
        opts: {
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ren Kisaragi",
        img: "ren.png",
        opts: {
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Usumi Ishihara",
        img: "usumi.png",
        opts: {
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Qi Xi",
        img: "qixi.png",
        opts: {
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Ryan",
        img: "ryan.png",
        opts: {
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Natsuhiko Takigawa",
        img: "takegawa.png",
        opts: {
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Iwao Washizu",
        img: "washizu.png",
        opts: {
            gender: ["male"],
            loli: false
        }
    }
];