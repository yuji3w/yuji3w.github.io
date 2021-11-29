let instance = new TypeIt("#type-hook", {speed: 100, loop: true});
instance
    .type('I\'m <span class="title">a</span> software engineer')
    .pause(500)
    .delete(".title", { to: "END" })
    .type(' board game fan')
    .pause(500)
    .delete(".title", { to: "END" })
    .type(' Dungeons and Dragons enthusiast')
    .pause(500)
    .delete(".title", { to: "END" })
    .type(' space fan')
    .pause(500)
    .delete(".title", { to: "END" })
    .type(' hiker')
    .pause(500)
    .delete(".title", { to: "END" })
    .go();