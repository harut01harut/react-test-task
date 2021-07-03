import React, {FC, useEffect, useState} from "react";
import {useTypeSelector} from "../../hooks/useTypeSelector";

const CourseListComponent: FC = () => {
    const { courses, active_category, filtered_courses } = useTypeSelector(state => state.course)
    const [courseResult, setCourseResult] = useState(courses)

    useEffect(() => {
        if(active_category === ''){
            setCourseResult(courses);
        }else{
            setCourseResult(filtered_courses);
        }
    },[active_category])

    return (
        <div className={'courses-list'}>
            {courseResult.map(course =>
                <div key={course.id} className={'course-item'} style={{backgroundImage: `url(${course.img})`}}>
                    <div className={'course-item-header'}>
                        <div>
                            <div>{course.name}</div>
                            <div className={'course-item-lessons'}>{course.lessons_count} lessons</div>
                        </div>
                        <span>{course.course_time} min</span>
                    </div>
                    <div className={'course-item-body'}>
                        <button className={'course-item-btn'}>
                            <div className={'play-icon'}></div>
                        </button>
                    </div>
                </div>)}
        </div>
    )
}

export default CourseListComponent