import { writable } from 'svelte/store';
export const mapConfig = writable({
  "title": "How much food waste do households produce?",
  "subtitle": "Households in the EU27 generated an average of 69 kg of food waste per person in 2023, with Portugal recording the highest level at 122 kg per capita, followed by Romania with 103 kg and Italy with 98 kg, while Spain had the lowest value at 26 kg.",
  "colourSchemeClasses": 7,
  "data": "country,id,value,extraInfo,text_content\nBelgium,BE,63,false,\nBulgaria,BG,41,false,\nCzechia,CZ,59,false,\nDenmark,DK,87,false,\nGermany,DE,76,false,\nEstonia,EE,78,false,\nIreland,IE,42,false,\nGreece,EL,89,false,Estimated value\nSpain,ES,26,false,Definition differs\nFrance,FR,61,false,\nCroatia,HR,55,false,Estimated value\nItaly,IT,98,false,\nCyprus,CY,74,false,Estimated value\nLatvia,LV,77,false,\nLithuania,LT,86,false,\nLuxembourg,LU,67,false,\nHungary,HU,62,false,\nMalta,MT,82,false,\nNetherlands,NL,47,false,\nAustria,AT,70,false,\nPoland,PL,70,false,\nPortugal,PT,122,false,Estimated value\nRomania,RO,103,false,\nSlovenia,SI,34,false,\nSlovakia,SK,65,false,Estimated value\nFinland,FI,60,false,\nSweden,SE,60,false,Estimated value",
  "parsedData": [
    {
      "country": "Belgium",
      "id": "BE",
      "value": 63,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Bulgaria",
      "id": "BG",
      "value": 41,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Czechia",
      "id": "CZ",
      "value": 59,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Denmark",
      "id": "DK",
      "value": 87,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Germany",
      "id": "DE",
      "value": 76,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Estonia",
      "id": "EE",
      "value": 78,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Ireland",
      "id": "IE",
      "value": 42,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Greece",
      "id": "EL",
      "value": 89,
      "extraInfo": false,
      "text_content": "Estimated value"
    },
    {
      "country": "Spain",
      "id": "ES",
      "value": 26,
      "extraInfo": false,
      "text_content": "Definition differs"
    },
    {
      "country": "France",
      "id": "FR",
      "value": 61,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Croatia",
      "id": "HR",
      "value": 55,
      "extraInfo": false,
      "text_content": "Estimated value"
    },
    {
      "country": "Italy",
      "id": "IT",
      "value": 98,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Cyprus",
      "id": "CY",
      "value": 74,
      "extraInfo": false,
      "text_content": "Estimated value"
    },
    {
      "country": "Latvia",
      "id": "LV",
      "value": 77,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Lithuania",
      "id": "LT",
      "value": 86,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Luxembourg",
      "id": "LU",
      "value": 67,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Hungary",
      "id": "HU",
      "value": 62,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Malta",
      "id": "MT",
      "value": 82,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Netherlands",
      "id": "NL",
      "value": 47,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Austria",
      "id": "AT",
      "value": 70,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Poland",
      "id": "PL",
      "value": 70,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Portugal",
      "id": "PT",
      "value": 122,
      "extraInfo": false,
      "text_content": "Estimated value"
    },
    {
      "country": "Romania",
      "id": "RO",
      "value": 103,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Slovenia",
      "id": "SI",
      "value": 34,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Slovakia",
      "id": "SK",
      "value": 65,
      "extraInfo": false,
      "text_content": "Estimated value"
    },
    {
      "country": "Finland",
      "id": "FI",
      "value": 60,
      "extraInfo": false,
      "text_content": ""
    },
    {
      "country": "Sweden",
      "id": "SE",
      "value": 60,
      "extraInfo": false,
      "text_content": "Estimated value"
    }
  ],
  "datasetType": "values",
  "datasetUnit": "fullNumbers",
  "percentRounded": false,
  "colourSchemeType": "sequential",
  "colourScheme": "purple-red",
  "colourSchemeReverse": false,
  "headlineAvailable": true,
  "subheadlineAvailable": true,
  "tooltipAvailable": true,
  "scaleBarAvailable": true,
  "overrideScaleValues": true,
  "legendAvailable": true,
  "textSourceAvailable": true,
  "textSourceDescription": "Source",
  "textSource": "Eurostat (2026)",
  "textNoteAvailable": true,
  "textNoteDescription": "Note",
  "textNote": "",
  "textDataAccessAvailable": true,
  "linkDataAccessDescription": "Access the data",
  "linkDataAccess": "https://ec.europa.eu/eurostat/databrowser/view/env_wasfw/default/table?lang=en",
  "legend1": "No data available",
  "legend1Color": "#E0E0E0",
  "colorBarFirstValue": "20",
  "colorBarLastValue": "130",
  "customUnitLabelAvailable": true,
  "customUnitLabel": "kg per capita",
  "tooltipExtraInfoLabel": "Click here",
  "translate": {
    "title": "How much food waste do households produce?",
    "subtitle": "Households in the EU27 generated an average of 69 kg of food waste per person in 2023, with Portugal recording the highest level at 122 kg per capita, followed by Romania with 103 kg and Italy with 98 kg, while Spain had the lowest value at 26 kg.",
    "textNoteDescription": "Note",
    "textNote": "",
    "textSourceDescription": "Source",
    "textSource": "Eurostat (2026)",
    "linkDataAccessDescription": "Access the data",
    "legend1": "No data available",
    "tooltipExtraInfoLabel": "Click here",
    "extraInfo_EL": "Estimated value",
    "extraInfo_ES": "Definition differs",
    "extraInfo_HR": "Estimated value",
    "extraInfo_CY": "Estimated value",
    "extraInfo_PT": "Estimated value",
    "extraInfo_SK": "Estimated value",
    "extraInfo_SE": "Estimated value"
  },
  "clusters": [],
  "colorScale": null,
  "extraInfo_EL": "Estimated value",
  "extraInfo_ES": "Definition differs",
  "extraInfo_HR": "Estimated value",
  "extraInfo_CY": "Estimated value",
  "extraInfo_PT": "Estimated value",
  "extraInfo_SK": "Estimated value",
  "extraInfo_SE": "Estimated value"
});