dataSetVersion = "2022-02-23"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
        name: "Select outfits",
        key: "outfit",
        tooltip: "Select the outfits for characters you want to rank, uncheck this to enable all outfits.",
        checked: true,
        sub: [
            { name: "Base Outfit", key: "base"},
            { name: "Bond Outfit", key: "bond", checked: false},
            { name: "Swimsuits", key: "swimsuit", checked: false},
            { name: "Christmas Outfits", key: "christmas", checked: false},
            { name: "New Year Outfits", key: "newyear", checked: false},
            { name: "Halloween Outfits", key: "halloween", checked: false},
            { name: "Festival Outfits", key: "festival", checked: false},
            { name: "School Outfits", key: "school", checked: false},
            { name: "Miscellaneous Outfits", key: "misc", checked: false}
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
        name: "Ichihime",
        img: "Ichihime base.png",
        fullbody: "Ichihime base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Ichihime (Bonded)",
        img: "Ichihime bond.png",
        fullbody: "Ichihime bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Beach Party Ichihime",
        img: "Ichihime swimsuit.png",
        fullbody: "Ichihime swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Ichihime (New Year)",
        img: "Ichihime new year.png",
        fullbody: "Ichihime new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Invincible Ichihime",
        img: "Ichihime invincible.png",
        fullbody: "Ichihime invincible.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Miki Nikaidou",
        img: "Miki base.png",
        fullbody: "Miki base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Miki Nikaidou (Bonded)",
        img: "Miki bond.png",
        fullbody: "Miki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Miki Nikaidou (Halloween)",
        img: "Miki halloween.png",
        fullbody: "Miki halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Spring Celebration Miki Nikaidou",
        img: "Miki festival.png",
        fullbody: "Miki festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kana Fujita",
        img: "Kana base.png",
        fullbody: "Kana base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kana Fujita (Bonded)",
        img: "Kana bond.png",
        fullbody: "Kana bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kana Fujita (Christmas)",
        img: "Kana christmas.png",
        fullbody: "Kana christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kana Fujita (Halloween)",
        img: "Kana halloween.png",
        fullbody: "Kana halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Chiori Mikami",
        img: "Chiori base.png",
        fullbody: "Chiori base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Chiori Mikami (Bonded)",
        img: "Chiori bond.png",
        fullbody: "Chiori bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Chiori Mikami (Christmas)",
        img: "Chiori christmas.png",
        fullbody: "Chiori christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Chiori Mikami (Swimsuit)",
        img: "Chiori swimsuit.png",
        fullbody: "Chiori swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Sweet Refreshment Chiori Mikami",
        img: "Chiori sweets.png",
        fullbody: "Chiori sweets.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Mai Aihara",
        img: "Mai base.png",
        fullbody: "Mai base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Mai Aihara (Bonded)",
        img: "Mai bond.png",
        fullbody: "Mai bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Beach Party Mai Aihara",
        img: "Mai swimsuit.png",
        fullbody: "Mai swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Wonderful Youth Mai Aihara",
        img: "Mai new year.png",
        fullbody: "Mai new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nadeshiko",
        img: "Nadeshiko base.png",
        fullbody: "Nadeshiko base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nadeshiko (Bonded)",
        img: "Nadeshiko bond.png",
        fullbody: "Nadeshiko bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Beach Party Nadeshiko",
        img: "Nadeshiko swimsuit.png",
        fullbody: "Nadeshiko swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Auspicious Snow Nadeshiko",
        img: "Nadeshiko new year.png",
        fullbody: "Nadeshiko new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yui Yagi",
        img: "Yui base.png",
        fullbody: "Yui base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yui Yagi (Bonded)",
        img: "Yui bond.png",
        fullbody: "Yui bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yui Yagi (Christmas)",
        img: "Yui christmas.png",
        fullbody: "Yui christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yui Yagi (Halloween)",
        img: "Yui halloween.png",
        fullbody: "Yui halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "MoonlightWaltz Yui Yagi",
        img: "Yui moonlightwaltz.png",
        fullbody: "Yui moonlightwaltz.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Riu Kujou",
        img: "Riu base.png",
        fullbody: "Riu base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Riu Kujou (Bonded)",
        img: "Riu bond.png",
        fullbody: "Riu bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Beach Party Riu Kujou",
        img: "Riu swimsuit.png",
        fullbody: "Riu swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Riu Kujou (New Year)",
        img: "Riu new year.png",
        fullbody: "Riu new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Xenia",
        img: "Xenia base.png",
        fullbody: "Xenia base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Xenia (Bonded)",
        img: "Xenia bond.png",
        fullbody: "Xenia bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Xenia (Halloween)",
        img: "Xenia halloween.png",
        fullbody: "Xenia halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Beach Party Xenia",
        img: "Xenia swimsuit.png",
        fullbody: "Xenia swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaavi",
        img: "Kaavi base.png",
        fullbody: "Kaavi base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaavi (Bonded)",
        img: "Kaavi bond.png",
        fullbody: "Kaavi bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaavi (Swimsuit)",
        img: "Kaavi swimsuit.png",
        fullbody: "Kaavi swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Natsuki Shinomiya",
        img: "Natsuki base.png",
        fullbody: "Natsuki base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Natsuki Shinomiya (Bonded)",
        img: "Natsuki bond.png",
        fullbody: "Natsuki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Natsuki Shinomiya (Halloween)",
        img: "Natsuki halloween.png",
        fullbody: "Natsuki halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Auspicious Snow Natsuki Shinomiya",
        img: "Natsuki new year.png",
        fullbody: "Natsuki new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Wanjirou",
        img: "Wanjirou base.png",
        fullbody: "Wanjirou base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Wanjirou (Bonded)",
        img: "Wanjirou bond.png",
        fullbody: "Wanjirou bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Wanjirou (Halloween)",
        img: "Wanjirou halloween.png",
        fullbody: "Wanjirou halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Sora Ichinose",
        img: "Sora base.png",
        fullbody: "Sora base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Sora Ichinose (Bonded)",
        img: "Sora bond.png",
        fullbody: "Sora bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Sora Ichinose (Christmas)",
        img: "Sora christmas.png",
        fullbody: "Sora christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Spring Homecoming Sora Ichinose",
        img: "Sora school.png",
        fullbody: "Sora school.png",
        opts: {
            outfit: ["school"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Hideki Akechi",
        img: "Hideki base.png",
        fullbody: "Hideki base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Hideki Akechi (Bonded)",
        img: "Hideki bond.png",
        fullbody: "Hideki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Hideki Akechi (Halloween)",
        img: "Hideki halloween.png",
        fullbody: "Hideki halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Hideki Akechi (Swimsuit)",
        img: "Hideki swimsuit.png",
        fullbody: "Hideki swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Keikumusume",
        img: "Keikumusume base.png",
        fullbody: "Keikumusume base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Keikumusume (Bonded)",
        img: "Keikumusume bond.png",
        fullbody: "Keikumusume bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Keikumusume (Swimsuit)",
        img: "Keikumusume swimsuit.png",
        fullbody: "Keikumusume swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sara",
        img: "Sara base.png",
        fullbody: "Sara base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sara (Bonded)",
        img: "Sara bond.png",
        fullbody: "Sara bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sara (New Year)",
        img: "Sara new year.png",
        fullbody: "Sara new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Spring Homecoming Sara",
        img: "Sara school.png",
        fullbody: "Sara school.png",
        opts: {
            outfit: ["school"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hana Ninomiya",
        img: "Hana base.png",
        fullbody: "Hana base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hana Ninomiya (Bonded)",
        img: "Hana bond.png",
        fullbody: "Hana bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Spring Celebration Hana Ninomiya",
        img: "Hana festival.png",
        fullbody: "Hana festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hana Ninomiya (Swimsuit)",
        img: "Hana swimsuit.png",
        fullbody: "Hana swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nana Shiraishi",
        img: "Nana base.png",
        fullbody: "Nana base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nana Shiraishi (Bonded)",
        img: "Nana bond.png",
        fullbody: "Nana bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nana Shiraishi (Swimsuit)",
        img: "Nana swimsuit.png",
        fullbody: "Nana swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hinata Takanashi",
        img: "Hinata base.png",
        fullbody: "Hinata base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Hinata Takanashi (Bonded)",
        img: "Hinata bond.png",
        fullbody: "Hinata bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sweet Refreshment Hinata Takanashi",
        img: "Hinata sweets.png",
        fullbody: "Hinata sweets.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Firework Date Hinata Takanashi",
        img: "Hinata festival.png",
        fullbody: "Hinata festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Haruna Igarashi",
        img: "Haruna base.png",
        fullbody: "Haruna base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Haruna Igarashi (Bonded)",
        img: "Haruna bond.png",
        fullbody: "Haruna bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Haruna Igarashi (Swimsuit)",
        img: "Haruna swimsuit.png",
        fullbody: "Haruna swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Spring Homecoming Haruna Igarashi",
        img: "Haruna school.png",
        fullbody: "Haruna school.png",
        opts: {
            outfit: ["school"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Anju Suzumiya",
        img: "Anju base.png",
        fullbody: "Anju base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Anju Suzumiya (Bonded)",
        img: "Anju bond.png",
        fullbody: "Anju bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Bedtime Stories Anju Suzumiya",
        img: "Anju pyjama.png",
        fullbody: "Anju pyjama.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Firework Date Anju Suzumiya",
        img: "Anju festival.png",
        fullbody: "Anju festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Joseph",
        img: "Joseph base.png",
        fullbody: "Joseph base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Joseph (Bonded)",
        img: "Joseph bond.png",
        fullbody: "Joseph bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Joseph (New Year)",
        img: "Joseph new year.png",
        fullbody: "Joseph new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Osamu Saitou",
        img: "Osamu base.png",
        fullbody: "Osamu base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Osamu Saitou (Bonded)",
        img: "Osamu bond.png",
        fullbody: "Osamu bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Firework Date Osamu Saitou",
        img: "Osamu festival.png",
        fullbody: "Osamu festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Sawako Kitami",
        img: "Sawako base.png",
        fullbody: "Sawako base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sawako Kitami (Bonded)",
        img: "Sawako bond.png",
        fullbody: "Sawako bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sawako Kitami (Christmas)",
        img: "Sawako christmas.png",
        fullbody: "Sawako christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "MoonlightWaltz Sawako Kitami",
        img: "Sawako moonlightwaltz.png",
        fullbody: "Sawako moonlightwaltz.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Ein",
        img: "Ein base.png",
        fullbody: "Ein base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ein (Bonded)",
        img: "Ein bond.png",
        fullbody: "Ein bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ein (Swimsuit)",
        img: "Ein swimsuit.png",
        fullbody: "Ein swimsuit.png",
        opts: {
            outfit: ["swimsuit"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Momo Hina",
        img: "Momo base.png",
        fullbody: "Momo base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Momo Hina (Bonded)",
        img: "Momo bond.png",
        fullbody: "Momo bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Wonderful Youth Momo Hina",
        img: "Momo new year.png",
        fullbody: "Momo new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Zan Tsukimi",
        img: "Zan base.png",
        fullbody: "Zan base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Zan Tsukimi (Bonded)",
        img: "Zan bond.png",
        fullbody: "Zan bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Spring Homecoming Zan Tsukimi",
        img: "Zan school.png",
        fullbody: "Zan school.png",
        opts: {
            outfit: ["school"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Kirara Fujimoto",
        img: "Kirara base.png",
        fullbody: "Kirara base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirara Fujimoto (Bonded)",
        img: "Kirara bond.png",
        fullbody: "Kirara bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirara Fujimoto (New Year)",
        img: "Kirara new year.png",
        fullbody: "Kirara new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaguyahime",
        img: "Kaguyahime base.png",
        fullbody: "Kaguyahime base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kaguyahime (Bonded)",
        img: "Kaguyahime bond.png",
        fullbody: "Kaguyahime bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Snowy Night Whisper Kaguyahime",
        img: "Kaguyahime christmas.png",
        fullbody: "Kaguyahime christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Festive Aroma Kaguyahime",
        img: "Kaguyahime new year.png",
        fullbody: "Kaguyahime new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Ren Kisaragi",
        img: "Ren base.png",
        fullbody: "Ren base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ren Kisaragi (Bonded)",
        img: "Ren bond.png",
        fullbody: "Ren bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ren Kisaragi (Halloween)",
        img: "Ren halloween.png",
        fullbody: "Ren halloween.png",
        opts: {
            outfit: ["halloween"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Usumi Ishihara",
        img: "Usumi base.png",
        fullbody: "Usumi base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Usumi Ishihara (Bonded)",
        img: "Usumi bond.png",
        fullbody: "Usumi bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "White Hymn Usumi Ishihara",
        img: "Usumi christmas.png",
        fullbody: "Usumi christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Eliisa",
        img: "Eliisa base.png",
        fullbody: "Eliisa base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Eliisa (Bonded)",
        img: "Eliisa bond.png",
        fullbody: "Eliisa bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Bedtime Stories Eliisa",
        img: "Eliisa pyjama.png",
        fullbody: "Eliisa pyjama.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Festive Aroma Eliisa",
        img: "Eliisa new year.png",
        fullbody: "Eliisa new year.png",
        opts: {
            outfit: ["newyear"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Chihori Terasaki",
        img: "Chihori base.png",
        fullbody: "Chihori base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Chihori Terasaki (Bonded)",
        img: "Chihori bond.png",
        fullbody: "Chihori bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Saki Miyanaga",
        img: "Saki base.png",
        fullbody: "Saki base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Saki Miyanaga (Bonded)",
        img: "Saki bond.png",
        fullbody: "Saki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Saki Miyanaga (Collab)",
        img: "Saki collab.png",
        fullbody: "Saki collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nodoka Haramura",
        img: "Nodoka base.png",
        fullbody: "Nodoka base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nodoka Haramura (Bonded)",
        img: "Nodoka bond.png",
        fullbody: "Nodoka bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nodoka Haramura (Collab)",
        img: "Nodoka collab.png",
        fullbody: "Nodoka collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Koromo Amae",
        img: "Koromo base.png",
        fullbody: "Koromo base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Koromo Amae (Bonded)",
        img: "Koromo bond.png",
        fullbody: "Koromo bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Koromo Amae (Collab)",
        img: "Koromo collab.png",
        fullbody: "Koromo collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Teru Miyanaga",
        img: "Teru base.png",
        fullbody: "Teru base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Teru Miyanaga (Bonded)",
        img: "Teru bond.png",
        fullbody: "Teru bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Teru Miyanaga (Collab)",
        img: "Teru collab.png",
        fullbody: "Teru collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Fu Ji",
        img: "Fu Ji base.png",
        fullbody: "Fu Ji base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Fu Ji (Bonded)",
        img: "Fu Ji bond.png",
        fullbody: "Fu Ji bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Qi Xi",
        img: "Qi Xi base.png",
        fullbody: "Qi Xi base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Qi Xi (Bonded)",
        img: "Qi Xi bond.png",
        fullbody: "Qi Xi bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: true
        }
    },
    {
        name: "Yumeko Jabami",
        img: "Yumeko base.png",
        fullbody: "Yumeko base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yumeko Jabami (Bonded)",
        img: "Yumeko bond.png",
        fullbody: "Yumeko bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Yumeko Jabami (Collab)",
        img: "Yumeko collab.png",
        fullbody: "Yumeko collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Mary Saotome",
        img: "Mary base.png",
        fullbody: "Mary base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Mary Saotome (Bonded)",
        img: "Mary bond.png",
        fullbody: "Mary bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Mary Saotome (Collab)",
        img: "Mary collab.png",
        fullbody: "Mary collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Midari Ikishima",
        img: "Midari base.png",
        fullbody: "Midari base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Midari Ikishima (Bonded)",
        img: "Midari bond.png",
        fullbody: "Midari bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Midari Ikishima (Collab)",
        img: "Midari collab.png",
        fullbody: "Midari collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirari Momobami",
        img: "Kirari base.png",
        fullbody: "Kirari base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirari Momobami (Bonded)",
        img: "Kirari bond.png",
        fullbody: "Kirari bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kirari Momobami (Collab)",
        img: "Kirari collab.png",
        fullbody: "Kirari collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Reina Nanami",
        img: "Reina base.png",
        fullbody: "Reina base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Reina Nanami (Bonded)",
        img: "Reina bond.png",
        fullbody: "Reina bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "White Hymn Reina Nanami",
        img: "Reina christmas.png",
        fullbody: "Reina christmas.png",
        opts: {
            outfit: ["christmas"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "A-37",
        img: "A-37 base.png",
        fullbody: "A-37 base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "A-37 (Bonded)",
        img: "A-37 bond.png",
        fullbody: "A-37 bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Firework Date A-37",
        img: "A-37 festival.png",
        fullbody: "A-37 festival.png",
        opts: {
            outfit: ["festival"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Hibiki Himekawa",
        img: "Hibiki base.png",
        fullbody: "Hibiki base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Hibiki Himekawa (Bonded)",
        img: "Hibiki bond.png",
        fullbody: "Hibiki bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Ryan",
        img: "Ryan base.png",
        fullbody: "Ryan base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ryan (Bonded)",
        img: "Ryan bond.png",
        fullbody: "Ryan bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Ayako Morikawa",
        img: "Ayako base.png",
        fullbody: "Ayako base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Ayako Morikawa (Bonded)",
        img: "Ayako bond.png",
        fullbody: "Ayako bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: true
        }
    },
    {
        name: "Natsuhiko Takigawa",
        img: "Natsuhiko base.png",
        fullbody: "Natsuhiko base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Natsuhiko Takigawa (Bonded)",
        img: "Natsuhiko bond.png",
        fullbody: "Natsuhiko bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Akagi Shigeru",
        img: "Akagi base.png",
        fullbody: "Akagi base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Akagi Shigeru (Bonded)",
        img: "Akagi bond.png",
        fullbody: "Akagi bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Akagi Shigeru (Collab)",
        img: "Akagi collab.png",
        fullbody: "Akagi collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Washizu Iwao",
        img: "Washizu base.png",
        fullbody: "Washizu base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Washizu Iwao (Bonded)",
        img: "Washizu bond.png",
        fullbody: "Washizu bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Washizu Iwao (Collab)",
        img: "Washizu collab.png",
        fullbody: "Washizu collab.png",
        opts: {
            outfit: ["misc"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Kazuha Saionji",
        img: "Kazuha base.png",
        fullbody: "Kazuha base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Kazuha Saionji (Bonded)",
        img: "Kazuha bond.png",
        fullbody: "Kazuha bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nian",
        img: "nian.png",
        fullbody: "nian.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nanaha Onodera",
        img: "Nanaha base.png",
        fullbody: "Nanaha base.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Nanaha Onodera (Bonded)",
        img: "Nanaha bond.png",
        fullbody: "Nanaha bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["female"],
            loli: false
        }
    },
    {
        name: "Sammir",
        img: "Sammir base.png",
        fullbody: "Sammir base.png",
        opts: {
            outfit: ["base"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Sammir (Bonded)",
        img: "Sammir bond.png",
        fullbody: "Sammir bond.png",
        opts: {
            outfit: ["bond"],
            gender: ["male"],
            loli: false
        }
    },
    {
        name: "Tiger Nian",
        img: "Tiger Nian.png",
        fullbody: "Tiger Nian.png",
        opts: {
            outfit: ["base"],
            gender: ["female"],
            loli: false
        }
    }
];