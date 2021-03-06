import Snackbar from "@mui/material/Snackbar";
import ioc from '../../lib/ioc';
import { observer } from 'mobx-react-lite';

const AUTO_HIDE_DURATION = 5000;

interface IAlertProviderProps {
    children: React.ReactChild;
}

export const AlertProvider = ({
    children,
}: IAlertProviderProps) => {
    const { current } = ioc.alertService;
    return (
        <>
            {!!current && (
                <Snackbar
                    open
                    key={current.key}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    autoHideDuration={AUTO_HIDE_DURATION}
                    onClose={ioc.alertService.hideCurrent}
                    sx={{ 
                        /*'& > .MuiPaper-root': {
                            backgroundColor: 'magenta !important',
                            color: 'cyan !important'
                        }*/
                    }}
                    message={current.message}
                />
            )}
            {children}
        </>
    );
};

export default observer(AlertProvider);
