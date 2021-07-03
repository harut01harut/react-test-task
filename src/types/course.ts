export type CourseCategoryTypes = 'popular' | 'favorite' | 'new'

export interface ICourseItem{
    id: number,
    name: string,
    category: string,
    lessons_count: number,
    course_time: number,
    img: string
}

export interface ICourseState {
    courses: ICourseItem[]
    active_category: '' | CourseCategoryTypes
    all_categories: CourseCategoryTypes[]
    filtered_courses: ICourseItem[]
}

export enum CourseActionTypes {
    SET_COURSE_ACTIVE_CATEGORY = 'SET_COURSE_ACTIVE_CATEGORY'
    // Here can be other course action types...
}

interface SetCourseActiveCategory {
    type: CourseActionTypes.SET_COURSE_ACTIVE_CATEGORY
    payload: CourseCategoryTypes
}

export type CourseAction = SetCourseActiveCategory

