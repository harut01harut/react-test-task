import React,{ FC } from "react";
import CourseFilterComponent from "../components/page-components/CourseFilterComponent";
import CourseListComponent from "../components/page-components/CourseListComponent";

const Dashboard: FC = () => {

    return (
        <div>
            <div className={'page-header'}>
                <h1 className={'page-title'}> Dashboard </h1>
                <CourseFilterComponent/>
            </div>
            <CourseListComponent/>
        </div>
    )
}

export default Dashboard