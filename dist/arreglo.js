"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flights = [
    {
        id: 1,
        number: 101,
        from: "Venezuela",
        to: "Caracas",
        capacity: 200,
        passenger: [
            {
                id: 1,
                passportNumber: "LJNPY345",
                gender: "Masculino",
                FlightId: 1
            },
            {
                id: 2,
                passportNumber: "CD789012",
                gender: "Femenino",
                FlightId: 1
            },
            {
                id: 3,
                passportNumber: "GTRQ9012",
                gender: "Femenino",
                FlightId: 1
            },
        ]
    },
    {
        id: 2,
        number: 202,
        from: "Ecuador",
        to: "Quito",
        capacity: 150,
        passenger: [
            {
                id: 4,
                passportNumber: "EF345678",
                gender: "Masculino",
                FlightId: 2
            }
        ]
    },
];
console.log(flights);
