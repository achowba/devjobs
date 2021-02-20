import { Component } from "react";
import { connect } from "react-redux";

import * as Detail from "./JobDetail.styles";
import * as actionCreators from "../../../actions/JobDetail";
import Button from "../../../components/UI/Button/Button";

class JobDetail extends Component {
    componentDidMount() {
        const job_id = this.props.match.params.id;
        this.props.fetchJobDetail(job_id);
    }

    x = (url) => {
        // https://www.bitgrip.de
    }

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
                                href={job.url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Company Site
                            </Detail.SiteLink>
                        </Detail.TopBar>
                        <div className="Info">
                            <p></p>
                            <div>
                                <div className="Info-Header">
                                    <p>Senior Software Engineer</p>
                                    <p>
                                        Remote, Seoul, Tokyo, Mountain View, San
                                        Fransisco
                                    </p>
                                </div>
                                <button>Apply Now</button>
                            </div>
                            <div className="Description">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Repudiandae debitis,
                                    officiis nesciunt fugit unde sunt, deserunt
                                    qui consequuntur officia facere, quo harum
                                    ex reprehenderit quasi asperiores
                                    necessitatibus consectetur provident
                                    corrupti?
                                </p>
                            </div>
                        </div>
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
