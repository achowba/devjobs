import { Link } from "react-router-dom";

import * as Job from "./Job.styles";
import { timeAgo } from "../../helpers/job.helpers";

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
