import { PropsWithChildren } from 'react'

export const DefaultLayout = ({ children }: PropsWithChildren) => {
  return <div className="mx-24">{children}</div>
}
