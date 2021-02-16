import { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import JobCard from "../../components/Job/Job";
import * as actionCreators from "../../actions/job.action";
import JobCardSkeleton from "../../components/Job/Job.skeleton";
import Button from "../../components/UI/Button/Button";

const JobsWrapper = styled.div`
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    margin: 110px auto 0 auto;
    width: calc(100% - 260px);

    @media (min-width: 1600px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 1200px) {
        width: calc(100% - 100px);
    }

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

const LoadMoreWrapper = styled.div`
    display: grid;
    justify-content: center;
    margin: 40px 0;
    padding: 10px;
`;

class Jobs extends Component {
    componentDidMount() {
        this.props.onFetchJobs();
    }

    render() {
        let jobs = Array(5)
            .fill()
            .map((item, index) => <JobCardSkeleton key={index} />);

        if (this.props.jobs) {
            jobs = this.props.jobs.map((job) => (
                <JobCard job={job} key={job.id} />
            ));
        }
        return (
            <>
                <JobsWrapper>{jobs}</JobsWrapper>
                {this.props.jobs ? (
                    <LoadMoreWrapper>
                        <Button btnType="secondary">Load More</Button>
                    </LoadMoreWrapper>
                ) : null}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.jobs,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchJobs: () => dispatch(actionCreators.fetchJobs()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);
