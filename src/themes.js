import styled, {ThemeProvider} from 'styled-components';
import theme from 'styled-theming';
// https://github.com/styled-components/styled-theming
//Light/dark = the themes
//default / primary / success / warning = variants
// Eg <button varianta
//
//
/*
    Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning'])
};

Button.defaultProps = {
  variant: 'default',
};
    * */
const backgroundColor = theme.variants('mode', 'variant', {
  default: { light: 'gray', dark: 'darkgray' },
  primary: { light: 'blue', dark: 'darkblue' },
  success: { light: 'green', dark: 'darkgreen' },
  warning: { light: 'orange', dark: 'darkorange' },
});

// Stateless functional component. Fast and gives good code quality
const Theme = ({children, ...props}) => (
    <ThemeProvider theme={{ mode: 'light'}}>
        {children}
    </ThemeProvider>
);

export default Theme;


//Unsure about this?
