import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

const AuthLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='p-10 h-screen bg-sky-100'>{children}</div>
  )
}

export default AuthLayout;
