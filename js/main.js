const names = {
    first: [
        "James",
        "Robert",
        "John",
        "Michael",
        "David",
        "William",
        "Richard",
        "Joseph",
        "Thomas",
        "Charles",
        "Christopher",
        "Daniel",
        "Matthew",
        "Anthony",
        "Mark",
        "Donald",
        "Steven",
        "Paul",
        "Andrew",
        "Joshua",
        "Kenneth",
        "Kevin",
        "Brian",
        "George",
        "Timothy",
        "Ronald",
        "Edward",
        "Jason",
        "Jeffrey",
        "Ryan",
        "Jacob",
        "Gary",
        "Nicholas",
        "Eric",
        "Jonathan",
        "Stephen",
        "Larry",
        "Justin",
        "Scott",
        "Brandon",
        "Benjamin",
        "Samuel",
        "Gregory",
        "Alexander",
        "Frank",
        "Patrick",
        "Raymond",
        "Jack",
        "Dennis",
        "Jerry",
        "Tyler",
        "Aaron",
        "Jose",
        "Adam",
        "Nathan",
        "Henry",
        "Douglas",
        "Zachary",
        "Peter",
        "Kyle",
        "Ethan",
        "Walter",
        "Noah",
        "Jeremy",
        "Christian",
        "Keith",
        "Roger",
        "Terry",
        "Gerald",
        "Harold",
        "Sean",
        "Austin",
        "Carl",
        "Arthur",
        "Lawrence",
        "Dylan",
        "Jesse",
        "Jordan",
        "Bryan",
        "Billy",
        "Joe",
        "Bruce",
        "Gabriel",
        "Logan",
        "Albert",
        "Willie",
        "Alan",
        "Juan",
        "Wayne",
        "Elijah",
        "Randy",
        "Roy",
        "Vincent",
        "Ralph",
        "Eugene",
        "Russell",
        "Bobby",
        "Mason",
        "Philip",
        "Louis"
    ],

    last: [
        "SMITH",
        "JOHNSON",
        "WILLIAMS",
        "BROWN",
        "JONES",
        "GARCIA",
        "MILLER",
        "DAVIS",
        "RODRIGUEZ",
        "MARTINEZ",
        "HERNANDEZ",
        "LOPEZ",
        "GONZALEZ",
        "WILSON",
        "ANDERSON",
        "THOMAS",
        "TAYLOR",
        "MOORE",
        "JACKSON",
        "MARTIN",
        "LEE",
        "PEREZ",
        "THOMPSON",
        "WHITE",
        "HARRIS",
        "SANCHEZ",
        "CLARK",
        "RAMIREZ",
        "LEWIS",
        "ROBINSON",
        "WALKER",
        "YOUNG",
        "ALLEN",
        "KING",
        "WRIGHT",
        "SCOTT",
        "TORRES",
        "NGUYEN",
        "HILL",
        "FLORES",
        "GREEN",
        "ADAMS",
        "NELSON",
        "BAKER",
        "HALL",
        "RIVERA",
        "CAMPBELL",
        "MITCHELL",
        "CARTER",
        "ROBERTS",
        "GOMEZ",
        "PHILLIPS",
        "EVANS",
        "TURNER",
        "DIAZ",
        "PARKER",
        "CRUZ",
        "EDWARDS",
        "COLLINS",
        "REYES",
        "STEWART",
        "MORRIS",
        "MORALES",
        "MURPHY",
        "COOK",
        "ROGERS",
        "GUTIERREZ",
        "ORTIZ",
        "MORGAN",
        "COOPER",
        "PETERSON",
        "BAILEY",
        "REED",
        "KELLY",
        "HOWARD",
        "RAMOS",
        "KIM",
        "COX",
        "WARD",
        "RICHARDSON",
        "WATSON",
        "BROOKS",
        "CHAVEZ",
        "WOOD",
        "JAMES",
        "BENNETT",
        "GRAY",
        "MENDOZA",
        "RUIZ",
        "HUGHES",
        "PRICE",
        "ALVAREZ",
        "CASTILLO",
        "SANDERS",
        "PATEL",
        "MYERS",
        "LONG",
        "ROSS",
        "FOSTER",
        "JIMENEZ"
    ]
}

let Game = {
    cookies: 0,
    cps: 0,
    cpc: 1,
    name: "",
    buildings: [
        {
            name: "Cursor",
            count: 0,
            price: 15,
            production: 0.2,
            description: "Extra finger"
        },
        
        {
            name: "Grandma",
            count: 0,
            price: 100,
            production: 1,
            description: "A nice Grandma to bake cookies for you!"
        },
        
        {
            name: "Farm",
            count: 0,
            price: 1100,
            production: 8,
            description: "Farms that grow cookies!"
        },
        
        {
            name: "Mine",
            count: 0,
            price: 12000,
            production: 47,
            description: "There are lots of chocolate vains underground."
        },
        
        {
            name: "Factory",
            count: 0,
            price: 130000,
            production: 260,
            description: "A huge factory to mass produce cookies for you"
        }
    ],

    upgrades: [
        {
            name: "Double Finger",
            code_name: "double-finger",
            image: "./img/upgrades/fingers/blue.png",
            price: 200,
            effects: [
                "Game.cpc *= 2;"
            ],
            description: "The more fingers, the more cookies",
            requirements: {
                "cursor": 1
            },
            activated: false,
            used: false
        },
        {
            name: "Index Finger",
            code_name: "index-finger",
            image: "./img/upgrades/fingers/pink.png",
            price: 500,
            effects: [
                "Game.cpc *= 2;"
            ],
            description: "An index finger to help you with your journey!",
            requirements: {
                "cursor": 10
            },
            activated: false,
            used: false
        },
        {
            name: "Smoother Pins",
            code_name: "smoother-pins",
            image: "./img/upgrades/rolling_pins/blue.png",
            price: 300,
            effects: [
                "Game.buildings[1].production *= 2;"
            ],
            description: "Smoother pins means better cookies",
            requirements: {
                "grandma": 1
            },
            activated: false,
            used: false
        },
        {
            name: "Lubricated Dentures",
            code_name: "lubricated-tentures",
            image: "./img/upgrades/rolling_pins/pink.png",
            price: 300,
            effects: [
                "Game.buildings[1].production *= 2;"
            ],
            description: "All the better to comsume cookies with!",
            requirements: {
                "grandma": 10
            },
            activated: false,
            used: false
        },
        {
            name: "Stronger Rakes",
            code_name: "stronger-rakes",
            image: "./img/upgrades/rakes/blue.png",
            price: 800,
            effects: [
                "Game.buildings[2].production *= 2;"
            ],
            description: "Rakes are no good when they are broken",
            requirements: {
                "farm": 1
            },
            activated: false,
            used: false
        },
        {
            name: "GMOs",
            code_name: "gmos",
            image: "./img/upgrades/rakes/pink.png",
            price: 1500,
            effects: [
                "Game.buildings[2].production *= 2;"
            ],
            description: "A noticable increase of production",
            requirements: {
                "farm": 10
            },
            activated: false,
            used: false
        },
        {
            name: "Deeper Mines",
            code_name: "deeper-mines",
            image: "./img/upgrades/pickaxes/blue.png",
            price: 9000,
            effects: [
                "Game.buildings[3].production *= 2;"
            ],
            description: "The deeper the mine, the more likely you are to find a vain of chocolate",
            requirements: {
                "mine": 1
            },
            activated: false,
            used: false
        },
        {
            name: "Tungsten Plated Pickaxes",
            code_name: "tungsten-plated-pickaxes",
            image: "./img/upgrades/pickaxes/pink.png",
            price: 14500,
            effects: [
                "Game.buildings[3].production *= 2;"
            ],
            description: "When in doubt, plate your pickaxe with tungsten!",
            requirements: {
                "mine": 10
            },
            activated: false,
            used: false
        },
        {
            name: "Child Labor",
            code_name: "child-labor",
            image: "./img/upgrades/gears/blue.png",
            price: 95000,
            effects: [
                "Game.buildings[4].production *= 2;"
            ],
            description: "Let's get those children working!",
            requirements: {
                "factory": 1
            },
            activated: false,
            used: false
        },
        {
            name: "Mechanical Engineers",
            code_name: "mech-engineers",
            image: "./img/upgrades/gears/pink.png",
            price: 155000,
            effects: [
                "Game.buildings[4].production *= 2;"
            ],
            description: "Machines are good at making cookies. We just need mechanical engeineers to make them.",
            requirements: {
                "factory": 10
            },
            activated: false,
            used: false
        }
    ]
}

// Functions

const shortenNum = (num) => {
    output = '';
    if (num >= 1000000000000000000000000000000000000000 && output == '') {
        leMath.round(num/ 1000000000000000000000000000000000000000)
        output = `${divide.toFixed(3)} Duodecillion`
    }

    if (num >= 1000000000000000000000000000000000000 && output == '') {
        let divide = num / 1000000000000000000000000000000000000
        output = `${divide.toFixed(3)} Undecillion`
    }

    if (num >= 1000000000000000000000000000000000 && output == '') {
        let divide = num / 1000000000000000000000000000000000
        output = `${divide.toFixed(3)} Decillion`
    }

    if (num >= 1000000000000000000000000000000 && output == '') {
        let divide = num / 1000000000000000000000000000000
        output = `${divide.toFixed(3)} Nonillion`
    }

    if (num >= 1000000000000000000000000000 && output == '') {
        let divide = num / 1000000000000000000000000000
        output = `${divide.toFixed(3)} Octillion`
    }
    
    if (num >= 1000000000000000000000000 && output == '') {
        let divide = num / 1000000000000000000000000
        output = `${divide.toFixed(3)} Septillion`
    }

    if (num >= 1000000000000000000000 && output == '') {
        let divide = num / 1000000000000000000000
        output = `${divide.toFixed(3)} Sextillion`
    }

    if (num >= 1000000000000000000 && output == '') {
        let divide = num / 1000000000000000000
        output = `${divide.toFixed(3)} Quintillion`
    }

    if (num >= 1000000000000000 && output == '') {
        let divide = num / 1000000000000000
        output = `${divide.toFixed(3)} Quadrillion`
    }

    if (num >= 1000000000000 && output == '') {
        let divide = num / 1000000000000
        output = `${divide.toFixed(3)} Trillion`
    }

    if (num >= 1000000000 && output == '') {
        let divide = num / 1000000000
        output = `${divide.toFixed(3)} Billion`
    }

    if (num >= 1000000 && output == '') {
        let divide = num / 1000000
        output = `${divide.toFixed(3)} Million`
    }

    if (output == '') {
        output = `${num}`;
    }

    return output;
}

const buildingsRender = () => {
    let destStore = document.querySelector('#store');
    let destPurch = document.querySelector('#purchased-items');
    for (building of Game.buildings) {
        destStore.innerHTML += (
            `
            <div class="store-feature" id="store-feature-${building.name.toLowerCase()}" onclick="getItem('${building.name.toLowerCase()}'); updateData();">
                <div class="feature-icon">
                    <img src="./img/icons/${building.name.toLowerCase()}.png" alt="">
                </div>

                <div class="name-price">
                    <h1>${building.name}</h1>
                    <div class="item-price">
                        <img src="./img/icons/cookie.png" alt="">
                        <span id="building-price-${building.name.toLowerCase()}">${building.price}</span>
                    </div>
                </div>

                <div class="item-count">
                    <h2 id="building-count-${building.name.toLowerCase()}"></h2>
                </div>
            </div>
            `
        );

        destPurch.innerHTML += (
            `
            <div class="purchased-items" id="purchased-${building.name.toLowerCase()}">

            </div>
            `
        );
    }
}

const capitalize = (name) => {
    let output = "";
    output += name[0].toUpperCase();
    for (let i = 1; i < name.length; i++) {
        output += name[i].toLowerCase();
    }

    return output;
}

const getItem = (item) => {
    for (let building of Game.buildings) {
        if (building.name == capitalize(item) && Game.cookies >= building.price) {
            building.count += 1;

            // Display item
            document.querySelector(`#purchased-${building.name.toLowerCase()}`).innerHTML += (
                `
                <div class="pi-icon">
                    <img src="./img/icons/${building.name.toLowerCase()}.png" alt="">
                </div>
                `
            );

            // Take cookies on buy
            Game.cookies = Math.round(Game.cookies - building.price);

            // Increase cost
            building.price += building.price * 0.2
        
            break;
        }
    }
}

const clickCookie = () => {
    Game.cookies += Game.cpc;
    updateData();

    // let marginTop = Math.floor(Math.random() * 100)
    // let marginLeft = Math.floor(Math.random() * 100)
    // document.querySelector('#cookie-click-display').innerHTML += (
    //     `
    //     <span class="click-display" style="margin-left: ${marginLeft}%; margin-top: ${marginTop}%; width: 100vw; height: 100vh position: absolute; display: flex; justify-content: left; opacity: 1;" onmouseover="var className = 'moved-up'; hasClass = (' ' + this.className + ' ').indexOf(' ' + className+ ' ') > -1; this.classList.add(className); if (!hasClass) {this.style.width = 'auto'; this.style.height = 'auto'; setTimeout(() => this.remove(), 3000); let marginLoop = 0; const marginInterval = setInterval(() => {marginLoop += 1; this.style.marginTop = \`\${parseInt(this.style.marginTop) - 1}px\`; if (marginLoop >= 300) {clearInterval(marginInterval)}}, 10); setTimeout(() => {let opacityCount = 0; const opacity = setInterval(() => {opacityCount += 1; this.style.opacity = \`\${parseFloat(this.style.opacity) - 0.1}\`; if (opacityCount >= 10) {clearInterval(opacity)}}, 100)}, 1500);}">${Game.cpc}</span>
    //     `
    // )
}

const updateData = () => {
    document.querySelector('#cookies-count').innerText = shortenNum(Math.round(Game.cookies));
    document.querySelector('#cps').innerText = shortenNum(Game.cps);

    Game.cps = 0
    for (let building of Game.buildings) {
        if (document.querySelector(`#building-price-${building.name.toLowerCase()}`)) {
            document.querySelector(`#building-price-${building.name.toLowerCase()}`).innerText = shortenNum(Math.round(building.price));
            document.querySelector(`#building-count-${building.name.toLowerCase()}`).innerText = building.count;

            // CPS
            Game.cps += building.production * building.count;

            // Light/Darken buildings
            if (Game.cookies >= building.price) {
                document.querySelector(`#store-feature-${building.name.toLowerCase()}`).classList.remove('store-feature-disabled')
            } else {
                document.querySelector(`#store-feature-${building.name.toLowerCase()}`).classList.add('store-feature-disabled')
            }

        }
    }

    // Upgrades
    let upgradesCount = -1;
    for (let upgrade of Game.upgrades) {
        upgradesCount += 1;
        // Effect
        let effects = "";
        for (let effect of upgrade.effects) {
            effects += effect;
        }

        if (upgrade.activated !== true && upgrade.used !== true) {
            // Building count
            for (let building of Game.buildings) {
                if (upgrade.requirements[`${building.name.toLowerCase()}`]) {
                    if (building.count >= upgrade.requirements[`${building.name.toLowerCase()}`]) {
                        upgrade.activated = true;
                        document.querySelector('#upgrades').innerHTML += (
                            `
                            <div class="upgrade" id="upgrade-${upgrade.code_name}" onclick="if (Game.cookies >= ${upgrade.price}) {Game.upgrades[${upgradesCount}].used = true; document.querySelector('#upgrade-${upgrade.code_name}').remove(); ${effects}; Game.cookies -= ${upgrade.price}; updateData();}">
                                <img src="${upgrade.image}" alt="">
                            </div>
                            `
                        )
                    }
                    
                    break;
                }
            }

        }

        if (upgrade.activated == true && upgrade.used == false) {
            // Light/Darken buildings
            if (Game.cookies >= upgrade.price) {
                document.querySelector(`#upgrade-${upgrade.code_name}`).classList.remove('upgrade-disabled')
            } else {
                document.querySelector(`#upgrade-${upgrade.code_name}`).classList.add('upgrade-disabled')
            }
        }
    }
}

const randomName = (fName, lName) => {

    let firstName = fName[Math.floor(Math.random() * fName.length)];
    let lastName = lName[Math.floor(Math.random() * lName.length)];

    let returnFirstName = capitalize(firstName);
    let returnLastName = capitalize(lastName);

    console.log(`${returnFirstName} ${returnLastName}`);
    return `${returnFirstName} ${returnLastName}`;
}

const setName = (name) => {
    Game.name = name;
    document.querySelector('#bakery-name').innerText = Game.name;
}

const refreshLoop = () => {
    setInterval(
        updateData,
        200
    )
}

const gainLoop = () => {
    function gainCookies() {
        // Production rate
        Game.cookies += Game.cps / 100;
    }

    setInterval(
        gainCookies,
        10
    )
}


document.querySelector('#cookie-clickable').addEventListener('mouseup', () => {
    clickCookie();
})