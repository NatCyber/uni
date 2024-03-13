import { isApplicant } from '.';

interface Props {
  children: any;
}

export default function ApplicantRoute({ children }: Props) {
  if (isApplicant()) {
    return children;
  } else {
    return null;
  }
}
