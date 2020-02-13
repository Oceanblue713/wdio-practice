class Navbar {
  get home() {
    return $('#homeMenu');
  }

  get onlineBanking() {
    return $('#onlineBankingMenu');
  }

  get feedback() {
    return $('#feedback');
  }
}

export default new Navbar()