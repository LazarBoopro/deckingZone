import { AllPricesType, PillarsTypeEnum, WallTypeEnum } from "../interfaces/interfaces";

export const tableRows = [
    {
        key: "element",
        label: "Element",
    },
    {
        key: "amount",
        label: "Količina",
    },
    {
        key: "unit",
        label: "Jedinica",
    },
    {
        key: "price",
        label: "Cena €",
    },
    {
        key: "total",
        label: "Ukupno €",
    },
];

export const prices: AllPricesType = {
    [WallTypeEnum.WOOD_1]: {
        element: "Wood Mocha m2 (150mm x 21mm x 1770mm)",
        unit: "m2",
        price: 38,
    },
    [WallTypeEnum.WOOD_2]: {
        element: "Wood Ash Gray m2 (150mm x 21mm x 1770mm)",
        unit: "m2",
        price: 38,
    },
    [WallTypeEnum.WOOD_3]: {
        element: "Wood Treak m2 (150mm x 21mm x 1770mm)",
        unit: "m2",
        price: 38,
    },
    [WallTypeEnum.ORIGINAL_1]: {
        element: "Original Treak m2 (150mm x 21mm x 1770mm)",
        unit: "m2",
        price: 38,
    },
    [WallTypeEnum.ORIGINAL_2]: {
        element: "Original Pistachio m2 (150mm x 21mm x 1770mm)",
        unit: "m2",
        price: 38,
    },
    [WallTypeEnum.ORIGINAL_3]: {
        element: "Original Mocha m2 (150mm x 21mm x 1770mm)",
        unit: "m2",
        price: 38,
    },

    [PillarsTypeEnum.ALUMINIUM]: {
        element: "Aluminijumski stub  ( 68mm x 68mm x 1770mm)",
        unit: "kom",
        price: 40,
    },

    aluminium_molding: {
        element: "Alu stubna lajsna ( 23,6mm x 7mm x 1770mm )",
        unit: "kom",
        price: 3.5,
    },

    start_aluminium_molding: {
        element: "Početna aluminijumska lajsna ( 21,5mm x 30mm x 1770mm )",
        unit: "kom",
        price: 8,
    },

    end_aluminium_molding: {
        element: "Završna aluminijumska lajsna ",
        unit: "kom",
        price: 8,
    },

    plastic_cap: {
        element: "Plastična kapa stuba ",
        unit: "kom",
        price: 1.5,
    },

    pillar_mask: {
        element: "Maska za stubnu stopu ",
        unit: "kom",
        price: 2.5,
    },
    column_foot: {
        element: " Stopa za stub / nosač stuba  ",
        unit: "kom",
        price: 10,
    },
    anchor: {
        element: "Ankeri ",
        unit: "kom",
        price: 1,
    },
    screw: {
        element: "Šrafovi za ankere  ",
        unit: "kom",
        price: 0.5,
    },
    winkle: {
        element: "Stubna L Vinkla sa šrafovima  ",
        unit: "kom",
        price: 1.2,
    },
    decors: {
        element: "Dekorativne aplikacije  (300mm x 20mm x 1800mm) ",
        unit: "kom",
        price: 40,
    },
};

export const heightList = [
    { label: "45 cm", value: 45 },
    { label: "60 cm", value: 60 },
    { label: "75 cm", value: 75 },
    { label: "90 cm", value: 90 },
    { label: "105 cm", value: 105 },
    { label: "120 cm", value: 120 },
    { label: "135 cm", value: 135 },
    { label: "150 cm", value: 150 },
    { label: "165 cm", value: 165 },
    { label: "180 cm", value: 180 },
];
