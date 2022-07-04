import { FunctionalComponent } from 'vue';
import Icon from './Icon';

export const IconCustom: FunctionalComponent<{ icon: string }> = (props, context) => {
    const modules = import.meta.globEager('../../../../src/assets/svg/*.svg');
    return <Icon icon={{ icon: modules[`../../../../src/assets/svg/${props.icon}.svg`].default, theme: 'colorful', name: 'empty' }} />;
};
