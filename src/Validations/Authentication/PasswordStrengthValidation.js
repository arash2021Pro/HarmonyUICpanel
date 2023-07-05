export const schemeStrength={
    capital: /([ A-Za-z])/,
    length: /(?=.{8,250}$)/,
    specialChar: /[ -\/:-@\[-\`{-~]/,
    digit: /(?=.*[0-9])/,
}
