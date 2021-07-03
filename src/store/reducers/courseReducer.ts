import {CourseAction, CourseActionTypes, ICourseState} from "../../types/course";

const initialState: ICourseState = {
    courses: [
        {
            id: 1,
            name: 'Illustration',
            category: 'favorite',
            lessons_count: 24,
            course_time: 134,
            img: '/images/courses/course_1.png'
        },
        {
            id: 2,
            name: 'Graphic design',
            category: 'new',
            lessons_count: 30,
            course_time: 236,
            img: '/images/courses/course_2.png'
        },
        {
            id: 3,
            name: 'Photoshop',
            category: 'new',
            lessons_count: 30,
            course_time: 236,
            img: '/images/courses/course_3.png'
        },
        {
            id: 4,
            name: 'Programming',
            category: 'popular',
            lessons_count: 36,
            course_time: 410,
            img: '/images/courses/course_3.png'
        },
        {
            id: 5,
            name: 'Other type',
            category: 'popular',
            lessons_count: 30,
            course_time: 236,
            img: '/images/courses/course_3.png'
        },
        {
            id: 6,
            name: 'Other type 2',
            category: 'favorite',
            lessons_count: 24,
            course_time: 365,
            img: '/images/courses/course_3.png'
        },
        {
            id: 7,
            name: 'Other type 3',
            category: 'popular',
            lessons_count: 40,
            course_time: 380,
            img: '/images/courses/course_3.png'
        }
    ],
    active_category: '',
    all_categories: [ 'popular', 'favorite', 'new'],
    filtered_courses: []
}


export const courseReducer = (state = initialState, action: CourseAction): ICourseState=> {
    switch (action.type){
        case CourseActionTypes.SET_COURSE_ACTIVE_CATEGORY:
            const filtered_courses = state.courses.filter(course => course.category === action.payload);
            return {...state, filtered_courses , active_category: action.payload};
        default: return state
    }
}