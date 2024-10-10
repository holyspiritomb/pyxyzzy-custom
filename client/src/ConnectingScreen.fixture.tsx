import ConnectingScreen from "./components/ConnectingScreen"
import { useFixtureSelect, useFixtureInput } from 'react-cosmos/client';

// eslint-disable-next-line react/display-name
export default () => {
    const [state] = useFixtureSelect('state', {
        options: ["connect", "reconnect", "retry_sleep", "retry_reconnect", "connected_elsewhere", "protocol_error"],
    });
    const [retryTime] = useFixtureInput('retryTime', 30);
    return <ConnectingScreen state={state} retryTime={retryTime}></ConnectingScreen>;
};
