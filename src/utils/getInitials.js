// Returns initials from string
export const getInitials = string =>
  string.split(/\s/).reduce((response, word) => {
    // Hanya menambahkan inisial jika panjang response kurang dari 2
    return response.length < 2 ? (response += word.slice(0, 1)) : response
  }, '')
