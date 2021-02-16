import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styled, { withTheme } from "styled-components";
import * as Job from "./Job.styles";

const Wrap = styled.div`
    & span span {
        border-radius: 15px;
        height: 60px;
        margin-top: -50px;
        position: absolute;
        width: 60px;
    }
`;

const FlexWrap = styled.div`
    align-items: flex-end;
    display: grid;
    gap: 10px;
    grid-template-columns: 15% 10px 1fr;
    margin-top: 30px;
`;

const JobCardSkeleton = ({ theme }) => {
    return (
        <SkeletonTheme
            color={theme.jobCard.skeletonBg}
            highlightColor={theme.jobCard.skeletonHl}
        >
            <Job.Card>
                <Wrap>
                    <Skeleton height="60px" width="60px" />
                </Wrap>
                <FlexWrap>
                    <Skeleton height={23} />
                    <Skeleton
                        circle={true}
                        height={8}
                        width={8}
                        style={{ position: "absolute", marginTop: "-15px" }}
                    />
                    <Skeleton height={23} width={"25%"} />
                </FlexWrap>
                <p>
                    <Skeleton height={23} width={"75%"} />
                </p>
                <p>
                    <Skeleton height={23} width={"50%"} />
                </p>
                <p>
                    <Skeleton height={23} />
                    <Skeleton height={23} width={"40%"} />
                </p>
            </Job.Card>
        </SkeletonTheme>
    );
};

export default withTheme(JobCardSkeleton);
