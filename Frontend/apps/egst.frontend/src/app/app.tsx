import { Route, Routes } from 'react-router-dom';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import './App.css';

import { Dashboard } from '@egst.frontend/dashboard';
import { Application, Student } from '@egst.frontend/student';

import { AppForm1, ApplicationDetail } from '@egst.frontend/applicant';
import { Login, Signup } from '@egst.frontend/auth';
import { Course } from '@egst.frontend/course';
import { CourseOffering } from '@egst.frontend/course-offering';
import { Program } from '@egst.frontend/program';
import { ProgramEdit } from '@egst.frontend/program';
import { useAppDispatch } from '@egst.frontend/shared';
import { ProgramsApi } from '@egst.frontend/shared';
import MainLayout from '../components/MainLayout';
import AdminRoutes from '../components/AdminRoutes';
import StudentRoutes from '../components/StudentRoutes';
import StudentLayout from '../components/StudentLayout';
import { OfferList } from '@egst.frontend/course-offering';
import { CourseOfferApi } from '@egst.frontend/shared';
import { CourseApi } from '@egst.frontend/shared';
import { Batch } from '@egst.frontend/batch';
import { ConcentrationsApi } from 'libs/shared/src/lib/services/ConcentrationsApi';
import { ModulesApi } from 'libs/shared/src/lib/services/ModulesApi';
import ApplicantList from 'libs/applicant/src/lib/components/ApplicantList';
import Instructor from 'libs/instructor/src/lib/instructor';
import ApplicationForm from 'libs/applicant/src/lib/pages/application/ApplicationForm';
export function App() {
  const dispatch = useAppDispatch();
  dispatch(ProgramsApi.endpoints.getAllPrograms.initiate(undefined));
  dispatch(CourseOfferApi.endpoints.getBatches.initiate(undefined));
 // dispatch(CourseApi.endpoints.getcourses.initiate(undefined));
  dispatch(ConcentrationsApi.endpoints.getConcentrations.initiate(undefined));
  dispatch(ModulesApi.endpoints.getModules.initiate(undefined));

  return (
    <Routes>
      {/* <Route path="/"> */}
      <Route element={<AdminRoutes />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="programs" element={<Program />} />
          <Route path="program-detail" element={<ProgramEdit />} />
          <Route path="course" element={<Course />} />
          <Route path="course-offering" element={<CourseOffering />} />
          <Route path="applicants" element={<ApplicantList />} />
          <Route path="offerList" element={<OfferList />} />
          <Route path="batch" element={<Batch />} />
          <Route path="application-detail" element={<ApplicationDetail />} />
          <Route path="instructors" element={<Instructor />} />
        </Route>
      </Route>
      <Route element={<StudentRoutes />}>
        <Route path="/" element={<StudentLayout />}>
          <Route path="" element={<Student />} />
          <Route path="student" element={<Student />} />
          <Route path="student/apply" element={<Application />} />
        </Route>
      </Route>
      <Route path="/apply" element={<AppForm1 />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
