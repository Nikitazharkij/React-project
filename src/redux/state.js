// let state;

// const GetState = () => {
//     let url = 'http://localhost:3006/state'
//     fetch(url, { headers: {
//       'Content-Type': 'application/json'
//     }})
//         .then(resp => resp.json())
//         .then(data => state = data)
// }

// export default GetState;
// export {state};

let state = {
  "continent": {
      "africa": [
        {
          "id": 1,
          "city": "Addis Ababa",
          "country": "Ethiopia",
          "src": "./img/Africa/AddisAbaba.jpg"
        },
        {
          "id": 2,
          "city": "Cairo",
          "country": "Egipt",
          "src": "./img/Africa/Cairo.jpg"
        },
        {
          "id": 3,
          "city": "Dakar",
          "country": "Senegal",
          "src": "./img/Africa/Dakar.jpg"
        },
        {
          "id": 4,
          "city": "Accra",
          "country": "Ghana",
          "src": "./img/Africa/Accra.jpg"
      }
    ],
      "asia": [
        {
          "id": 1,
          "city": "Agra",
          "country": "India",
          "src": "./img/Asia/Agra.jpg"
        },
        {
          "id": 2,
          "city": "Astana",
          "country": "Kazakhstan",
          "src": "./img/Asia/Astana.jpg"
        },
        {
          "id": 3,
          "city": "Bangkok",
          "country": "Thailand",
          "src": "./img/Asia/Bangkok.jpg"
        },
        {
          "id": 4,
          "city": "Tokoi",
          "country": "Japan",
          "src": "./img/Asia/Tokio.jpg"
      }
    ],
      "europe": [
        {
          "id": 1,
          "city": "Amsterdam",
          "country": "Netherlands",
          "src": "./img/Europe/Amsterdam.jpg"
        },
        {
          "id": 2,
          "city": "Antalya",
          "country": "Turkey",
          "src": "./img/Europe/Antalya.jpg"
        },
        {
          "id": 3,
          "city": "Berlin",
          "country": "Germany",
          "src": "./img/Europe/Berlin.jpg"
        },
        {
          "id": 4,
          "city": "Prague",
          "country": "Czech",
          "src": "./img/Europe/Prague.jpg"
      }
    ]
  }
}

export default state;