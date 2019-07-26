import {makeIndexRoute, makeRoute} from './helpers';

import AnalyticsService from 'services/analytics-service';
import ConceptContainer from 'components/concepts/concept-container';
import ConceptLastViewed from 'components/concepts/last-viewed';
import ConceptShow from 'components/concepts/show';
import LessonContainer from 'components/lessons/lesson-container';
import ProjectShow from 'components/projects/show';

export const Routes = [
  makeRoute('lessons/:lessonKey', LessonContainer, {
    childRoutes: [
      // NOTE: CENG-1764 & CLAS-2390 add lesson projects for a la carte career
      makeRoute('project', ProjectShow),
      makeRoute('concepts/last-viewed', ConceptLastViewed),
      makeRoute('concepts/:conceptKey', ConceptContainer, {
        indexRoute: makeIndexRoute(ConceptShow),
        onEnter: ({params}) =>
          AnalyticsService.page(`My Course Classroom - ${params.courseKey}`, {
            course_key: params.courseKey,
            lesson_key: params.lessonKey,
            concept_key: params.conceptKey
          })
      })
    ]
  }),
  makeRoute('project', ProjectShow)
];
