const questions = [



//images

  {
    id: 31,
    type: "image",
    question_body: "Which image shows a meander in a river?",
    answer: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Meander_on_River_Axe_-_geograph.org.uk_-_440544.jpg",
    prompt_one: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Jiuzhaigou_Pearl_Waterfall_2005-08-21.jpeg",
    prompt_two: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Meander_on_River_Axe_-_geograph.org.uk_-_440544.jpg",
    prompt_three: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Coastal_delta_on_Kodiak_Island.jpg",
    prompt_four: "https://upload.wikimedia.org/wikipedia/commons/0/01/Parque_estatal_Chugach%2C_Alaska%2C_Estados_Unidos%2C_2017-08-22%2C_DD_52.jpg"
  },
  {
    id: 32,
    type: "image",
    question_body: "Which image shows a river delta?",
    answer: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Coastal_delta_on_Kodiak_Island.jpg",
    prompt_one: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Coastal_delta_on_Kodiak_Island.jpg",
    prompt_two: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Seven_Sisters_3.jpg",
    prompt_three: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Jiuzhaigou_Pearl_Waterfall_2005-08-21.jpeg",
    prompt_four: "https://upload.wikimedia.org/wikipedia/commons/8/82/Mount_Shasta%2C_Lake_Siskiyou%2C_SW_view.jpg"
  },
  {
    id: 33,
    type: "image",
    question_body: "Which image shows a waterfall?",
    answer: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Jiuzhaigou_Pearl_Waterfall_2005-08-21.jpeg",
    prompt_one: "https://upload.wikimedia.org/wikipedia/commons/2/27/Wey_source_farringdon.jpg",
    prompt_two: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Jiuzhaigou_Pearl_Waterfall_2005-08-21.jpeg",
    prompt_three: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Coastal_delta_on_Kodiak_Island.jpg",
    prompt_four: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Cala_de_la_Granadella%2C_J%C3%A1vea%2C_Espa%C3%B1a%2C_2014-07-01%2C_DD_37.JPG"
  },
  {
    id: 34,
    type: "image",
    question_body: "Which image shows coastal cliffs?",
    answer: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Seven_Sisters_3.jpg",
    prompt_one: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Beach_in_Town_Albufeira%2C_Portugal.jpg",
    prompt_two: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Seven_Sisters_3.jpg",
    prompt_three: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Coastal_delta_on_Kodiak_Island.jpg",
    prompt_four: "https://upload.wikimedia.org/wikipedia/commons/3/34/Spruce_forest_at_Holma.jpg"
  },
  {
    id: 35,
    type: "image",
    question_body: "Which image shows a beach?",
    answer: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Beach_in_Town_Albufeira%2C_Portugal.jpg",
    prompt_one: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Seven_Sisters_3.jpg",
    prompt_two: "https://upload.wikimedia.org/wikipedia/commons/8/89/Wilkin_River_close_to_its_confluence_with_Makarora_River%2C_Otago%2C_New_Zealand.jpg",
    prompt_three: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Beach_in_Town_Albufeira%2C_Portugal.jpg",
    prompt_four: "https://upload.wikimedia.org/wikipedia/commons/0/01/Parque_estatal_Chugach%2C_Alaska%2C_Estados_Unidos%2C_2017-08-22%2C_DD_52.jpg"
  },
  {
    id: 36,
    type: "image",
    question_body: "Which image shows a glacier?",
    answer: "https://upload.wikimedia.org/wikipedia/commons/0/01/Parque_estatal_Chugach%2C_Alaska%2C_Estados_Unidos%2C_2017-08-22%2C_DD_52.jpg",
    prompt_one: "https://upload.wikimedia.org/wikipedia/commons/8/82/Mount_Shasta%2C_Lake_Siskiyou%2C_SW_view.jpg",
    prompt_two: "https://upload.wikimedia.org/wikipedia/commons/0/01/Parque_estatal_Chugach%2C_Alaska%2C_Estados_Unidos%2C_2017-08-22%2C_DD_52.jpg",
    prompt_three: "https://upload.wikimedia.org/wikipedia/commons/8/89/Wilkin_River_close_to_its_confluence_with_Makarora_River%2C_Otago%2C_New_Zealand.jpg",
    prompt_four: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Caravan_in_the_desert.jpg"
  },
  {
    id: 37,
    type: "image",
    question_body: "Which image shows a volcano erupting?",
    answer: "https://upload.wikimedia.org/wikipedia/commons/1/13/An_aerial_view_of_the_towering_volcanic_peak_of_Mt._Nyiragongo.jpg",
    prompt_one: "https://upload.wikimedia.org/wikipedia/commons/8/82/Mount_Shasta%2C_Lake_Siskiyou%2C_SW_view.jpg",
    prompt_two: "https://upload.wikimedia.org/wikipedia/commons/1/13/An_aerial_view_of_the_towering_volcanic_peak_of_Mt._Nyiragongo.jpg",
    prompt_three: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Seven_Sisters_3.jpg",
    prompt_four: "https://upload.wikimedia.org/wikipedia/commons/0/01/Parque_estatal_Chugach%2C_Alaska%2C_Estados_Unidos%2C_2017-08-22%2C_DD_52.jpg"
  },
  {
    id: 38,
    type: "image",
    question_body: "Which image shows an earthquake hazard scene?",
    answer: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Earthquake_damage%2C_4-64._Anchorage_-_Fourth_Ave._Graben._See_photos_527%2C882%2C301A%2C_621_%28looking_east%29_%2824822219172%29_%28cropped%29.jpg",
    prompt_one: "https://upload.wikimedia.org/wikipedia/commons/2/24/Flood_23.jpg",
    prompt_two: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Earthquake_damage%2C_4-64._Anchorage_-_Fourth_Ave._Graben._See_photos_527%2C882%2C301A%2C_621_%28looking_east%29_%2824822219172%29_%28cropped%29.jpg",
    prompt_three: "https://upload.wikimedia.org/wikipedia/commons/1/13/An_aerial_view_of_the_towering_volcanic_peak_of_Mt._Nyiragongo.jpg",
    prompt_four: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Dry_land_%28cracked%29_7.jpg"
  },
  {
    id: 39,
    type: "image",
    question_body: "Which image shows flooding?",
    answer: "https://upload.wikimedia.org/wikipedia/commons/2/24/Flood_23.jpg",
    prompt_one: "https://upload.wikimedia.org/wikipedia/commons/8/89/Wilkin_River_close_to_its_confluence_with_Makarora_River%2C_Otago%2C_New_Zealand.jpg",
    prompt_two: "https://upload.wikimedia.org/wikipedia/commons/2/24/Flood_23.jpg",
    prompt_three: "https://upload.wikimedia.org/wikipedia/commons/1/17/Lake_Geneva_from_Chillon_Castle.jpg",
    prompt_four: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Beach_in_Town_Albufeira%2C_Portugal.jpg"
  },
  {
    id: 40,
    type: "image",
    question_body: "Which image shows drought?",
    answer: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Dry_land_%28cracked%29_7.jpg",
    prompt_one: "https://upload.wikimedia.org/wikipedia/commons/2/24/Flood_23.jpg",
    prompt_two: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Amazonian_rainforest_2.JPG",
    prompt_three: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Dry_land_%28cracked%29_7.jpg",
    prompt_four: "https://upload.wikimedia.org/wikipedia/commons/8/89/Wilkin_River_close_to_its_confluence_with_Makarora_River%2C_Otago%2C_New_Zealand.jpg"
  },
  {
    id: 41,
    type: "image",
    question_body: "Which image shows a rainforest biome?",
    answer: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Amazonian_rainforest_2.JPG",
    prompt_one: "https://upload.wikimedia.org/wikipedia/commons/3/34/Spruce_forest_at_Holma.jpg",
    prompt_two: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Caravan_in_the_desert.jpg",
    prompt_three: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Amazonian_rainforest_2.JPG",
    prompt_four: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Grassland_Near_The_Burf_-_geograph.org.uk_-_1400554.jpg"
  },
  {
    id: 42,
    type: "image",
    question_body: "Which image shows a hot desert biome?",
    answer: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Caravan_in_the_desert.jpg",
    prompt_one: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Grassland_Near_The_Burf_-_geograph.org.uk_-_1400554.jpg",
    prompt_two: "https://upload.wikimedia.org/wikipedia/commons/9/97/Northwest_Territories_tundra_stones.jpg",
    prompt_three: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Caravan_in_the_desert.jpg",
    prompt_four: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Amazonian_rainforest_2.JPG"
  },
  {
    id: 43,
    type: "image",
    question_body: "Which image shows an urban area?",
    answer: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Lower_Manhattan_from_Jersey_City_July_2014_002.jpg",
    prompt_one: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Guarda_Air2.JPG",
    prompt_two: "https://upload.wikimedia.org/wikipedia/commons/6/69/Catoctin_Mountain_and_farm_MD1.jpg",
    prompt_three: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Lower_Manhattan_from_Jersey_City_July_2014_002.jpg",
    prompt_four: "https://upload.wikimedia.org/wikipedia/commons/3/34/Spruce_forest_at_Holma.jpg"
  },
  {
    id: 44,
    type: "image",
    question_body: "Which image shows a rural settlement?",
    answer: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Guarda_Air2.JPG",
    prompt_one: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Lower_Manhattan_from_Jersey_City_July_2014_002.jpg",
    prompt_two: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Wedgwood_Factory_-_geograph.org.uk_-_383594.jpg",
    prompt_three: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Guarda_Air2.JPG",
    prompt_four: "https://upload.wikimedia.org/wikipedia/commons/a/af/M6_motorway_-_geograph.org.uk_-_7929774.jpg"
  },
  {
    id: 45,
    type: "image",
    question_body: "Which image shows deforestation?",
    answer: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Mount_St_Helens-summer_2003.jpg",
    prompt_one: "https://upload.wikimedia.org/wikipedia/commons/3/34/Spruce_forest_at_Holma.jpg",
    prompt_two: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Mount_St_Helens-summer_2003.jpg",
    prompt_three: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Amazonian_rainforest_2.JPG",
    prompt_four: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Grassland_Near_The_Burf_-_geograph.org.uk_-_1400554.jpg"
  }

];

module.exports = questions;