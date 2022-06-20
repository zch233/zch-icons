// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WindowsFilledSvg from 'icon-base/es/asn/WindowsFilled';

export interface WindowsFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconWindowsFilled: WindowsFilledIconType = (props, context) => <Icon name='WindowsFilled' {...{ ...props, ...context.attrs }} icon={WindowsFilledSvg} />;

IconWindowsFilled.displayName = 'IconWindowsFilled';

export default IconWindowsFilled;
