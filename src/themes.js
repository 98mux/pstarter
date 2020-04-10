import { css } from 'linaria';
// Create class names for different themes
const lightmode = css`
  --color-primary: #6200ee;
  --color-accent: #03dac4;
`;

const darkmode = css`
  --color-primary: #03a9f4;
  --color-accent: #e91e63;
`;


//Can apply multiple different themes by multiple divs
// Stateless functional component. Fast and gives good code quality
const Theme = ({children, ...props}) => (
    <div className={lightmode}>
        <div>
        {children}
        </div>
    </div>
);

export default Theme;

