// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WindowsFilledSvg from 'icons-base/es/asn/WindowsFilled';

export interface WindowsFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconWindowsFilled: WindowsFilledIconType = (props, context) => <Icon name='WindowsFilled' {...{ ...props, ...context.attrs }} icon={WindowsFilledSvg} />;

IconWindowsFilled.displayName = 'IconWindowsFilled';
IconWindowsFilled.theme = 'filled';
IconWindowsFilled.originName = 'windows';

export default IconWindowsFilled;
