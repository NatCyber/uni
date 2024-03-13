import { isStudent } from '.';

interface Props {
  children: any;
}

export default function StudentRoute({ children }: Props) {
  if (isStudent()) {
    return children;
  } else {
    return null;
  }
}
