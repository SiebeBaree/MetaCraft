// milliseconds to time converter
module.exports.msToTime = ms => {
    const days = Math.floor(ms / (1000 * 60 * 60 * 60));
    const hours = Math.floor(ms / (1000 * 60 * 60) % 60);
    const minutes = Math.floor(ms / (1000 * 60) % 60);
    const seconds = Math.floor(ms / (1000) % 60);

    let str = "";
    if (days) str = str + days + "d ";
    if (hours) str = str + hours + "h ";
    if (minutes) str = str + minutes + "m ";
    if (seconds) str = str + seconds + "s";

    return str || "0s";
};

module.exports.progressBar = (value, maxValue, size) => {
    const percentage = value / maxValue;
    const progress = Math.round((size * percentage));
    const emptyProgress = size - progress;

    const progressText = '▇'.repeat(progress);
    const emptyProgressText = '—'.repeat(emptyProgress);

    const bar = '[' + progressText + emptyProgressText + ']';
    return bar;
};

module.exports.isUserLevelUp = (xp, lvl) => {
    if (this.getXpNeeded(lvl + 1) - xp < 0) return true;
    else return false;
};

module.exports.getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
};

module.exports.getXpNeeded = (lvl) => {
    let xpNeeded = 0;

    for (let i = 0; i < lvl; i++) {
        xpNeeded += 5 * (i ** 2) + (50 * i) + 100;
    }

    return xpNeeded;
};