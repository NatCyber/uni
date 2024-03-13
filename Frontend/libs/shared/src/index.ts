import Avatar from './lib/components/Avatar';
import FileUpload from './lib/components/FileUpload';
import NotFound from './lib/404/notFound';
import InputBox from './lib/components/InputBox';
import ButtonField from './lib/components/ButtonField';
import LinkField from './lib/components/LinkField';
import Splitter from './lib/components/Splitter';
import ErrorMessage from './lib/components/ErrorMessage';
import Preloader from './lib/components/preloader';
import Preloading from './lib/assets/Preloader/loader.gif';
import authBg from './lib/assets/pexels-pixabay-415687.webp';
import UpcomingEvents from './lib/components/UpcomingEvents';
import SideBar from './lib/components/SideBar';
import { useFileUploadMutation } from './lib/services/commonApi';
export { useUpdateProgramMutation } from './lib/services/programs-api';
export { getUser } from './lib/state/authSlice';
export { selectAllBatches } from './lib/state/BatchSlice';
export { ProgramsApi } from './lib/services/programs-api';
export { CourseOfferApi } from './lib/services/CourseOfferApi';
export { CourseApi } from './lib/services/CourseApi';
export { BatchApi } from './lib/services/BatchApi';
export { authApiSlice } from './lib/services/authApi';
export { useGetStudentApplicationsQuery } from './lib/services/StudentApplicationApi';
export { useCreateApplicationMutation } from './lib/services/StudentApplicationApi';
export {
  getAllPrograms,
  getSelectedProgram,
  selectProgram,
} from './lib/state/programs-slice';
export { baseapi } from './lib/services/api';
export { StatusCard } from './lib/components/Card';
export { MaritalStatus, FinanceFund } from './lib/components/FormData';
export { HistoryStatusCard } from './lib/components/HistoryStatusCard';
export { store, useAppDispatch } from './lib/store';
export { AuthSlice } from './lib/state/authSlice';
export { ProgramsSlice } from './lib/state/programs-slice';
export { BatchSlice } from './lib/state/BatchSlice';
export { CourseSlice } from './lib/state/Courseslice';
export { CourseOfferingSlice } from './lib/state/CourseOfferSlice';

export {
  NotFound,
  InputBox,
  ButtonField,
  LinkField,
  Splitter,
  ErrorMessage,
  Preloader,
  Preloading,
  authBg,
  Avatar,
  FileUpload,
  UpcomingEvents,
  SideBar,
  useFileUploadMutation,
};

export * from './lib/shared';
