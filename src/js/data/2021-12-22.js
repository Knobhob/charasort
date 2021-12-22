dataSetVersion = "2021-12-22"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options= [
    {
        name: "Remove males",
        key: "male",
        tooltip: "Check this if you don't want to include male characters.",
        checked: false
    },
    {
        name: "Remove lolis/shotas",
        key: "loli",
        tooltip: "Check this if you don't want to include loli/shota characters.",
        checked: false
    }
];

dataset[dataSetVersion].characterData = [
    {
        name: "A-37",
        img: "a37.png",
        opts: {
            male: true,
            loli: false
        }
    },
    {
        name: "Shigeru Akagi",
        img: "akagi.png",
        opts: {
            male: true,
            loli: false
        }
    },
    {
        name: "Suzumiya Anju",
        img: "anju.png",
        opts: {
            male: false,
            loli: true
        }
    },
    {
        name: "Shiraishi Nana",
        img: "banana.png",
        opts: {
            male: false,
            loli: false
        }
    },
    {
        name: "Ichihime",
        img: "cat.png",
        opts: {
            male: false,
            loli: true
        }
    },
    {
        name: "Terasaki Chihori",
        img: "chihori.png",
        opts: {
            male: false,
            loli: false
        }
    },
    {
        name: "Mikami Chiori",
        img: "chiori.png",
        opts: {
            male: false,
            loli: true
        }
    }
];