import { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import JobCard from "../../components/Job/Job";
import Button from "../../components/UI/Button/Button";
import Loading from "../../components/UI/Loading/Loading";
import * as actionCreators from "../../actions/job.action";
import JobCardSkeleton from "../../components/Job/Job.skeleton";

const JobsWrapper = styled.div`
    display: grid;
    gap: 60px 30px;
    grid-template-columns: repeat(3, 1fr);
    margin: 110px auto 0 auto;
    width: calc(100% - 260px);

    @media (max-width: 1200px) {
        width: calc(100% - 100px);
    }

    @media (max-width: 1100px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

const LoadMoreWrapper = styled.div`
    align-items: center;
    display: grid;
    justify-content: center;
    margin: 40px 0 50px 0;
    padding: 10px;
`;

class Jobs extends Component {
    componentDidMount() {
        this.props.onFetchJobs();
    }

    render() {
        let jobs = Array(7)
            .fill()
            .map((item, index) => <JobCardSkeleton key={index} />);
        let loadingStatus = (
            <Button
                btnType="secondary"
                clicked={() => this.props.onLoadMoreJobs(this.props.next_page)}
            >
                Load More
            </Button>
        );

        if (this.props.jobs) {
            jobs = this.props.jobs.map((job) => (
                <JobCard job={job} key={job.id} />
            ));
        }

        if (this.props.fetching_more_jobs) {
            loadingStatus = <Loading />;
        }

        return (
            <>
                <JobsWrapper>{jobs}</JobsWrapper>
                {this.props.jobs ? (
                    <LoadMoreWrapper>{loadingStatus}</LoadMoreWrapper>
                ) : null}
            </>
        );
    }
}

const mapStateToProps = ({ jobsState }) => {
    return {
        jobs: jobsState.jobs,
        next_page: jobsState.next_page,
        fetching_more_jobs: jobsState.fetching_more_jobs,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchJobs: () => dispatch(actionCreators.fetchJobs()),
        onLoadMoreJobs: (page) => dispatch(actionCreators.loadMoreJobs(page)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
