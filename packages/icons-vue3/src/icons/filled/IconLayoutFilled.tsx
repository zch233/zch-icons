// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LayoutFilledSvg from 'icons-base/es/asn/LayoutFilled';

export interface LayoutFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLayoutFilled: LayoutFilledIconType = (props, context) => <Icon name='LayoutFilled' {...{ ...props, ...context.attrs }} icon={LayoutFilledSvg} />;

IconLayoutFilled.displayName = 'IconLayoutFilled';
IconLayoutFilled.theme = 'filled';
IconLayoutFilled.originName = 'layout';

export default IconLayoutFilled;
