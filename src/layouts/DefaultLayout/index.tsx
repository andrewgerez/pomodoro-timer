import * as S from './styles'
import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <S.LayoutContainer>
      <Header />
      <Outlet />
    </S.LayoutContainer>
  )
}
