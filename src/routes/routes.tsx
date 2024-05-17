import { Loader } from '@/modules/core/icons'
import IsNotLogged from '@/routes/guard/isNotLogged'
import { Suspense, lazy } from 'react'
import type { ReactNode } from 'react'
import {
  Navigate,
  Route,
  Routes as RouterRoutes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import { Routes } from '.'
import Footer from '@/modules/core/components/footer'
import Navbar from '@/modules/core/components/navbar'
import { UserStore } from '@/store/user/userStore'

const Home = lazy(() => import('@/screens/home'))
const NotFoundPage = lazy(() => import('@/screens/notFoundPage'))
const Galery = lazy(() => import('@/screens/galery'))
const Generate = lazy(() => import('@/screens/generate'))
const ObjectProfile = lazy(() => import('@/screens/objectProfile'))
const UserProfile = lazy(() => import('@/screens/userProfile'))
const Login = lazy(() => import('@/screens/login'))
const Register = lazy(() => import('@/screens/register'))
const AskCredentials = lazy(() => import('@/screens/askCredentials'))
const Sent = lazy(() => import('@/screens/sent'))
const Test = lazy(() => import('@/screens/testPage'))

// user Routes de la siguiente manera: <Link to={Roues.home}>Home</Link>

export default function Navigator() {
  const UserStoreExists = UserStore((state) => state.user)
  const location = useLocation()

  const showNavbarAndSignIn = location.pathname !== '/login'
  const showNavbarAndSignUp = location.pathname !== '/register'
  const auth = (element: ReactNode) =>
    UserStoreExists ? element : <Navigate to={'/'} />

  return (
    <Suspense
      fallback={
        <div className="h-screen w-full grid place-content-center">
          <Loader className="h-[1.5rem] w-[1.5rem]" />
        </div>
      }
    >
      {showNavbarAndSignIn && showNavbarAndSignUp && (
        <>
          <Navbar />
        </>
      )}
      <RouterRoutes>
        <Route path={Routes.test} element={<Test />} />
        <Route path={Routes.userProfile} element={auth(<UserProfile />)} />
        <Route path={Routes.objectProfile} element={auth(<ObjectProfile />)} />
        <Route path={Routes.generate} element={auth(<Generate />)} />
        <Route path={Routes.galery} element={auth(<Galery />)} />
        <Route path={Routes.home} element={<Home />} />
        <Route element={<IsNotLogged />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path={Routes.login} element={<Login />} />
        <Route path={Routes.register} element={<Register />} />
        <Route path={Routes.forgotCredentials} element={<AskCredentials />} />
        <Route path={Routes.sent} element={<Sent />} />
      </RouterRoutes>
      {showNavbarAndSignIn && showNavbarAndSignUp && (
        <>
          <Footer />
        </>
      )}
    </Suspense>
  )
}
