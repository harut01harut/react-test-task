import React,{ FC } from "react";
import {useActions} from "../../hooks/useActions";
import {useTypeSelector} from "../../hooks/useTypeSelector";

const CourseFilterComponent: FC = () => {
    const {all_categories, active_category} = useTypeSelector(state => state.course)
    const {setCourseActiveCategory} = useActions()

    const capitalize = (str: string): string => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return (
        <div className={'filter-block'}>
            { all_categories.map((category, key:number) =>
                <span
                    key={key}
                    onClick={() => setCourseActiveCategory(category)} className={
                    `filter-item
                         ${ active_category === category ? " active" : ""}`
                }>
                        { capitalize(category) }
                    </span>
            ) }
        </div>

    )
}

export default CourseFilterComponent