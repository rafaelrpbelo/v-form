export default function splitName(name) {
  const split = []

  if (name && name.length > 0) {
    let pieces = name.split(' ')

    if (pieces.length > 1) {
      let lastName = pieces.pop()
      let firstName = pieces.join(' ')

      split.push(lastName)
      split.unshift(firstName)
    } else {
      split.push(pieces[0])
    }
  }

  return split
}
