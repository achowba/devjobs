export const timeAgo = (date) => {
    if (typeof date !== "object") {
        date = new Date(date);
    }

    let seconds = Math.floor((new Date() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);
    let intervalType = "y";

    if (interval <= 1) {
        interval = Math.floor(seconds / 2592000);
        intervalType = "m";

        if (interval <= 1) {
            interval = Math.floor(seconds / 86400);
            intervalType = "d";

            if (interval <= 1) {
                interval = Math.floor(seconds / 3600);
                intervalType = "h";

                if (interval <= 1) {
                    interval = Math.floor(seconds / 60);
                    intervalType = "m";

                    if (interval <= 1) {
                        interval = seconds;
                        intervalType = "now";
                    }
                }
            }
        }

        const timeAgo = `${interval}${intervalType} ago`;
        return timeAgo;
    }
};
