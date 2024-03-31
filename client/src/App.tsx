import {Component, StrictMode } from "react";
import ConnectingScreen from "./components/ConnectingScreen";
import GameList from "./components/GameList";
import GameScreen from "./components/GameScreen";
import LoginScreen from "./components/LoginScreen";
import {ActingContext, AppStateContext, ConfigContext, GameContext, UserContext} from "./components/contexts"
import {AppState, GameState, UserSession} from "./state"
import {ConfigRoot} from "./api"
import {ConnectionState} from "./GameSocket"
import {toast, ToastContainer} from "react-toastify"
import ChatView from "./components/ChatView"
import "react-toastify/dist/ReactToastify.css";
import "./components/App.scss";
import { getPreferredTheme } from "./components/ThemeToggle";
import log from "loglevel";

const SERVER_URL = `ws://${window.location.hostname}:8080/ws`

class AppComponentState {
  appState: AppState

  connectionState: ConnectionState = "connect"
  config: ConfigRoot | null = null
  retryTime: number | undefined

  userSession: UserSession | null = null
  gameState: GameState | null = null
  chatMessages: any[] = []
  acting: boolean = false

  constructor(appState: AppState) {
    this.appState = appState
  }

}

class App extends Component<object, AppComponentState> {
  constructor(props: object) {
    super(props)

    const appState = new AppState()

    appState.messageHandler.onChatMessagesChange = chatMessages => this.setState({chatMessages})

    appState.connection.onConnectionStateChange = (connectionState, retryTime) => {
      this.setState({connectionState, retryTime})
      document.documentElement.classList.toggle("connecting", connectionState !== "connected")
    }
    appState.connection.onConfigChange = config => this.setState({config})
    appState.connection.onReloginFailed = () => {
      toast.error("You were logged out for being disconnected for too long, or the server restarted. Please log in again.")
    }

    appState.onUserUpdated = userSession => this.setState({userSession})
    appState.onGameStateUpdated = gameState => this.setState({gameState})
    appState.onActingChanged = acting => this.setState({acting})

    this.state = new AppComponentState(appState)
  }

  componentDidMount() {
    log.debug("app rendered");
    this.state.appState.connection.connect(SERVER_URL)
  }

  componentWillUnmount() {
    log.debug("app destroyed")
    this.state.appState.connection.disconnect()
  }

  render() {
    const {appState, config, userSession, gameState, chatMessages, acting, connectionState, retryTime} = this.state

    let gameScreen = null, chatView = null, connectingScreen = null
    if (userSession && gameState) {
      gameScreen = <GameScreen />
      chatView = <ChatView chatMessages={chatMessages} />
    } else if (userSession) {
      gameScreen = <GameList chatMessages={chatMessages} />
      chatView = <ChatView chatMessages={chatMessages} />
    } else if (config && connectionState !== "connect") {
      gameScreen = <LoginScreen />
    }
    if (connectionState !== "connected") {
      connectingScreen = <ConnectingScreen state={connectionState} retryTime={retryTime} />
    }
    function getToastTheme(): "dark" | "light" | "colored" {
      const themeColor = getPreferredTheme();
      if (themeColor === "auto" || themeColor === "light") {
        return "light";
      } else {
        return themeColor;
      }
    }
    

    return (
      <StrictMode>
        <ConfigContext.Provider value={config}>
          <AppStateContext.Provider value={appState}>
            <UserContext.Provider value={userSession}>
              <GameContext.Provider value={gameState}>
                <ActingContext.Provider value={acting}>
                    <ToastContainer
                      position="bottom-left"
                      autoClose={5000}
                      hideProgressBar={false}
                      closeOnClick
                      draggable
                      pauseOnHover
                      theme={getToastTheme()}
                      />
                    {gameScreen}
                    {chatView}
                    {connectingScreen}
                </ActingContext.Provider>
              </GameContext.Provider>
            </UserContext.Provider>
          </AppStateContext.Provider>
        </ConfigContext.Provider>
      </StrictMode>
    )
  }
}

export default App;
/* vim: set ft=typescriptreact : */
