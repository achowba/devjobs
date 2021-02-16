import moment from "moment";
import { Link } from "react-router-dom";

import * as Job from "./Job.styles";

const timeAgo = (date) => {
    if (typeof date !== "object") {
        date = new Date(date);
    }

    let seconds = Math.floor((new Date() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);
    let intervalType;

    if (interval >= 1) {
        intervalType = "y";
    } else {
        interval = Math.floor(seconds / 2592000);

        if (interval >= 1) {
            intervalType = "m";
        } else {
            interval = Math.floor(seconds / 86400);

            if (interval >= 1) {
                intervalType = "d";
            } else {
                interval = Math.floor(seconds / 3600);

                if (interval >= 1) {
                    intervalType = "h";
                } else {
                    interval = Math.floor(seconds / 60);
                    if (interval >= 1) {
                        intervalType = "m";
                    } else {
                        interval = seconds;
                        intervalType = "now";
                    }
                }
            }
        }

        if (interval > 1 || interval === 0) {
            // intervalType += "s";
        }

        const timeAgo = `${interval}${intervalType} ago`;
        return timeAgo;
    }
};

const JobCard = ({ job }) => {
    return (
        <Link to={`/job/${job.id}`} style={{ display: "grid" }}>
            <Job.Card>
                <Job.Logo imgSrc={job.company_logo} />
                <Job.Info>
                    <p>{timeAgo(job.created_at)}</p>
                    <Job.Divider />
                    <p>{job.type}</p>
                </Job.Info>
                <Job.Title>{job.title}</Job.Title>
                <Job.Company>{job.company}</Job.Company>
                <Job.Location>{job.location}</Job.Location>
            </Job.Card>
        </Link>
    );
};

export default JobCard;
