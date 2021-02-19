import { Component } from "react";
import { connect } from "react-redux";

import * as actionCreators from '../../../actions/job.action';

class JobDetail extends Component {
    componentDidMount() {
        const job_id = this.props.match.params.id;
        this.props.fetchJobDetail(job_id);
    }

    render() {
        return <div>Job Detail</div>;
    }
}

const mapStateToProps = ({ jobsState }) => {
    return {
        job_detail: jobsState.job_detail,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchJobDetail: (id) => (dispatch(actionCreators.fetchJobDetail(id)))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);
