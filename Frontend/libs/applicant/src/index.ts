import ApplicationDetail from './lib/components/ApplicationDetail';
import Application from './lib/pages/application';
import Overview from './lib/pages/overview';
import Profile from './lib/pages/profile';
import Enrollment from './lib/pages/enrollment';
import History from './lib/pages/history';
import Academics from './lib/pages/academics';
import Navbar from './lib/components/navbar';
import AppSidebar from './lib/components/sidebar';
import ApplicantRoute from './lib/auth/ApplicantRoute';
import StudentRoute from './lib/auth/StudentRoute';
import { useGetStudentApplicationsQuery } from '@egst.frontend/shared';
import Applicant from './lib/applicant';
import Applicants from './lib/components/ApplicantList';
import ApplicationForm from './lib/pages/ApplicationForm';
import AppForm1 from './lib/work-flow/AppForm1';
export {
  Application,
  useGetStudentApplicationsQuery,
  ApplicationDetail,
  Academics,
  History,
  Enrollment,
  Profile,
  Overview,
  Navbar,
  AppSidebar,
  ApplicantRoute,
  StudentRoute,
  AppForm1,
};

export { Applicant, ApplicationForm, Applicants };
export * from './lib/applicant';
