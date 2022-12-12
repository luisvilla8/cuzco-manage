import { LoadingEffect } from './Loading.styled'

export const Loading = ({ inLogin = false }) => {
  return (
    <LoadingEffect inLogin={inLogin}>
      <div className="infinityChrome">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingEffect>
  )
}
