import {CourseAction, CourseActionTypes, CourseCategoryTypes} from "../../types/course";

export function setCourseActiveCategory(category:CourseCategoryTypes): CourseAction{
    return { type: CourseActionTypes.SET_COURSE_ACTIVE_CATEGORY, payload: category}
}