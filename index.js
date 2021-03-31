class Formatter {
  static capitalize(string) {
    return string.slice(0, 1).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-z0-9\-\s']/gi, "");
  }

  static titleize(string) {
    const lowers = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    const list = string.split(" ");
    const first = Formatter.capitalize(list.shift());

    let out = list.map((word) => {
      if (lowers.includes(word)) {
        return word.toLowerCase();
      } else {
        return Formatter.capitalize(word);
      }
    });

    out.unshift(first);
    return out.join(" ");
  }
}
