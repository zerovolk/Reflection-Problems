export function areYouPlayingBanjo(name) {
    if (!name) return;
    if (name.charAt(0) == "r" || name.charAt(0) == "R") {
        return name + " plays banjo"
    }
    return name + " does not play banjo";
}