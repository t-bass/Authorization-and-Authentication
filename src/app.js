import React from "react"
import { Switch, Route, BrowserRouter } from "react-router-dom"
import MainPage from "./loyout/mainPage"
import LoginPage from "./loyout/loginPage"
import UsersPage from "./loyout/usersPage"
import MainMenu from "./components/ui/mainMenu"
import { ToastContainer } from "react-toastify"
import { ProfessionProvider } from "./hooks/useProfessions"
import { UserProvider } from "./hooks/useUsers"
import { QualitiesProvider } from "./hooks/useQualities"
import { AuthProvider } from "./hooks/useAuth"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
    return (
        <>
            <BrowserRouter>
                <AuthProvider>
                    <MainMenu />
                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <QualitiesProvider>
                            <ProfessionProvider>
                                <Route
                                    path="/login/:type?"
                                    component={LoginPage}
                                />
                                <UserProvider>
                                    <Route
                                        path="/users/:userID/edit"
                                        exact={true}
                                        component={() =>
                                            UsersPage({ mode: "edit" })
                                        }
                                    />
                                    <Route
                                        path="/users/:userID"
                                        exact={true}
                                        component={() =>
                                            UsersPage({ mode: "view" })
                                        }
                                    />
                                    <Route
                                        path="/users/"
                                        exact={true}
                                        component={() =>
                                            UsersPage({ mode: "list" })
                                        }
                                    />
                                </UserProvider>
                            </ProfessionProvider>
                        </QualitiesProvider>
                    </Switch>
                </AuthProvider>
                <ToastContainer />
            </BrowserRouter>
        </>
    )
}

export default App
