const color = {
    Primary : "#4FAAFF",
    OnPrimary : "#FFFFFF",
    Surface : "#EEF4FC",
    OnSurface : "#878787",
    OnBackgroundGray : "#A5A5A5",
    Background : "#FFFFFF",
    OnBackground : "#000000",
    Error : "#FF4444",
    OnError : "#FFFFFF",
    Outline : "#D9D9D9",
    SubColor1 : "#BFE0FF",
    OnSubColor1 : "#4378FF",
    SubColor2 : "#D2FFAE",
    SubColor3 : "#FDC9AF",
    SubColor4 : "#99CEFF"
}

const fontSize = {
    titleMediumB : "24px",
    titleSemibold : "24px",
    titleMedium : "24px",
    buttonSemibold : "16px",
    buttonMedium : "16px",
    bodyMedium : "16px",
    captionMedium : "13px",
    captionRegular : "13px"
}

const fontWeight = {
    regular : "400",
    medium : "500",
    semibold : "600"
}

export const theme = {
    color,
    fontSize,
    fontWeight
};

export type ThemeType = typeof theme;