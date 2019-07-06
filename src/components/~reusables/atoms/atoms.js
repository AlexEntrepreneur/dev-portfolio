import styled from 'styled-components';
import { 
  small_space, 
  normal_space,
  medium_space,
  large_space 
} from '../variables/spacing';
import { 
  base_font_size, 
  small_font_size, 
  h3_font_size 
} from '../variables/font-sizes';
import { 
  white, 
  theme_primary,
  theme_secondary
} from '../variables/colors';


//====== Buttons ======//
export const Button = styled.button`
  min-height: 5rem;
  padding: ${normal_space} ${large_space};
  font-size: inherit;
  font-weight: 600;
  background-color: ${white};
  border: none;
  outline: none;
  margin-bottom: ${normal_space};
  border-radius: ${small_space};
  box-shadow: 0 .8rem 2.5rem 0 rgba(40, 51, 63, .11);
  transition: all 100ms ease-in-out;
  cursor: pointer;
  
  &:active {
    opacity: .8;
    box-shadow: 0 6px 10px 0 rgba(40, 51, 63, .11);
  }
`;

export const ButtonPrimary = styled(Button)`
  background-color: ${theme_primary};
  color: ${white};
`;

export const TextButton = styled(Button)`
  background-color: unset;
  box-shadow: unset;
  padding: ${normal_space};

  &:active {
    opacity: .8;
    box-shadow: unset;
  }
`;

export const TextButtonPrimary = styled(TextButton)`
  color: #3897f0;
`;

//====== Card ======//
export const Card = styled.div`
  display: flex;
  padding: ${medium_space} ${normal_space};
  border: 1px solid ${theme_secondary};
  border-radius: 2px;
  overflow: hidden;

  ${props => (props.row ? `flex-direction: row;` : null)}
  ${props => (props.column ? `flex-direction: column;` : null)}
  ${
    props => (
      props.vCenter && props.column 
      ? `justify-content: center;`
      : props.vCenter
        ? `align-items: center;`
      : null
    )
  }
  ${
    props => (
      props.hCenter && props.column
      ? `align-items: center;`
      : props.hCenter
        ? `justify-content: center;`
      : null
    )
  }
  ${props => (props.noPadding ? `padding: 0;` : null)}
  ${props => (props.padding && Array.isArray(props.padding) ? `padding: ${props.padding.join(' ')};` : null)}
  ${props => (props.padding && Array.isArray(props.padding) === false ? `padding: ${props.padding};` : null)}
  ${props => (props.fullWidth ? `width: 100%;` : null)}
  ${props => (props.width ? `width: ${props.width};` : null)}
  ${props => (props.maxWidth ? `max-width: ${props.maxWidth};` : null)}
  ${props => (props.margin ? `margin: ${props.margin};` : null)}
`;

//====== Container ======//
export const Container = styled.div`
  display: flex;

  ${props => (props.vCenter ? `justify-content: center;` : null)}
  ${props => (props.column ? `flex-direction: column;` : null)}
  ${props => (props.hCenter ? `align-items: center;` : null)}
  ${props => (props.padding && Array.isArray(props.padding) ? `padding: ${props.padding.join(' ')};` : null)}
  ${props => (props.padding && Array.isArray(props.padding) === false ? `padding: ${props.padding};` : null)}
  ${props => (props.fullWidth ? `width: 100%;` : null)}
  ${props => (props.width ? `width: ${props.width};` : null)}
  ${props => (props.bgColor ? `background-color: ${props.bgColor};` : null)}
`;

//====== Inputs ======//
export const Input = styled.input`
  appearance: none;
  display: inline-block;
  padding: ${normal_space};
  margin-bottom: ${normal_space};
  font-size: ${base_font_size};
  font-weight: 600;
  border-bottom: 2px solid rgba(40, 51, 63, .4);
  background-color: unset;
  outline: none;
  transition: all 200ms ease-in-out;
    &::placeholder {
      color: rgba(40, 51,63, .4);
      opacity: 1;
    }

    &:focus, &:checked {
      border: 2px solid ${theme_secondary};
      box-shadow: 0 0 6px 0 rgba(19,82,221,0.37);
    }
`;

//====== Text ======//
export const Text = styled.p`
  font-size: ${base_font_size};
  line-height: 2.8rem;
  margin-bottom: ${medium_space};

  ${props => (props.light ? `color: ${white};` : null)}
`;

export const SmallText = styled(Text)`
  font-size: ${small_font_size};
  margin-bottom: ${normal_space};

  ${props => (props.light ? `color: ${white};` : null)}
`;

export const H3 = styled.h3`
  font-size: ${h3_font_size};
  margin-bottom: ${normal_space};

  ${props => (props.light ? `color: ${white};` : null)}
  ${props => (props.bold ? `font-weight: bold;` : null)}
  ${props => (props.noMargin ? `margin: 0;` : null)}
  ${props => (props.color ? `color: ${props.color};` : null)}
`;

//====== View  ======//
export const View = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${props => (props.vCenter ? `justify-content: center;` : null)}
  ${props => (props.hCenter ? `align-items: center;` : null)}
  ${props => (props.bgColor ? `background-color: ${props.bgColor};` : null)}
`;