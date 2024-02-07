import { ReactElement, ReactNode } from 'react';
import FallbackLoader from './loader';
import { ApiStatus } from 'constant';

const RenderBoundary = ({
  children,
  loading,
  status,
  customLoader,
  errorMessage,
}: {
  children: ReactNode,
  loading: boolean,
  status: string,
  customLoader?: JSX.Element,
  errorMessage?: ReactElement,
}) => {
  const Loader = customLoader || <FallbackLoader />;

  // initial load
  if (loading) {
    return Loader
  }

  if (!loading && status === ApiStatus.Failed) {
    return errorMessage || <div>default error state</div>
  }

  return children
}

export default RenderBoundary;
