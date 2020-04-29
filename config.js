params =
{
    "aircraftList": ["A 300", "A 320"],

    "renderer": {
        "type": "unique-value",
        "defaultSymbol": {
            "type": "simple-fill"
        },
        "field": "Aircraft_Type",
        "uniqueValueInfos": [
            {
                "value": "A 300",
                "symbol": {
                    "type": "simple-fill",
                    "color": [
                        156,
                        209,
                        132
                    ]
                }
            },
            {
                "value": "A 320",
                "symbol": {
                    "type": "simple-fill",
                    "color": [
                        200,
                        135,
                        49
                    ]
                }
            }
        ]
    },

    "aircraftLayerURL": "https://services.arcgis.com/6I1ysurtNWNxkuwd/arcgis/rest/services/Aircraft_Playground/FeatureServer/0",

    "fieldConfig": [
        {
            "name": "Carrier",
            "label": "Carrier"
        },
        {
            "name": "Date_Out",
            "label": "Date Out"
        }
    ]
}
