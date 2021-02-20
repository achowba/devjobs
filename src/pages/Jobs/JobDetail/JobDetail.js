import { Component } from "react";
import { connect } from "react-redux";

import * as Detail from "./JobDetail.styles";
import { timeAgo } from "../../../helpers/job.helpers";
import { Divider } from "../../../components/Job/Job.styles";
import Button from "../../../components/UI/Button/Button";
import * as actionCreators from "../../../actions/JobDetail";

class JobDetail extends Component {
    componentDidMount() {
        const job_id = this.props.match.params.id;
        this.props.fetchJobDetail(job_id);
    }

    x = (url) => {
        // https://www.bitgrip.de
    };

    render() {
        let jobDetail = "Loading....";
        const job = this.props.job_detail;

        if (job) {
            jobDetail = (
                <>
                    <Detail.Wrapper>
                        <Detail.TopBar>
                            <Detail.CompanyLogo imgSrc={job.company_logo} />
                            <Detail.CompanyName>
                                <p>{job.company}</p>
                                <p>{job.company_url || job.company}</p>
                            </Detail.CompanyName>
                            <Detail.SiteLink
                                href={job.company_url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Company Site
                            </Detail.SiteLink>
                        </Detail.TopBar>
                        <Detail.More>
                            <Detail.FlexWrap>
                                <div>
                                    <Detail.Info>
                                        <p>{timeAgo(job.created_at)}</p>
                                        <Divider />
                                        <p>{job.type}</p>
                                    </Detail.Info>
                                    <Detail.Title>{job.title}</Detail.Title>
                                    <Detail.Location>
                                        {job.location}
                                    </Detail.Location>
                                </div>
                                <Button
                                    btnType="secondary"
                                    style={{ width: "25%" }}
                                    href="/"
                                >
                                    Apply Now
                                </Button>
                            </Detail.FlexWrap>
                            <Detail.Description>
                                {job.description}
                            </Detail.Description>
                        </Detail.More>
                    </Detail.Wrapper>
                    <footer>
                        <div className="Info-Header">
                            <p>Senior Software Engineer</p>
                            <p>
                                Remote, Seoul, Tokyo, Mountain View, San
                                Fransisco
                            </p>
                        </div>
                    </footer>
                </>
            );
        }

        return jobDetail;
    }
}

const mapStateToProps = ({ jobsDetailState }) => {
    return {
        job_detail: jobsDetailState.job_detail,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchJobDetail: (id) => dispatch(actionCreators.fetchJobDetail(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
