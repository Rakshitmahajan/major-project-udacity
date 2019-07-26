import {
  CoreCurriculum,
  Extracurricular,
  FreePreview
} from 'components/nanodegrees/syllabus/overview/curriculum';
import {
  DashboardContainer,
  DashboardFAQs,
  DashboardOverview,
  DashboardSchedule
} from 'components/nanodegree-dashboard';
import {makeIndexRoute, makeRoute} from './helpers';

import AnalyticsService from 'services/analytics-service';
import ConceptContainer from 'components/concepts/concept-container';
import ConceptLastViewed from 'components/concepts/last-viewed';
import ConceptShow from 'components/concepts/show';
import LabRoutes from './labs';
import LessonContainer from 'components/lessons/lesson-container';
import ModuleContainer from 'components/modules/module-container';
import NanodegreeLocked from 'components/nanodegrees/locked';
import Overview from 'components/nanodegrees/syllabus/overview';
import PartContainer from 'components/parts/part-container';
import PartLastViewed from 'components/parts/last-viewed';
import PartLocked from 'components/parts/locked';
import PartShow from 'components/parts/show';
import ProjectShow from 'components/projects/show';
import QuickStart from 'components/nanodegrees/quick-start';
import {Test as Search} from 'components/search/_search';
import Specialization from 'components/specializations/show';
import SpecializationContainer from 'components/specializations/specialization-container';
import SpecializationOptionContainer from 'components/specialization-options/option-container';
import SpecializationOptionDetails from 'components/specialization-options/details';
import SpecializationOptionLessons from 'components/specialization-options/lessons';
import SpecializationOptionResources from 'components/specialization-options/resources';
import Welcome from 'components/nanodegrees/syllabus/welcome';
import loadable from 'react-loadable';

const AsyncOnboarding = loadable({
  loader: async () => {
    const {default: Onboarding} = await import('components/onboarding');
    return Onboarding;
  },
  loading: () => null
});

export const Routes = [
  makeRoute('dashboard', DashboardContainer, {
    indexRoute: {
      onEnter: ({location: {pathname}}, replaceWith) =>
        replaceWith(`${pathname}/overview`)
    },
    childRoutes: [
      makeRoute('overview', DashboardOverview),
      makeRoute('schedule', DashboardSchedule),
      makeRoute('faqs', DashboardFAQs)
    ]
  }),
  makeRoute('syllabus', Overview, {
    onEnter: ({params: {nanodegreeKey}}) => {
      AnalyticsService.page(`My Nanodegree Syllabus - ${nanodegreeKey}`, {
        degree_key: nanodegreeKey
      });
    },
    indexRoute: {
      onEnter: ({location: {pathname}}, replaceWith) =>
        replaceWith(`${pathname}/core-curriculum`)
    },
    childRoutes: [
      makeRoute('free-preview', FreePreview),
      makeRoute('core-curriculum', CoreCurriculum),
      makeRoute('extracurricular', Extracurricular)
    ]
  }),
  makeRoute('locked', NanodegreeLocked),
  makeRoute('search', Search),
  makeRoute('onboarding', AsyncOnboarding),
  makeRoute('syllabus-welcome', Welcome),
  makeRoute('quickstart', QuickStart),
  makeRoute('parts/last-viewed', PartLastViewed),
  makeRoute('parts/:partKey', PartContainer, {
    indexRoute: makeIndexRoute(PartShow),
    childRoutes: [
      makeRoute('locked', PartLocked),
      makeRoute('project', ProjectShow),
      makeRoute('modules/:moduleKey', ModuleContainer, {
        childRoutes: [
          makeRoute('lessons/:lessonKey', LessonContainer, {
            childRoutes: [
              LabRoutes,
              makeRoute('project', ProjectShow), // For term-based nanodegrees
              makeRoute('concepts/last-viewed', ConceptLastViewed),
              makeRoute('concepts/:conceptKey', ConceptContainer, {
                indexRoute: makeIndexRoute(ConceptShow),
                onEnter: ({params}) => {
                  AnalyticsService.page(
                    `My Nanodegree Classroom - ${params.nanodegreeKey}`,
                    {
                      degree_key: params.nanodegreeKey,
                      part_key: params.partKey,
                      module_key: params.moduleKey,
                      lesson_key: params.lessonKey,
                      concept_key: params.conceptKey
                    }
                  );
                }
              })
            ]
          })
        ]
      })
    ]
  }),
  makeRoute('specializations/:specializationKey', SpecializationContainer, {
    indexRoute: makeIndexRoute(Specialization),
    childRoutes: [
      makeRoute('options/:partKey', SpecializationOptionContainer, {
        indexRoute: {
          onEnter: ({location: {pathname}}, replaceWith) =>
            replaceWith(`${pathname}/details`)
        },
        childRoutes: [
          makeRoute('details', SpecializationOptionDetails),
          makeRoute('lessons', SpecializationOptionLessons),
          makeRoute('resources', SpecializationOptionResources)
        ]
      })
    ]
  })
];
