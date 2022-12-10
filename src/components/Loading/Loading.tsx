import { LoadingEffect } from './Loading.styled'

export const Loading = () => {
  return (
    <LoadingEffect>
      <div className="infinityChrome">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoadingEffect>
  )
}
