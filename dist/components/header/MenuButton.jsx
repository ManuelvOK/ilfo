import MenuLogo from './MenuLogo';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AnimationContext } from '../../GlobalContext';
const MenuButton = () => {
    const { dispatchMenuAnimation } = useContext(AnimationContext);
    return (<motion.button type="button" className="header__btn" onClick={() => {
            dispatchMenuAnimation({ type: 'CLICK-TOGGLE' });
        }} onHoverStart={() => {
            dispatchMenuAnimation({ type: 'HOVER-TOGGLE' });
        }} onHoverEnd={() => {
            dispatchMenuAnimation({ type: 'HOVER-TOGGLE' });
        }}>
            <motion.div className="header__bg"/>
            <MenuLogo />
        </motion.button>);
};
export default MenuButton;