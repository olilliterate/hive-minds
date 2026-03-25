const questions = [

//MCQ

{
  id: 1,
  type: "mcq",
  question_body: "What is the capital of France?",
  answer: "Paris",
  prompt_one: "Paris",
  prompt_two: "Rome",
  prompt_three: "Madrid",
  prompt_four: "Berlin"
},
{
  id: 2,
  type: "mcq",
  question_body: "Which continent is Nigeria in?",
  answer: "Africa",
  prompt_one: "Asia",
  prompt_two: "Europe",
  prompt_three: "Africa",
  prompt_four: "Australia"
},
{
  id: 3,
  type: "mcq",
  question_body: "Which is a renewable energy source?",
  answer: "Wind",
  prompt_one: "Coal",
  prompt_two: "Oil",
  prompt_three: "Gas",
  prompt_four: "Wind"
},
{
  id: 4,
  type: "mcq",
  question_body: "Which ocean is the largest?",
  answer: "Pacific Ocean",
  prompt_one: "Atlantic Ocean",
  prompt_two: "Indian Ocean",
  prompt_three: "Pacific Ocean",
  prompt_four: "Arctic Ocean"
},
{
  id: 5,
  type: "mcq",
  question_body: "Which country is in Europe?",
  answer: "Germany",
  prompt_one: "Brazil",
  prompt_two: "Germany",
  prompt_three: "India",
  prompt_four: "China"
},
{
  id: 6,
  type: "mcq",
  question_body: "What is the capital of Japan?",
  answer: "Tokyo",
  prompt_one: "Seoul",
  prompt_two: "Beijing",
  prompt_three: "Tokyo",
  prompt_four: "Bangkok"
},
{
  id: 7,
  type: "mcq",
  question_body: "Which is a human feature?",
  answer: "City",
  prompt_one: "Mountain",
  prompt_two: "River",
  prompt_three: "City",
  prompt_four: "Forest"
},
{
  id: 8,
  type: "mcq",
  question_body: "Which is a natural feature?",
  answer: "River",
  prompt_one: "School",
  prompt_two: "Bridge",
  prompt_three: "River",
  prompt_four: "Road"
},
{
  id: 9,
  type: "mcq",
  question_body: "Which country is in Africa?",
  answer: "Kenya",
  prompt_one: "France",
  prompt_two: "Kenya",
  prompt_three: "USA",
  prompt_four: "Spain"
},
{
  id: 10,
  type: "mcq",
  question_body: "Which is the Equator?",
  answer: "0 degrees latitude",
  prompt_one: "90 degrees north",
  prompt_two: "0 degrees latitude",
  prompt_three: "45 degrees south",
  prompt_four: "180 degrees"
},
{
  id: 11,
  type: "mcq",
  question_body: "Which direction is opposite North?",
  answer: "South",
  prompt_one: "East",
  prompt_two: "West",
  prompt_three: "South",
  prompt_four: "Up"
},
{
  id: 12,
  type: "mcq",
  question_body: "Which is a desert?",
  answer: "Sahara",
  prompt_one: "Amazon",
  prompt_two: "Sahara",
  prompt_three: "Alps",
  prompt_four: "Thames"
},
{
  id: 13,
  type: "mcq",
  question_body: "Which continent is the UK in?",
  answer: "Europe",
  prompt_one: "Asia",
  prompt_two: "Europe",
  prompt_three: "Africa",
  prompt_four: "South America"
},
{
  id: 14,
  type: "mcq",
  question_body: "What do we use to find direction?",
  answer: "Compass",
  prompt_one: "Thermometer",
  prompt_two: "Compass",
  prompt_three: "Clock",
  prompt_four: "Camera"
},
{
  id: 15,
  type: "mcq",
  question_body: "Which is a river?",
  answer: "Nile",
  prompt_one: "Everest",
  prompt_two: "Nile",
  prompt_three: "Sahara",
  prompt_four: "Amazon rainforest"
},

// Odd one out


{
  id: 16,
  type: "odd",
  question_body: "Which is the odd one out? (continents)",
  answer: "France",
  prompt_one: "Africa",
  prompt_two: "Asia",
  prompt_three: "Europe",
  prompt_four: "France"
},
{
  id: 17,
  type: "odd",
  question_body: "Which is the odd one out? (UK countries)",
  answer: "Ireland",
  prompt_one: "England",
  prompt_two: "Scotland",
  prompt_three: "Wales",
  prompt_four: "Republic of Ireland"
},
{
  id: 18,
  type: "odd",
  question_body: "Which is the odd one out? (types of rainfall)",
  answer: "Evaporation",
  prompt_one: "Relief rainfall",
  prompt_two: "Convectional rainfall",
  prompt_three: "Frontal rainfall",
  prompt_four: "Evaporation"
},
{
  id: 19,
  type: "odd",
  question_body: "Which is the odd one out? (layers of the Earth)",
  answer: "Atmosphere",
  prompt_one: "Crust",
  prompt_two: "Mantle",
  prompt_three: "Core",
  prompt_four: "Atmosphere"
},
{
  id: 20,
  type: "odd",
  question_body: "Which is the odd one out? (map skills)",
  answer: "Temperature",
  prompt_one: "Latitude",
  prompt_two: "Longitude",
  prompt_three: "Grid reference",
  prompt_four: "Temperature"
},
{
  id: 21,
  type: "odd",
  question_body: "Which is the odd one out? (types of rock)",
  answer: "Water",
  prompt_one: "Igneous",
  prompt_two: "Sedimentary",
  prompt_three: "Metamorphic",
  prompt_four: "Water"
},
{
  id: 22,
  type: "odd",
  question_body: "Which is the odd one out? (weather elements)",
  answer: "Mountain",
  prompt_one: "Temperature",
  prompt_two: "Rainfall",
  prompt_three: "Wind",
  prompt_four: "Mountain"
},
{
  id: 23,
  type: "odd",
  question_body: "Which is the odd one out? (river features)",
  answer: "Crater",
  prompt_one: "Source",
  prompt_two: "Mouth",
  prompt_three: "Tributary",
  prompt_four: "Crater"
},
{
  id: 24,
  type: "odd",
  question_body: "Which is the odd one out? (human geography)",
  answer: "Volcano",
  prompt_one: "City",
  prompt_two: "Town",
  prompt_three: "Village",
  prompt_four: "Volcano"
},
{
  id: 25,
  type: "odd",
  question_body: "Which is the odd one out? (economic sectors)",
  answer: "Forest",
  prompt_one: "Primary",
  prompt_two: "Secondary",
  prompt_three: "Tertiary",
  prompt_four: "Forest"
},
{
  id: 26,
  type: "odd",
  question_body: "Which is the odd one out? (types of energy)",
  answer: "Coal",
  prompt_one: "Solar",
  prompt_two: "Wind",
  prompt_three: "Hydroelectric",
  prompt_four: "Coal"
},
{
  id: 27,
  type: "odd",
  question_body: "Which is the odd one out? (natural hazards)",
  answer: "City",
  prompt_one: "Earthquake",
  prompt_two: "Volcano",
  prompt_three: "Tsunami",
  prompt_four: "City"
},
{
  id: 28,
  type: "odd",
  question_body: "Which is the odd one out? (climate zones)",
  answer: "River",
  prompt_one: "Tropical",
  prompt_two: "Polar",
  prompt_three: "Temperate",
  prompt_four: "River"
},
{
  id: 29,
  type: "odd",
  question_body: "Which is the odd one out? (coastal features)",
  answer: "Mountain",
  prompt_one: "Cliff",
  prompt_two: "Beach",
  prompt_three: "Stack",
  prompt_four: "Mountain"
},
{
  id: 30,
  type: "odd",
  question_body: "Which is the odd one out? (map directions)",
  answer: "Compass",
  prompt_one: "North",
  prompt_two: "South",
  prompt_three: "East",
  prompt_four: "Compass"
},

//images

  {
    id: 31,
    type: "image",
    question_body: "Which image shows a meander in a river?",
    answer: "meander.jpg",
    prompt_one: "waterfall.jpg",
    prompt_two: "meander.jpg",
    prompt_three: "delta.jpg",
    prompt_four: "glacier.jpg"
  },
  {
    id: 32,
    type: "image",
    question_body: "Which image shows a river delta?",
    answer: "delta.jpg",
    prompt_one: "delta.jpg",
    prompt_two: "cliff.jpg",
    prompt_three: "waterfall.jpg",
    prompt_four: "mountain.jpg"
  },
  {
    id: 33,
    type: "image",
    question_body: "Which image shows a waterfall?",
    answer: "waterfall.jpg",
    prompt_one: "river_source.jpg",
    prompt_two: "waterfall.jpg",
    prompt_three: "delta.jpg",
    prompt_four: "coast.jpg"
  },
  {
    id: 34,
    type: "image",
    question_body: "Which image shows coastal cliffs?",
    answer: "cliff.jpg",
    prompt_one: "beach.jpg",
    prompt_two: "cliff.jpg",
    prompt_three: "delta.jpg",
    prompt_four: "forest.jpg"
  },
  {
    id: 35,
    type: "image",
    question_body: "Which image shows a beach?",
    answer: "beach.jpg",
    prompt_one: "cliff.jpg",
    prompt_two: "river.jpg",
    prompt_three: "beach.jpg",
    prompt_four: "glacier.jpg"
  },
  {
    id: 36,
    type: "image",
    question_body: "Which image shows a glacier?",
    answer: "glacier.jpg",
    prompt_one: "snow_mountain.jpg",
    prompt_two: "glacier.jpg",
    prompt_three: "river.jpg",
    prompt_four: "desert.jpg"
  },
  {
    id: 37,
    type: "image",
    question_body: "Which image shows a volcano erupting?",
    answer: "volcano.jpg",
    prompt_one: "mountain.jpg",
    prompt_two: "volcano.jpg",
    prompt_three: "cliff.jpg",
    prompt_four: "glacier.jpg"
  },
  {
    id: 38,
    type: "image",
    question_body: "Which image shows an earthquake hazard scene?",
    answer: "earthquake_damage.jpg",
    prompt_one: "flood.jpg",
    prompt_two: "earthquake_damage.jpg",
    prompt_three: "volcano.jpg",
    prompt_four: "drought.jpg"
  },
  {
    id: 39,
    type: "image",
    question_body: "Which image shows flooding?",
    answer: "flood.jpg",
    prompt_one: "river.jpg",
    prompt_two: "flood.jpg",
    prompt_three: "lake.jpg",
    prompt_four: "beach.jpg"
  },
  {
    id: 40,
    type: "image",
    question_body: "Which image shows drought?",
    answer: "drought.jpg",
    prompt_one: "flood.jpg",
    prompt_two: "rainforest.jpg",
    prompt_three: "drought.jpg",
    prompt_four: "river.jpg"
  },
  {
    id: 41,
    type: "image",
    question_body: "Which image shows a rainforest biome?",
    answer: "rainforest.jpg",
    prompt_one: "coniferous_forest.jpg",
    prompt_two: "desert.jpg",
    prompt_three: "rainforest.jpg",
    prompt_four: "grassland.jpg"
  },
  {
    id: 42,
    type: "image",
    question_body: "Which image shows a hot desert biome?",
    answer: "desert.jpg",
    prompt_one: "grassland.jpg",
    prompt_two: "tundra.jpg",
    prompt_three: "desert.jpg",
    prompt_four: "rainforest.jpg"
  },
  {
    id: 43,
    type: "image",
    question_body: "Which image shows an urban area?",
    answer: "city.jpg",
    prompt_one: "village.jpg",
    prompt_two: "farm.jpg",
    prompt_three: "city.jpg",
    prompt_four: "forest.jpg"
  },
  {
    id: 44,
    type: "image",
    question_body: "Which image shows a rural settlement?",
    answer: "village.jpg",
    prompt_one: "city.jpg",
    prompt_two: "industrial_area.jpg",
    prompt_three: "village.jpg",
    prompt_four: "motorway.jpg"
  },
  {
    id: 45,
    type: "image",
    question_body: "Which image shows deforestation?",
    answer: "deforestation.jpg",
    prompt_one: "forest.jpg",
    prompt_two: "deforestation.jpg",
    prompt_three: "rainforest.jpg",
    prompt_four: "grassland.jpg"
  }

];

module.exports = questions;